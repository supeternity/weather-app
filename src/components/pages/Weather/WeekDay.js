import React from 'react';
import styled from 'styled-components';


const Day = styled.div`
  padding-top: 5.5vh;
  text-align: center;
`;
const Date = styled.div`
  font-family: ${p => p.theme.fontFamilySecond};
  font-weight: 300;
  color: ${p => p.theme.elementColorSecond};
`;
const Temp = styled.div`
  padding-top: 12vh;
  background: url(${p => p.showIcon}) no-repeat center top 3vh;
  background-size: 30%;
`;
const TempValue = styled.div`
  font-size: 3em;
`;
const TempRange = styled.div`
  padding-top: 1vh;
  font-family: ${p => p.theme.fontFamilySecond};
  font-weight: 300;
`;
const Wind = styled.div`
  padding-top: 5vh;
`;
const WindCompass = styled.span`
  color: ${p => p.theme.mainSignalColor};
  font-family: ${p => p.theme.fontFamily};
  font-weight: ${p => p.theme.fontFamilyLight};
`;
const WindSpeed = styled.span`
  color: ${p => p.theme.elementColorSecond};
`;


const WeekDay = React.memo(props => (
  <Day>
    <Date>
      {props.weekDay.date}
    </Date>
    <Temp showIcon={`${props.weatherStaticExternal}${props.weekDay.weatherStateAbbr}.svg`}>
      <TempValue>
        {props.weekDay.middleTempCentigrade}
      </TempValue>
      <TempRange>
        {props.weekDay.minTempCentigrade}
          ...&nbsp;
        {props.weekDay.maxTempCentigrade}
          {props.weatherTempUnit}
      </TempRange>
    </Temp>
    <Wind>
      <WindSpeed>
        <WindCompass>{props.weekDay.windCompass}</WindCompass>
        &nbsp;{props.weekDay.windSpeedKmph}{props.weatherSpeedUnit}
      </WindSpeed>
    </Wind>
  </Day>
));

export default WeekDay;