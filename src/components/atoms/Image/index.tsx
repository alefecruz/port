import React, { type ReactElement } from 'react';
import * as Styled from './styles';

import { type Props } from './interfaces';

function Image(props: Props): ReactElement {
  return (
    <Styled.ImageComponent
      src="/assets/images/default.svg"
      alt="Image not found"
      {...props}
    />
  );
}

export default Image;
