import { type ColorFormat } from '../../../global/theme/colors/interfaces';

export interface Props extends typeScaleInterface {
  children?: React.ReactNode;
  letterCase?: 'upper' | 'lower' | 'capitalize';
  textAlign?: 'center' | 'left' | 'right';
  color?: keyof ColorFormat;
}

export interface typeScaleInterface {
  typeScale?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
}
