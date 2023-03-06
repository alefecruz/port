import React, { type ReactElement } from 'react';

import HomeTemplate from '../components/templates/Home';

import Photo from '../assets/img/my-picture.jpg';

function Home(): ReactElement {
  return (
    <HomeTemplate
      ImageProps={{
        src: Photo,
      }}
    />
  );
}

export default Home;
