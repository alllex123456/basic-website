import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import React from 'react';
import ImageList from '../../components/ImageList/ImageList';
import { Box } from '@mui/material';

const Tour = () => {
  return (
    <Container>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World
      </Typography>
      <Box sx={{ display: 'flex', gap: '1rem', marginTop: 3 }}>
        <img
          src="https://images.unsplash.com/photo-1600520611035-84157ad4084d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2831&q=80"
          alt="The Egypt Pyramids"
          style={{ height: '30rem', width: '40rem' }}
        />
        <ImageList />
      </Box>
    </Container>
  );
};

export default Tour;
