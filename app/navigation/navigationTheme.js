import {DefaultTheme} from '@react-navigation/native';
import color from '../config/color';

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.color,
    primary: color.primary,
    background: color.white,
  },
};
