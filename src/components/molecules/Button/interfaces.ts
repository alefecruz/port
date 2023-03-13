import { type Props as TextInterface } from '../../atoms/Text/interfaces';

export interface Props extends TypeStyle {
  TextProps?: TextInterface;
  onPress?: () => void;
}

export interface TypeStyle {
  typeStyle?: 'filled' | 'outline' | 'none' | 'link';
}
