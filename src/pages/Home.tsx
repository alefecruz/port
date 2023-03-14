import React, { type ReactElement } from 'react';

import HomeTemplate from '../components/templates/Home';

function Home(): ReactElement {
  return (
    <HomeTemplate
      ImageProps={{
        src: '/assets/images/my-picture.jpg',
      }}
    />
  );
}

export default Home;
