export const initialState = {
  geoSupportCheck: navigator.geolocation ? true : false,
  geoDataRequesting: true,
  weatherFetching: false
};

export function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_GEO_SUCCESS':
      return { ...state,
        geoPosition: action.payload.coords,
        geoDataRequesting: false,
        weatherFetching: true
      }
    case 'GET_GEO_ERROR':
      return { ...state,
        geoError: action.payload
      }
    case 'GET_GEO_IP_SUCCESS':
      return { ...state,
        geoPosition:{
          latitude: action.payload.geoplugin_latitude,
          longitude: action.payload.geoplugin_longitude
        },
        geoDataRequesting: false,
        weatherFetching: true
      }
    case 'GET_GEO_IP_ERROR':
      return { ...state,
        geoIpError: action.payload,
        geoDataRequesting: false,
        weatherFetching: false
      }
    case 'GET_WEATHER_SUCCESS':
      return { ...state,
        weatherSource: action.payload,
        weatherTempUnit: 'C°',
        weatherSpeedUnit: 'm/s',
        weatherSelectedDay: 0,
        weatherFetching: false
      }
    case 'GET_WEATHER_ERROR':
      return { ...state,
        weatherError: action.palyload,
        weatherFetching: false
      }
    default:
      return state
  }
}
