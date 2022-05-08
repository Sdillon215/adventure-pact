import * as React from 'react';
import Grid from '@mui/material/Grid';
import Alert from '../components/UnderConstruction';


function Contact() {
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
      Contact
      <Alert />
    </Grid>
  );
};

export default Contact;