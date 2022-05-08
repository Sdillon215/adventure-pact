import React from 'react';
import Box from '@mui/material/Box';
import InstagramIcon from '@mui/icons-material/Instagram';
import FaceBookIcon from '@mui/icons-material/Facebook';
// import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { CardMedia } from '@mui/material';
import { WonderWed } from '../../assets/images';

export default function Footer() {

  return (
    <Box className="primary footer" sx={{ width: '100vw', height: { xs: '40vh', md: '30vh' }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-evenly', alignItems: 'center', position: 'relative', color: '#FCFCFC', paddingBottom: '3vh' }}>
      <Box className='column' sx={{ width: { xs: '100vw', md: '30vw'}}}>
        <p>Las Vegas, Nevada</p>
        <p>Quito, Ecuador</p>
        <Link to='contact'>
          <p>kayla@adventurepact.com</p>
          {/* <Button sx={{ color: "#FCFCFC"}}><p>kayla@adventurepact.com</p></Button> */}
        </Link>
      </Box>
      <Box className='column' sx={{ width: { xs: '100vw', md: '30vw'}}}>
      <CardMedia
        sx={{ width: 110, height: 110 }}
        component="img"
        alt="Wonder Wedding Logo"
        image={WonderWed}
      />
      </Box>
      <Box className='column' sx={{ width: { xs: '100vw', md: '30vw'}}}>
        <p>FOLLOW US</p>
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
          <a underline="none" target="_blank" rel="noreferrer" href='https://www.instagram.com/adventurepact/'>
            <InstagramIcon sx={{ display: 'flex', fontSize: '2rem', color: '#FCFCFC' }} />
          </a>
          <a underline="none" target="_blank" rel="noreferrer" href='https://www.facebook.com/adventurepactelopements'>
            <FaceBookIcon sx={{ display: 'flex', fontSize: '2rem', color: '#FCFCFC' }} />
          </a>
        </Box>
      </Box>
      <p id='footerP'>AdventurePact SM, 2020-2025 all rights reserved. All photos, graphics, &  information on this site are protected by law in the US & Ecuador.</p>
    </Box>
  );
}