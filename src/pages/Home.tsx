import React, { type ReactElement } from 'react';

import HomeTemplate from '../components/templates/Home';

function Home(): ReactElement {
  return (
    <HomeTemplate
      MyPictureProps={{
        src: '/assets/images/my-picture.jpg',
      }}
      NavbarProps={{
        buttonList: [
          {
            TextProps: {
              children: 'about',
              letterCase: 'upper',
              textAlign: 'center',
              color: 'LIGHT',
            },
            typeStyle: 'link',
          },
          {
            TextProps: {
              children: 'projects',
              letterCase: 'upper',
              textAlign: 'center',
              color: 'LIGHT',
            },
            typeStyle: 'link',
          },
          {
            TextProps: {
              children: 'contact',
              letterCase: 'upper',
              textAlign: 'center',
              color: 'LIGHT',
            },
            typeStyle: 'link',
          },
        ],
      }}
    />
  );
}

export default Home;
