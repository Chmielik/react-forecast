import React from 'react'
import { getLocation, handleLocationError } from '../utils'

class Home extends React.Component {
  state = {
    latitude: null,
    longitude: null,
    error: null,
    fetching: true
  }

  setCoordinates = ({ coords }) => {
    const { latitude, longitude } = coords
    return this.setState({ latitude, longitude })
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
    const { latitude, longitude, fetching, error } = this.state
    if (fetching) {
      return <div>Loading...</div>
    }
    if (error) {
      return <div>{error}</div>
    }
    return <div>{latitude} {longitude}</div>
  }
}

export default Home
