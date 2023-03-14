import React, { type ReactElement, type ImgHTMLAttributes } from 'react';
import { ImageComponent } from './styles';

export type Props = ImgHTMLAttributes<HTMLImageElement>;

function Image(props: Props): ReactElement {
  return (
    <ImageComponent
      src="/assets/images/default.svg"
      alt="Image not found"
      {...props}
    />
  );
}

export default Image;
