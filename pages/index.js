import React from 'react'
import { connect } from 'react-redux'
import { getLocation, handleLocationError } from '../utils'
import { setCoordinates } from '../store'

class Home extends React.Component {
  state = {
    error: null,
    fetching: true
  }

  setCoordinates = ({ coords }) => {
    const { latitude, longitude } = coords
    this.props.setCoordinates({ latitude, longitude })
  }

  componentDidMount () {
    getLocation()
      .then(position => {
        this.setCoordinates(position)
      })
      .catch(err => this.setState({ error: handleLocationError(err) }))
      .finally(() => this.setState({ fetching: false }))
  }
  render () {
    const { fetching, error } = this.state
    const { latitude, longitude } = this.props.coordinates
    if (fetching) {
      return <div>Loading...</div>
    }
    if (error) {
      return <div>{error}</div>
    }
    return <div>{latitude} {longitude}</div>
  }
}

const mapDispatchToProps = { setCoordinates }

const mapStateToProps = ({ coordinates }) => ({
  coordinates
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
