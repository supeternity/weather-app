import React from 'react';
import styled from 'styled-components';

import spinner from '../../resources/spinner.svg';

const WhiteField = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${p => p.theme.backgroundColor} url('${spinner}') no-repeat center center;
  background-size: 3%;
  z-index: 0;
`;

const Loader = () => (
  <WhiteField />
);

export default Loader;