import type React from 'react';
import { type ReactElement } from 'react';
import { ButtonComponent } from './styles';

import Text from '../../atoms/Text';

import { type Props } from './interfaces';

function Button(props: Props): ReactElement {
  return (
    <ButtonComponent {...props}>
      {props.TextProps !== null && <Text {...props.TextProps} />}
    </ButtonComponent>
  );
}

export default Button;
