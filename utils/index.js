export const getLocation = async () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      // quick fix if localhost asks too frequently
      // resolve({ coords: { latitude: 1, longitude: 2 } })
      navigator.geolocation.getCurrentPosition(resolve, reject)
    } else {
      reject(new Error({ code: 'NOT_SUPPORTED' }))
    }
  })
}

export const handleLocationError = (error) => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      return 'User denied the request for Geolocation.'
    case error.POSITION_UNAVAILABLE:
      return 'Location information is unavailable.'
    case error.TIMEOUT:
      return 'The request to get user location timed out.'
    case error.NOT_SUPPORTED:
      return 'Geolocation is not supported by this browser.'
    case error.UNKNOWN_ERROR:
      return 'An unknown error occurred.'
  }
}
