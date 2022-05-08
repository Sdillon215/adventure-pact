import * as React from 'react';
import Grid from '@mui/material/Grid';
import Alert from '../components/UnderConstruction';

function About() {
  return (
    <Grid
      container
      height='80vh'
      width='100vw'
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      About its what its about n stuff
      <Alert />
    </Grid>
  );
};

export default About;