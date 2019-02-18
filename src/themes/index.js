const applyTheme = (name) => {
  const theme = {
    backgroundColor: (() => {
      switch (name) {
        case 'day':
          return '#F1F3F7';
        case 'night':
          return '#232427';
        default:
          return 'hotpink';
      }
    }),
    backgroundColorSecond: (() => {
      switch (name) {
        case 'day':
          return '#ECEEF2';
        case 'night':
          return '#151619';
        default:
          return 'hotpink';
      }
    }),
    elementColor: (() => {
      switch (name) {
        case 'day':
          return '#222223';
        case 'night':
          return '#DDDDDE';
        default:
          return 'hotpink';
      }
    }),
    elementColorSecond: (() => {
      switch (name) {
        case 'day':
          return '#A9ABAD';
        case 'night':
          return '#57585A';
        default:
          return 'hotpink';
      }
    }),
    logoImage: (() => {
      switch (name) {
        case 'day':
          return 'day';
        case 'night':
          return 'night'; 
        default:
          return 'no-logo';
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