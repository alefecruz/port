import 'styled-components';
import { type ColorFormat } from './colors/interfaces';
import { type FontFormat } from './fonts/interfaces';
import { type SizeFormat } from './sizes/interfaces';
import { type SpacingFormat } from './spacings/interfaces';
import { type MediaFormat } from './medias/interfaces';

export interface ThemeType {
  COLORS: ColorFormat;
  FONTS: FontFormat;
  SIZES: SizeFormat;
  MEDIAS: MediaFormat;
  SPACINGS: SpacingFormat;
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
