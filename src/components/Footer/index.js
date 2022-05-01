import React from 'react';
import Box from '@mui/material/Box';

import { WonderWed } from '../../assets/images';

export default function Footer() {

  return (
    <Box className="primary" sx={{ width: '100vw', height: '30vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <Box className='column'>alksdjfalksdj</Box>
        <img alt="Wondering Wedding Logo" sx={{ width: 'auto', height: '15vh'}}src={WonderWed} />
        <Box className='column'>alksdjfalksdj</Box>
    </Box>
  );
}