import React from 'react';
import styled from 'styled-components';

import logoDay from '../../resources/themes/day/logo.svg';
import logoNight from '../../resources/themes/night/logo.svg';

const Image = styled.div`
  position: absolute;
  width: 11.2vw;
  min-width: 115px;
  height: 5vh;
  background: url('${p => p.theme === 'day' ? logoDay : logoNight}') no-repeat;
  background-size: contain;
  z-index: 1;
`;

const Logo = React.memo(props => (
  <Image theme={props.theme} />
));

export default Logo;