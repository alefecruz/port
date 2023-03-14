import type React from 'react';
import { type ReactElement } from 'react';
import * as Styled from './styles';

import { type Props } from './interfaces';

function Text(props: Props): ReactElement {
  return (
    <Styled.TextComponent {...props}>{props?.children}</Styled.TextComponent>
  );
}

export default Text;
