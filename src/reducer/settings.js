const hours = new Date().getHours();
const getTimesOfDay = () => {
  return hours > 8 && hours < 23 ? 'day' : 'night';
}

const initialState = {
  show: false,
  theme: getTimesOfDay(),
}

export function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_SETTINGS_SHOW':
      return { ...state, show: action.polyload }
    case 'TOGGLE_THEME':
      return { ...state, theme: action.polyload }
    default:
      return state
  }
}
