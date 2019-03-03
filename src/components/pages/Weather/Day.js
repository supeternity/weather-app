import React from 'react';
import styled from 'styled-components';

import DateTracer from '../../ui/DateTracer';
import getCompassPointName from '../../../langs/compassRose';


import compassHudDay from '../../../resources/themes/day/compass-hud.svg';
import compassHudNight from '../../../resources/themes/night/compass-hud.svg';
import compassArrow from '../../../resources/compass-arrow.svg';

const Container = styled.div`
  display: grid;
  grid-template-rows: 28vh;
  grid-template-columns: 1fr 35.5% 18.2%;
  margin-top: 6.5vh;
`;
const Place = styled.h1`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
  font-size: 2.41em;
  font-family: ${p => p.theme.fontFamily};
`;
const Date = styled.div`
  font-size: 0.42em;
  font-family: ${p => p.theme.fontFamilySecond};
  font-weight: ${p => p.theme.fontFamilySecondNormal};
`;
const Temp = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding-left: 13vw;
  background: url(${p => p.showIcon}) no-repeat left top 5vh;
  background-size: 31%;
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
  font-weight: ${p => p.theme.fontFamilySecondLight};
`;
const TempSystemInText = styled.span`
  font-size: 1em
`;
const Wind = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  font-size: 1em;
  font-weight: 300;
`;
const WindSpeedLiteral = styled.div`
  margin-bottom: 1.4vh;
  width: 9.85vw;
  text-align: right;
  font-size: 0.8em;
  font-family: ${p => p.theme.fontFamilySecond};
  font-weight: ${p => p.theme.fontFamilySecondLight};
  color: ${p => p.theme.elementColorSecond};
`;
const SpeedSystem = styled.span`
  font-family: ${p => p.theme.fontFamilySecond};
  font-weight: ${p => p.theme.fontFamilySecondLight};
`;
const WindCompass = styled.div`
  position: relative;
  width: 7.5vw;
  height: 7.5vw;
  margin-bottom: 2.79vh;
  background: url('${p => p.theme === 'day' ? compassHudDay : compassHudNight }') no-repeat center center;
  background-size: 133%;
  line-height: 7vw;
`;
const WindCompassArrow = styled.div`
  position: absolute;
  width: 1.3vw;
  height: 7.5vw;
  left: 3.1vw;
  background: url('${compassArrow}') no-repeat top 1vh center;
  background-size: 49%;
  transform: rotate(${p => p.direction}deg);
`;
const WindVerbalise = styled.span`
  display: inline-block;
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  padding-top: 0.45vh;
  font-family: ${p => p.theme.fontFamily};
  font-weight: ${p => p.theme.fontFamilyBold};
  font-size: 0.6em;
  vertical-align: middle;
  text-align: center;
`;
const WindVerbaliseTrace = styled.span`
  color: ${p => p.theme.elementColor};
  font-family: ${p => p.theme.fontFamilySecond};
  font-weight: ${p => p.theme.fontFamilySecondLight};
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
      <WindSpeedLiteral>Ветер</WindSpeedLiteral>
      <WindCompass theme={props.theme}>
        <WindCompassArrow direction={props.oneDayMonitor.windDirection} />
        <WindVerbalise>
          {props.oneDayMonitor.windSpeedMps}&nbsp;
          <SpeedSystem>{props.weatherSpeedUnit}</SpeedSystem>
        </WindVerbalise>
      </WindCompass>
      <WindVerbaliseTrace>{getCompassPointName(parseInt(props.oneDayMonitor.windDirection, 10), props.locale)}</WindVerbaliseTrace>
    </Wind>
  </Container>
));
  
export default Day;
