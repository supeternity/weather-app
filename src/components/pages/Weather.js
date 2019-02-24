import React from 'react';

import Day from './Weather/Day';
import Week from './Weather/Week';

const Weather = React.memo(props => (
  <>
    <Day />
    <Week />
  </>
));

export default Weather;