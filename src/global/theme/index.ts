import { COLORS as DEFAULT_COLORS } from './colors/default';
import { COLORS as DARK_COLORS } from './colors/dark';
import { COLORS as LIGHT_COLORS } from './colors/light';

import { FONTS as Montserrat } from './fonts/Montserrat';
import { FONTS as Lora } from './fonts/Lora';

import { type ColorFormat } from './colors/interfaces';
import { type FontFormat } from './fonts/interfaces';

const colorMap = {
  default: { COLORS: DEFAULT_COLORS },
  dark: { COLORS: DARK_COLORS },
  light: { COLORS: LIGHT_COLORS },
};

const fontMap = {
  montserrat: { FONTS: Montserrat },
  lora: { FONTS: Lora },
};

interface SelectThemeReturnInterface {
  COLORS: ColorFormat;
  FONTS: FontFormat;
}

/**
 * Retorna um objeto com as cores do tema selecionado.
 *
 * @description Esta função retorna um objeto com as cores do tema selecionado.
 *
 * @param color A cor do tema a ser selecionado.
 * @returns Um objeto com as cores do tema selecionado.
 */
export const selectTheme = (
  color: keyof typeof colorMap = 'default',
  font: keyof typeof fontMap = 'montserrat'
): SelectThemeReturnInterface => ({
  ...colorMap[color],
  ...fontMap[font],
});
