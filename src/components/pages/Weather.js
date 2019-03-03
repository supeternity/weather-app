import React from 'react';
import { connect } from 'react-redux';

import Day from './Weather/Day';
import Week from './Weather/Week';
import Loader from '../ui/Loader';
import Notification from '../ui/Notification';

import {
  getGeoAccess,
  getWeatherData
} from '../../actions/weather';

const weatherStaticExternal = 'https://www.metaweather.com/static/img/weather/';


export class Weather extends React.Component {
  render () {

    const {
      locale
    } = this.props.settings;
    const {
      geoSupportCheck,
      geoDataRequesting,
      weatherFetching,
      geoPosition,
      weatherSource,
      weatherSelectedDay,
      weatherTempUnit,
      weatherSpeedUnit
    } = this.props.weather;
    const {
      geoDataRequest,
      weatherDataRequest
    } = this.props.actions;


    if (geoSupportCheck) {
      // // 
      if (geoDataRequesting) {
        geoDataRequest();
        return (
          <>
            <Loader />
            <Notification
              message={'Разрешите доступ к геоданным'} />
          </>
        )
      } else if (weatherFetching) {
        weatherDataRequest(`${geoPosition.latitude},${geoPosition.longitude}`);
        return (
          <>
            <Loader />
            <Notification
              message={'Загрузка погодных данных...'} />
          </>
        )
      } else if (!geoDataRequesting || !weatherFetching) {
        return (
          <>
            <Day
              city={weatherSource.city}
              weatherTempUnit={weatherTempUnit}
              weatherSpeedUnit={weatherSpeedUnit}
              weatherStaticExternal={weatherStaticExternal}
              locale={locale}
              oneDayMonitor={
                weatherSource.consolidated[weatherSelectedDay]
              } />
            <Week
              weekCalendar={weatherSource.consolidated}
              weatherTempUnit={weatherTempUnit}
              weatherSpeedUnit={weatherSpeedUnit}
              weatherStaticExternal={weatherStaticExternal}
              locale={locale}
              calendarCols={weatherSource.consolidated.length} />
          </>
        )
      }
      // //
    } else {
      return (
        <>
          Ваш браузер не поддерживает геолокацию
        </>
      )
    }
  }
};


const mapStateToProps = store => ({
  weather: store.weather,
  settings: store.settings
});
const mapDispatchToProps = dispatch => ({
  actions: {
    geoDataRequest: () => dispatch(getGeoAccess()),
    weatherDataRequest: coords => dispatch(getWeatherData(coords)),
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
