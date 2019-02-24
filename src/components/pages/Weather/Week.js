import React from 'react';
import styled from 'styled-components';


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
const Day = styled.div`
  padding-top: 5.5vh;
  text-align: center;
`;
const Date = styled.div``;
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
`;
const WindSpeed = styled.span``;


const WeekFabric = (weekWeather, cellTemplate) => {

}

const OneDayTemplate = React.memo(props => (
  <>
  </>
));

const Week = React.memo(props => (
  <Container weekColumns={6}>

    <Day>
      <Date>
        Сегодня
      </Date>
      <Temp showIcon={'https://www.metaweather.com/static/img/weather/hc.svg'}>
        <TempValue>
          -12
        </TempValue>
        <TempRange>
          -13...-11C°
        </TempRange>
      </Temp>
      <Wind>
        <WindSpeed>
          <WindCompass>N</WindCompass>
          19км/ч
        </WindSpeed>
      </Wind>
    </Day>

    <Day>
      <Date>
        Сегодня
      </Date>
      <Temp showIcon={'https://www.metaweather.com/static/img/weather/hc.svg'}>
        <TempValue>
          -12
        </TempValue>
        <TempRange>
          -13...-11C°
        </TempRange>
      </Temp>
      <Wind>
        <WindSpeed>
          <WindCompass>N</WindCompass>
          19км/ч
        </WindSpeed>
      </Wind>
    </Day>

    <Day>
      <Date>
        Сегодня
      </Date>
      <Temp showIcon={'https://www.metaweather.com/static/img/weather/hc.svg'}>
        <TempValue>
          -12
        </TempValue>
        <TempRange>
          -13...-11C°
        </TempRange>
      </Temp>
      <Wind>
        <WindSpeed>
          <WindCompass>N</WindCompass>
          19км/ч
        </WindSpeed>
      </Wind>
    </Day>

    <Day>
      <Date>
        Сегодня
      </Date>
      <Temp showIcon={'https://www.metaweather.com/static/img/weather/hc.svg'}>
        <TempValue>
          -12
        </TempValue>
        <TempRange>
          -13...-11C°
        </TempRange>
      </Temp>
      <Wind>
        <WindSpeed>
          <WindCompass>N</WindCompass>
          19км/ч
        </WindSpeed>
      </Wind>
    </Day>

    <Day>
      <Date>
        Сегодня
      </Date>
      <Temp showIcon={'https://www.metaweather.com/static/img/weather/hc.svg'}>
        <TempValue>
          -12
        </TempValue>
        <TempRange>
          -13...-11C°
        </TempRange>
      </Temp>
      <Wind>
        <WindSpeed>
          <WindCompass>N</WindCompass>
          19км/ч
        </WindSpeed>
      </Wind>
    </Day>

    <Day>
      <Date>
        Сегодня
      </Date>
      <Temp showIcon={'https://www.metaweather.com/static/img/weather/hc.svg'}>
        <TempValue>
          -12
        </TempValue>
        <TempRange>
          -13...-11C°
        </TempRange>
      </Temp>
      <Wind>
        <WindSpeed>
          <WindCompass>N</WindCompass>
          19км/ч
        </WindSpeed>
      </Wind>
    </Day>

  </Container>
));


export default Week;