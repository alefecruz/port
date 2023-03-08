import { COLORS as DEFAULT_COLORS } from './colors/default';
import { COLORS as DARK_COLORS } from './colors/dark';
import { COLORS as LIGHT_COLORS } from './colors/light';

const colorMap = {
  default: { COLORS: DEFAULT_COLORS },
  dark: { COLORS: DARK_COLORS },
  light: { COLORS: LIGHT_COLORS },
};

/**
 * Retorna um objeto com as cores do tema selecionado.
 *
 * @description Esta função retorna um objeto com as cores do tema selecionado.
 *
 * @param color A cor do tema a ser selecionado.
 * @returns Um objeto com as cores do tema selecionado.
 */
export const selectTheme = (
  color: keyof typeof colorMap = 'default'
): (typeof colorMap)[keyof typeof colorMap] => colorMap[color];
