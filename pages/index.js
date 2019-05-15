import React from 'react'
import { connect } from 'react-redux'
import { getLocation, handleLocationError } from '../utils'
import { setCoordinates } from '../store'
import Forecast from '../components/Forecast'

class Home extends React.Component {
  state = {
    error: null,
    fetching: true
  }

  setCoordinates = ({ coords }) => {
    const { latitude, longitude } = coords
    this.props.setCoordinates({ latitude, longitude })
  }

  async componentDidMount () {
    await getLocation()
      .then(position => {
        this.setCoordinates(position)
      })
      .catch(err => this.setState({ error: handleLocationError(err) }))
      .finally(() => this.setState({ fetching: false }))
  }

  render () {
    const { fetching, error } = this.state
    if (fetching) {
      return <div>Loading...</div>
    }
    if (error) {
      return <div>{error}</div>
    }
    return <Forecast />
  }
}

const mapDispatchToProps = { setCoordinates }

export default connect(
  null,
  mapDispatchToProps
)(Home)
