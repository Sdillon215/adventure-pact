import * as React from 'react';
import Grid from '@mui/material/Grid';
import Alert from '../components/UnderConstruction';


function Portal() {
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
      This is the mutha Heckin portallllll
      <Alert />
    </Grid>
  );
};

export default Portal;