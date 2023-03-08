import 'styled-components';
import { type ColorFormat } from './colors/interfaces';

declare module 'styled-components' {
  interface ThemeType {
    COLORS: ColorFormat;
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
