const compassError = 'Compass degees error: Do a Barrel Roll';
const langsError = 'Language error: Check {locale}';

const getCompassPointName = (deg, locale) => {
  switch (true) {
    case (deg >= 354 && deg < 6):
      switch (locale) {
        case 'en_US':
          return 'North';
        case 'ru':
          return 'Северный';
        default:
          return langsError
      }
    case (deg >= 6 && deg < 17):
      switch (locale) {
        case 'en_US':
          return 'North byeast';
        case 'ru':
          return 'С севера навосток';
        default:
          return langsError
      }
    case (deg >= 17 && deg < 28):
      switch (locale) {
        case 'en_US':
          return 'Northnortheast';
        case 'ru':
          return 'Север-северовосток';
        default:
          return langsError
      }
    case (deg >= 28 && deg < 39):
      switch (locale) {
        case 'en_US':
          return 'Northeast bynorth';
        case 'ru':
          return 'Северо-восток посеверу';
        default:
          return langsError
      }
    case (deg >= 39 && deg < 51):
      switch (locale) {
        case 'en_US':
          return 'Northeast';
        case 'ru':
          return 'Северовосточный';
        default:
          return langsError
      }
    case (deg >= 51 && deg < 62):
      switch (locale) {
        case 'en_US':
          return 'Northeast byeast';
        case 'ru':
          return 'Северо-восток навосток';
        default:
          return langsError
      }
    case (deg >= 62 && deg < 73):
      switch (locale) {
        case 'en_US':
          return 'Eastnortheast';
        case 'ru':
          return 'Восток-северовосток';
        default:
          return langsError
      }
    case (deg >= 73 && deg < 84):
      switch (locale) {
        case 'en_US':
          return 'East bynorth';
        case 'ru':
          return 'Восток ксеверу';
        default:
          return langsError
      }
    case (deg >= 84 && deg < 96):
      switch (locale) {
        case 'en_US':
          return 'East';
        case 'ru':
          return 'Восточный';
        default:
          return langsError
      }
    case (deg >= 96 && deg < 107):
      switch (locale) {
        case 'en_US':
          return 'East bysouth';
        case 'ru':
          return 'С востока на юг';
        default:
          return langsError
      }
    case (deg >= 107 && deg < 118):
      switch (locale) {
        case 'en_US':
          return 'Eastsoutheast';
        case 'ru':
          return 'Восток-юговосток';
        default:
          return langsError
      }
    case (deg >= 118 && deg < 129):
      switch (locale) {
        case 'en_US':
          return 'Southeast byeast';
        case 'ru':
          return 'Юго-восток навосток';
        default:
          return langsError
      }
    case (deg >= 129 && deg < 141):
      switch (locale) {
        case 'en_US':
          return 'Southeast';
        case 'ru':
          return 'Южный';
        default:
          return langsError
      }
    case (deg >= 141 && deg < 152):
      switch (locale) {
        case 'en_US':
          return 'Southeast bysouth';
        case 'ru':
          return 'Юго-восток кюгу';
        default:
          return langsError
      }
    case (deg >= 152 && deg < 163):
      switch (locale) {
        case 'en_US':
          return 'Southsoutheast';
        case 'ru':
          return 'Юг-юговосток';
        default:
          return langsError
      }
    case (deg >= 163 && deg < 174):
      switch (locale) {
        case 'en_US':
          return 'South byeast';
        case 'ru':
          return 'С юга навосток';
        default:
          return langsError
      }
    case (deg >= 174 && deg < 186):
      switch (locale) {
        case 'en_US':
          return 'South';
        case 'ru':
          return 'Южный';
        default:
          return langsError
      }
    case (deg >= 186 && deg < 197):
      switch (locale) {
        case 'en_US':
          return 'South bywest';
        case 'ru':
          return 'С юга наЗапад';
        default:
          return langsError
      }
    case (deg >= 197 && deg < 208):
      switch (locale) {
        case 'en_US':
          return 'Southsouthwest';
        case 'ru':
          return 'Юг-югозапад';
        default:
          return langsError
      }
    case (deg >= 208 && deg < 219):
      switch (locale) {
        case 'en_US':
          return 'Southwest bysouth';
        case 'ru':
          return 'Юго-запад кюгу';
        default:
          return langsError
      }
    case (deg >= 219 && deg < 231):
      switch (locale) {
        case 'en_US':
          return 'Southwest';
        case 'ru':
          return 'Югозападный';
        default:
          return langsError
      }
    case (deg >= 231 && deg < 242):
      switch (locale) {
        case 'en_US':
          return 'Southwest bywest';
        case 'ru':
          return 'С юго-запада наЗапад';
        default:
          return langsError
      }
    case (deg >= 242 && deg < 253):
      switch (locale) {
        case 'en_US':
          return 'Westsouthwest';
        case 'ru':
          return 'Запад-югозапад';
        default:
          return langsError
      }
    case (deg >= 253 && deg < 264):
      switch (locale) {
        case 'en_US':
          return 'West bysouth';
        case 'ru':
          return 'С запада на юг';
        default:
          return langsError
      }
    case (deg >= 264 && deg < 276):
      switch (locale) {
        case 'en_US':
          return 'West';
        case 'ru':
          return 'Западный';
        default:
          return langsError
      }
    case (deg >= 276 && deg < 287):
      switch (locale) {
        case 'en_US':
          return 'West bynorth';
        case 'ru':
          return 'С запада насевер';
        default:
          return langsError
      }
    case (deg >= 287 && deg < 298):
      switch (locale) {
        case 'en_US':
          return 'Westnorthwest';
        case 'ru':
          return 'Запад-северозапад';
        default:
          return langsError
      }
    case (deg >= 298 && deg < 309):
      switch (locale) {
        case 'en_US':
          return 'Northwest bywest';
        case 'ru':
          return 'С северо-запада наЗапад';
        default:
          return langsError
      }
    case (deg >= 309 && deg < 321):
      switch (locale) {
        case 'en_US':
          return 'Northwest';
        case 'ru':
          return 'Северозападный';
        default:
          return langsError
      }
    case (deg >= 321 && deg < 332):
      switch (locale) {
        case 'en_US':
          return 'Northwest bynorth';
        case 'ru':
          return 'С северо-запада насевер';
        default:
          return langsError
      }
    case (deg >= 332 && deg < 343):
      switch (locale) {
        case 'en_US':
          return 'Northnorthwest';
        case 'ru':
          return 'Северо-северозападный';
        default:
          return langsError
      }
    case (deg >= 343 && deg < 354):
      switch (locale) {
        case 'en_US':
          return 'North bywest';
        case 'ru':
          return 'С севера наЗапад';
        default:
          return langsError
      }
    default:
      return compassError
  }
}

export default getCompassPointName;
