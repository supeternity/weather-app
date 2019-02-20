export function toggleSettingsShow(value) {
  return {
    type: 'TOGGLE_SETTINGS_SHOW',
    polyload: !value,
  }
}
export function toggleTheme(value) {
  return {
    type: 'TOGGLE_THEME',
    polyload: value === 'day' ? 'night' : 'day',
  }
}
