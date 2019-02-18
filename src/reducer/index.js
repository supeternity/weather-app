const hours = new Date().getHours();

export const initialState = {
  settings: {
    show: true,
    theme: hours > 8 && hours < 23 ? 'day' : 'night',
  },
  weatherObject: null,
}

export function rootReducer(state = initialState) {
  return state;
}
