const GET_GEO_SUCCESS = 'GET_GEO_SUCCESS';
const GET_GEO_ERROR = 'GET_GEO_ERROR';

export const getGeoAccess = () => {
  return dispatch => {
    navigator.geolocation.getCurrentPosition(
    position => {
      dispatch({
        type: GET_GEO_SUCCESS,
        payload: position
      })
    },
    err => {
      dispatch({
        type: GET_GEO_ERROR,
        payload: err
      })
    });
  }
}


const GET_GEO_IP_SUCCESS = 'GET_GEO_IP_SUCCESS';
const GET_GEO_IP_ERROR = 'GET_GEO_IP_ERROR';

export const getGeoFromIp = () => {
  return dispatch => {
    fetch('http://www.geoplugin.net/json.gp')
    .then(res => res.json())
    .then(json => {
      dispatch({
        type: GET_GEO_IP_SUCCESS,
        payload: json
      })
    })
    .catch(err => {
      dispatch({
        type: GET_GEO_IP_ERROR,
        payload: err
      })
    })
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
