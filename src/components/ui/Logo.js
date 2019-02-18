import React from 'react';
import styled from 'styled-components';

import logoDay from '../../resources/themes/day/logo.svg';
import logoNight from '../../resources/themes/night/logo.svg';

const Image = styled.div`
  width: 11.2vw;
  min-width: 115px;
  height: 5vh;
  background: ${(p) => {
    return `url('${p.theme.logoImage === 'day' ? logoDay : logoNight}') no-repeat left top`;
  }};
  background-size: contain;
`;

const Logo = () => (
  <Image />
)

export default Logo;