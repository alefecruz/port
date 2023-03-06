import React, { type ReactElement } from 'react';

import { type Props as ImageInterface } from '../../atoms/Image';

import { Container, Conteiner, ImageComponent } from './styles';

export interface Props {
  ImageProps?: ImageInterface;
}

function Home({ ImageProps }: Props): ReactElement {
  return (
    <Container>
      <Conteiner>
        <ImageComponent {...ImageProps} />
        <div>{/* <img alt="" /> */}</div>
        <div>
          <h1>
            HI! IM <span>ÁLEFE CRUZ</span>
          </h1>
          <p>
            I AM <span>FULL STACK</span> DEVELOPER
          </p>
          <button className="button" type="submit">
            Ver Projetos
          </button>
        </div>
      </Conteiner>
    </Container>
  );
}

export default Home;
