import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grid, ThemeProvider } from '@chakra-ui/core';
import axios from 'axios';

import SingleArtist from '../src/components/pages/SingleArtist';
import SingleArtPiece from '../src/components/pages/SingleArtPiece';
import Artists from '../src/components/pages/Artists';
import Header from '../src/components/Header/Header';
import Home from '../src/components/pages/Home';
import Cart from '../src/components/pages/Cart';
import About from '../src/components/pages/About';
import Events from '../src/components/pages/Events';
import Footer from '../src/components/Footer/Footer';
import CheckoutButton from './components/Stripe/CheckoutButton';

import './App.css';

function App() {
  const [artists, setArtists] = useState([]);
  const [artPieces, setArtPieces] = useState([]);

  // Fetching Artist Data

  const fetchData = () => {
    let uri = 'http://admin.insae.org/api/artists/all';
    axios
      .get(uri)
      .then(data => {
        setArtists(data.data);
      })
      .catch(error => console.log(error));
  };

  // Fetching Artwork Data

  const fetchArtPieceData = () => {
    let uri = 'http://admin.insae.org/api/artworks/all';
    axios
      .get(uri)
      .then(data => {
        setArtPieces(data.data);
      })
      .catch(error => console.log(error));
  };

  // Sets state one time with array of artists and array of art pieces

  useEffect(() => {
    fetchData();
    fetchArtPieceData();
  }, []);

  return (
    <div className='App'>
      <ThemeProvider>
        <Header />
        <Grid p={20} templateColumns='repeat(3, 1fr)' gap={6}>
          <Switch>
            <Route path='/piece/:id'>
              <SingleArtPiece />
            </Route>
            <Route exact path='/'>
              <Home artPieces={artPieces} />
            </Route>
            <Route path='/artists/artist/:id'>
              <SingleArtist />
            </Route>
            <Route path='/artists'>
              <Artists artists={artists} />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/events'>
              <Events />
            </Route>
            <Route path='/cart'>
              <Cart />
            </Route>
            <Route path='/checkout'>
              <CheckoutButton />
            </Route>
          </Switch>
        </Grid>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
