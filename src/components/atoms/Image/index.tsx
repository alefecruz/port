import React, { type ReactElement, type ImgHTMLAttributes } from 'react';
import { ImageComponent } from './styles';

export type Props = ImgHTMLAttributes<HTMLImageElement>;

function Image(props: Props): ReactElement {
  return <ImageComponent {...props} />;
}

export default Image;
