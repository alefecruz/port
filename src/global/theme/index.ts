import { COLORS as DEFAULT_COLORS } from './default/colors';
import { COLORS as DARK_COLORS } from './dark/colors';
import { COLORS as LIGHT_COLORS } from './light/colors';

interface themeMapInterface {
  default: Record<string, typeof DEFAULT_COLORS>;
  dark: Record<string, typeof DARK_COLORS>;
  light: Record<string, typeof LIGHT_COLORS>;
}
const themeMap: themeMapInterface = {
  default: {
    COLORS: DEFAULT_COLORS,
  },
  dark: {
    COLORS: DARK_COLORS,
  },
  light: {
    COLORS: LIGHT_COLORS,
  },
};

export const selectTheme = (
  theme: keyof typeof themeMap = 'default'
): (typeof themeMap)[keyof typeof themeMap] => themeMap[theme];
