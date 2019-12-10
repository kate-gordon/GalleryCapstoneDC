import React from 'react';
import { Button } from '@chakra-ui/core';

import './artists.css';
const Artists = () => {
  return (
    <>
      <div role='group' className='artistCardContainer'>
        <h1>Artist Name</h1>
        <img alt='artist avatar' src='http://placekitten.com/g/200/300' />
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <Button>...</Button>
      </div>
    </>
  );
};

export default Artists;
