const applyTheme = (name) => {
  const theme = {
    fontFamily: 'Roboto',
    fontFamilyLight: '300',
    fontFamilyNormal: '400',
    fontFamilyBold: '500',
    fontFamilySecond: 'Roboto Condensed',
    fontFamilySecondLight: '300',
    fontFamilySecondNormal: '400',
    fontSize: '1.63vw',
    mainSignalColor: '#E52620',
    backgroundColor: (() => {
      switch (name) {
        case 'day':
          return '#FFFFFF';
        case 'night':
          return '#232427';
        default:
          return 'hotpink';
      }
    }),
    backgroundColorSecond: (() => {
      switch (name) {
        case 'day':
          return '#F9F9FD';
        case 'night':
          return '#27282B';
        default:
          return 'hotpink';
      }
    }),
    elementColor: (() => {
      switch (name) {
        case 'day':
          return '#3B3B3B';
        case 'night':
          return '#E0E0E1';
        default:
          return 'hotpink';
      }
    }),
    elementColorSecond: (() => {
      switch (name) {
        case 'day':
          return '#DDDCDC';
        case 'night':
          return '#5B5B5D';
        default:
          return 'hotpink';
      }
    }),
    positionThemeSwitcher: (() => {
      switch (name) {
        case 'day':
          return '22px';
        case 'night':
          return '3px';
        default:
          return '0px';
      }
    })
  }
  return theme;
}

export default applyTheme;