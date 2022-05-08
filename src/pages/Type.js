import * as React from 'react';
import Grid from '@mui/material/Grid';
import Alert from '../components/UnderConstruction';


function Type() {
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
      What type is right for you dude
      <Alert />
    </Grid>
  );
};

export default Type;