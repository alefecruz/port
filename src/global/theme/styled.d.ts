import 'styled-components';
import { type ColorFormat } from './colors/interfaces';
import { type FontFormat } from './fonts/interfaces';

declare module 'styled-components' {
  interface ThemeType {
    COLORS: ColorFormat;
    FONTS: FontFormat;
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
