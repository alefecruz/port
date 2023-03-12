import { COLORS as DEFAULT_COLORS } from './colors/default';
import { COLORS as DARK_COLORS } from './colors/dark';
import { COLORS as LIGHT_COLORS } from './colors/light';

import { FONTS as Montserrat } from './fonts/Montserrat';
import { FONTS as Lora } from './fonts/Lora';

import { SIZES as DEFAULT_SIZE } from './sizes/default';
import { MEDIAS as DEFAULT_MEDIAS } from './medias/default';
import { SPACINGS as DEFAULT_SPACINGS } from './spacings/default';

import { type ThemeType } from './styled';

const colorMap = {
  default: { COLORS: DEFAULT_COLORS },
  dark: { COLORS: DARK_COLORS },
  light: { COLORS: LIGHT_COLORS },
};

const fontMap = {
  montserrat: { FONTS: Montserrat },
  lora: { FONTS: Lora },
};

const sizeMap = {
  default: { SIZES: DEFAULT_SIZE },
};

const mediaMap = {
  default: { MEDIAS: DEFAULT_MEDIAS },
};

const spacingMap = {
  default: { SPACINGS: DEFAULT_SPACINGS },
};

interface selectThemeInterface {
  color: keyof typeof colorMap;
  font: keyof typeof fontMap;
  size: keyof typeof sizeMap;
  media: keyof typeof mediaMap;
  spacing: keyof typeof spacingMap;
}
export const selectTheme = ({
  color = 'default',
  font = 'montserrat',
  size = 'default',
  media = 'default',
  spacing = 'default',
}: selectThemeInterface): ThemeType => {
  return {
    ...colorMap[color],
    ...fontMap[font],
    ...sizeMap[size],
    ...mediaMap[media],
    ...spacingMap[spacing],
  };
};
