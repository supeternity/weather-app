import React from 'react';
import styled from 'styled-components';


import compassHud from '../../../resources/compass-hud.svg';
import compassArrow from '../../../resources/compass-arrow.svg';

const Container = styled.div`
  padding-top: 7.6vh;
  line-height: 5.2vh;
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
  margin-left: 8vw;
  margin-top: -4.8vh;
  padding-left: 9vw;
  vertical-align: top;
  background: url(${p => p.showIcon}) no-repeat left top 2vh;
  background-size: 33%;
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
  margin-left: 4.4vw;
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
      Санкт-Петербург
      <Date>21 февраля</Date>
    </Place>
    <Temp showIcon={'https://www.metaweather.com/static/img/weather/hc.svg'}>
      <TempValue>
        -12
        <TempSystem>C°</TempSystem>
      </TempValue>
      <TempRange>
        -13...-11
        <TempSystemInText>C°</TempSystemInText>
      </TempRange>
    </Temp>
    <Wind>
      Ветер
      <WindSpeed>
        19
      </WindSpeed>
      <SpeedSystem>км/ч</SpeedSystem>
      <WindCompass>
        <WindCompassArrow direction={360} />
        <WindVerbalise>Северо-Западный</WindVerbalise>
      </WindCompass>
    </Wind>
  </Container>
));
  
export default Day;
