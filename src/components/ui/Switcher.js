import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 4vw;
  height: 2vw;
  background-color: ${p => p.theme.elementColorSecond};
  border-radius: 999px;
  vertical-align: middle;
  cursor: pointer;
`;
const Indicator = styled.div`
  position: absolute;
  width: 2vw;
  height: 2vw;
  top: 0;
  left: ${p => p.on === 'day' ? '0.1vw' : '2vw'};
  border-radius: 999px;
  background-color: ${p => p.theme.elementColor};
`;

const Switcher = React.memo(props => (
  <Container>
    <Indicator on={props.trigger}/>
  </Container>
));

export default Switcher;
