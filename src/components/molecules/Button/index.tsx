import type React from 'react';
import { type ReactElement } from 'react';
import * as Styled from './styles';

import Text from '../../atoms/Text';

import { type Props } from './interfaces';

function Button(props: Props): ReactElement {
  return (
    <Styled.ButtonComponent {...props}>
      {props.TextProps !== null && <Text {...props.TextProps} />}
    </Styled.ButtonComponent>
  );
}

export default Button;
