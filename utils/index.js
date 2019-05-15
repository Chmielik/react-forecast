export const getLocation = async () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    } else {
      reject(new Error({ code: 'NOT_SUPPORTED' }))
    }
  })
}

// export const showPosition = (position) => {
//     return { position}
//   x.innerHTML = 'Latitude: ' + position.coords.latitude +
//     '<br>Longitude: ' + position.coords.longitude
// }

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
