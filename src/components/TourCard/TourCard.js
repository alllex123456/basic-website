import React from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Rating from '@mui/material/Rating';

import './styles.css';

const TourCard = ({ tour }) => {
  const [rating, setRating] = React.useState(tour.rating);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Paper elevation={2} sx={{ overflow: 'hidden' }}>
        <img src={tour.image} alt={tour.title} />
        <Box
          sx={{
            display: 'flex',
            padding: '0 1rem 1rem 1rem',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '4rem',
          }}
        >
          <Box>
            <Typography variant="h65" component="h2" sx={{ fontWeight: 600 }}>
              {tour.title}
            </Typography>
            <Box
              sx={{
                mt: '1rem',
                display: 'flex',
                gap: '0.5rem',
                alignItems: 'center',
              }}
            >
              <AccessTimeIcon />
              <Typography
                variant="body2"
                component="p"
                sx={{ fontWeight: 500 }}
              >{`${tour.time} ${tour.timeUnit()}`}</Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              justifyContent: 'center',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Rating
                name="simple-controlled"
                precision={0.5}
                value={rating}
                onChange={(event, value) => setRating(value)}
              />
              <Typography variant="body2" component="span" fontWeight={600}>
                {rating}
              </Typography>
              <Typography variant="body2" component="span">
                ({tour.reviews} reviews)
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" component="h1">
                Price{' '}
                {tour.price.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TourCard;
