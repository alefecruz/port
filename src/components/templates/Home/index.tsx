import React, { type ReactElement } from 'react';

import Image, { type Props as ImageInterface } from '../../atoms/Image';

import { Container } from './styles';

export interface Props {
  ImageProps?: ImageInterface;
}

function Home({ ImageProps }: Props): ReactElement {
  return (
    <Container>
      <Image {...ImageProps} />
    </Container>
  );
}

export default Home;
