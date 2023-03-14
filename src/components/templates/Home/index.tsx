import React, { type ReactElement } from 'react';

import { type Props as ImageInterface } from '../../atoms/Image';

import * as Styled from './styles';

export interface Props {
  ImageProps?: ImageInterface;
}

function Home({ ImageProps }: Props): ReactElement {
  return (
    <Styled.Container>
      <Styled.ContentInfo />
      <Styled.ImageComponent {...ImageProps} />
    </Styled.Container>
  );
}

export default Home;
