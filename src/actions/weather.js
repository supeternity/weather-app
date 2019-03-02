const GET_GEO_SUCCESS = 'GET_GEO_SUCCESS';
const GET_GEO_ERROR = 'GET_GEO_ERROR';

export const getGeoAccess = () => {
  return dispatch => {
    navigator.geolocation.getCurrentPosition(
    (position) => {
      dispatch({
        type: GET_GEO_SUCCESS,
        payload: position
      })
    },
    (error) => {
      dispatch({
        type: GET_GEO_ERROR,
        payload: error
      })
    });
  }
}


const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
const GET_WEATHER_ERROR = 'GET_WEATHER_ERROR';

export const getWeatherData = coords => {
  return dispatch => {
    fetch(`${process.env.REACT_APP_API_HOST}${process.env.REACT_APP_API_WEATHER}/${coords}/`)
    .then(res => res.json())
    .then(json => {
      dispatch({
        type: GET_WEATHER_SUCCESS,
        payload: json
      })
    }).catch(err => {
      dispatch({
        type: GET_WEATHER_ERROR,
        payload: err
      })
    })
  }
}
