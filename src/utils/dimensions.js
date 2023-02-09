import {Dimensions, Platform} from 'react-native';

const WIDTH =
  Platform.OS === 'ios'
    ? Dimensions.get('window').width
    : Dimensions.get('screen').width;
const HEIGHT =
  Platform.OS === 'ios'
    ? Dimensions.get('window').height
    : Dimensions.get('screen').height;

export {WIDTH, HEIGHT};
