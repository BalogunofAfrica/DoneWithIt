import { Platform } from 'react-native';

import colors from './colors'

export default {
    colors,
    text: {
        color: colors.dark,
        fontszie: 18,
        fontFamily: Platform.OS==='android'? 'Roboto': 'Avenir',
    }
}
