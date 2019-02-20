import { combineReducers } from 'redux';

import { settingsReducer } from './settings';
import { weatherReducer } from './weather';

export const rootReducer = combineReducers({
  settings: settingsReducer,
  weather: weatherReducer,
})
