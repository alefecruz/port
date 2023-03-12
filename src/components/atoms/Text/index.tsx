import type React from 'react';
import { type ReactElement } from 'react';
import { TextComponent } from './styles';

import { type Props } from './interfaces';

function Text(props: Props): ReactElement {
  return <TextComponent {...props}>{props?.children}</TextComponent>;
}

export default Text;
