import React from 'react';
import styled from 'styled-components';

import DateTracer from '../../ui/DateTracer';
import WeekDay from './WeekDay';


const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(${p => p.weekColumns}, 1fr);
  padding: 0 4.25vw;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 47vh;
  background: ${p => p.theme.backgroundColorSecond};
`;


export class Week extends React.Component {

  calendarFactory() {
    const list = this.props.weekCalendar.map((day, i) => {

      day.dateWeek = DateTracer(day.date, 'short', this.props.locale);

      return <WeekDay
        key={`week-day-${i}`}
        tick={i}
        weekDay={day}
        weatherStaticExternal={this.props.weatherStaticExternal}
        weatherTempUnit={this.props.weatherTempUnit}
        weatherSpeedUnit={this.props.weatherSpeedUnit} />
    });
    return list;
  };

  render() {
    return (
      <Container weekColumns={this.props.calendarCols}>
        {this.calendarFactory()}
      </Container>
    );
  }
};


export default Week;