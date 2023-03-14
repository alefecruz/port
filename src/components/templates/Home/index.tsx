import React, { type ReactElement } from 'react';

import * as Styled from './styles';

import { type Props } from './interfaces';

function Home({ MyPictureProps, NavbarProps }: Props): ReactElement {
  return (
    <Styled.Container>
      <Styled.ImageComponent {...MyPictureProps} />
      <Styled.ContentInfo>
        <Styled.NavbarComponent {...NavbarProps} />
      </Styled.ContentInfo>
    </Styled.Container>
  );
}

export default Home;
