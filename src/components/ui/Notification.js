import React from 'react';
import styled from 'styled-components';

const NotiflerBody = styled.div`
  position: absolute;
  top: 55vh;
  left: 0;
  right: 0;
  color: ${p => p.theme.elementColor};
  text-align: center;
  font-family: ${p => p.theme.fontFamily};
  font-weight: ${p => p.theme.fontFamilyLight};
  z-index: 1;
`;

const Notification = React.memo(props => (
  <NotiflerBody>
    {props.message}
  </NotiflerBody>
));

export default Notification;