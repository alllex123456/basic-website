import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TourCard from '../../components/TourCard/TourCard';

import { tours } from '../../assets/tours';

const Home = () => {
  return (
    <Container maxWidth="xl" sx={{ marginTop: '6rem' }}>
      <Grid container spacing={4}>
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
