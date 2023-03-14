import type React from 'react';
import { type ReactElement } from 'react';
import * as Styled from './styles';

import Button from '../../molecules/Button';

import { type Props } from './interfaces';

function Navbar(props: Props): ReactElement {
  const { buttonList } = props;
  return (
    <Styled.Container>
      {buttonList !== undefined ? (
        buttonList.map((buttonProps, index) => (
          <Styled.Content key={index}>
            <Button {...buttonProps} />
          </Styled.Content>
        ))
      ) : (
        <Styled.Content />
      )}
    </Styled.Container>
  );
}

export default Navbar;
