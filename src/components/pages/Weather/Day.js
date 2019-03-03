import React from 'react';
import styled from 'styled-components';

import DateTracer from '../../ui/DateTracer';


import compassHud from '../../../resources/compass-hud.svg';
import compassArrow from '../../../resources/compass-arrow.svg';

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 35.5% 18.2%;
  margin-top: 15vh;
  line-height: 7.6vh;
`;
const Place = styled.h1`
  display: inline-block;
  margin: 0;
  font-size: 2.41em;
  font-weight: 400;
  vertical-align: top;
`;
const Date = styled.div`
  font-size: 0.42em;
  font-family: ${p => p.theme.fontFamilySecond};
  font-weight: 300;
`;
const Temp = styled.div`
  display: inline-block;
  margin-top: -4.8vh;
  padding-left: 13vw;
  vertical-align: top;
  background: url(${p => p.showIcon}) no-repeat left top 2vh;
  background-size: 33%;
  text-align: left;
`;
const TempValue = styled.span`
  font-size: 6.25em;
`;
const TempSystem = styled.span`
  font-size: 0.387288em;
  vertical-align: text-top;
  font-family: ${p => p.theme.fontFamilySecond};
`;
const TempRange = styled.div`
  line-height: 3vh;
  font-family: ${p => p.theme.fontFamilySecond};
  font-weight: 300;
`;
const TempSystemInText = styled.span`
  font-size: 1em
`;
const Wind = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-top: -1.5vh;
  font-size: 1.4em;
  font-weight: 300;
`;
const WindSpeed = styled.span`
  font-weight: 400;
`;
const SpeedSystem = styled.span`
  font-weight: 400;
`;
const WindCompass = styled.div`
  position: relative;
  width: 5vw;
  height: 5vw;
  background: url('${compassHud}') no-repeat center center;
  background-size: contain;
`;
const WindCompassArrow = styled.div`
  position: absolute;
  width: 0.8vw;
  height: 4.9vw;
  left: 2.1vw;
  background: url('${compassArrow}') no-repeat top 1vh center;
  background-size: 49%;
  transform: rotate(${p => p.direction}deg);
`;
const WindVerbalise = styled.span`
  position: absolute;
  left: 100%;
  margin-left: 1vw;
  line-height: 1em;
  font-family: ${p => p.theme.fontFamilySecond};
  font-weight: 300;
  font-size: 0.74em;
`;


const Day = React.memo(props => (
  <Container>
    <Place>
      {props.city}
      <Date>{DateTracer(props.oneDayMonitor.date, 'long', props.locale)}</Date>
    </Place>
    <Temp showIcon={`${props.weatherStaticExternal}${props.oneDayMonitor.weatherStateAbbr}.svg`}>
      <TempValue>
        {props.oneDayMonitor.middleTempCentigrade}
        <TempSystem>{props.weatherTempUnit}</TempSystem>
      </TempValue>
      <TempRange>
        {props.oneDayMonitor.minTempCentigrade}
          ...&nbsp;
        {props.oneDayMonitor.maxTempCentigrade}
        <TempSystemInText>{props.weatherTempUnit}</TempSystemInText>
      </TempRange>
    </Temp>
    <Wind>
      Ветер
      <WindSpeed>
        &nbsp;{props.oneDayMonitor.windSpeedKmph}
      </WindSpeed>
      <SpeedSystem>{props.weatherSpeedUnit}</SpeedSystem>
      <WindCompass>
        <WindCompassArrow direction={props.oneDayMonitor.windDirection} />
        <WindVerbalise>{props.oneDayMonitor.windCompass}</WindVerbalise>
      </WindCompass>
    </Wind>
  </Container>
));
  
export default Day;
