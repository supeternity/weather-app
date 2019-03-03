import React from 'react';
import styled from 'styled-components';


const Day = styled.div`
  padding-top: 5.2vh;
  text-align: center;
`;
const Date = styled.div`
  font-family: ${p => p.theme.fontFamilySecond};
  font-weight: 300;
  color: ${p => p.theme.elementColorSecond};
`;
const WeatherIcon = styled.span`
  display: inline-block;
  content: 'Pusheen';
  color: rgba(0,0,0,0);
  margin-left: 0.8vw;
  width: 1.9vw;
  height: 1.9vw;
  vertical-align: bottom;
  background: url(${p => p.showIcon}) no-repeat center center;
  background-size: 90%;
`;
const Temp = styled.div`
  padding-top: 6.8vh;
`;
const TempValue = styled.div`
  font-size: 3em;
  font-family: ${p => p.theme.fontFamilySecond};
  font-weight: ${p => p.theme.fontFamilySecondLight};
`;
const TempRange = styled.div`
  padding-top: 1vh;
  font-family: ${p => p.theme.fontFamilySecond};
  font-weight: ${p => p.theme.fontFamilySecondLight};
`;
const Wind = styled.div`
  padding-top: 5vh;
`;
const WindSpeed = styled.span`
  font-size: 0.8em;
  font-family: ${p => p.theme.fontFamilySecond};
  font-weight: ${p => p.theme.fontFamilySecondLight};
`;


const dayHumanization = (data, i) => {
  return i < 1 ? <>Сегодня</>
  : i > 0 && i < 2 ? <>Завтра</>
  : <>{data}</>
}

const WeekDay = React.memo(props => (
  <Day>
    <Date>
      {dayHumanization(props.weekDay.dateWeek, props.tick)}
      <WeatherIcon showIcon={
        `${props.weatherStaticExternal}${props.weekDay.weatherStateAbbr}.svg`}/>
    </Date>
    <Temp>
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
        Ветер {props.weekDay.windSpeedMps} {props.weatherSpeedUnit}
      </WindSpeed>
    </Wind>
  </Day>
));

export default WeekDay;