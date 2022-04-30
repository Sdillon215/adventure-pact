import * as React from 'react';
import { Button, Grid, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import {
    Cave,
    BlackVelvet,
    Canyoneer,
    IceBurrr,
} from '../assets/images';

const imgs = [{ img: Cave, key: 'cave' }, { img: BlackVelvet, key: 'BV' }, { img: Canyoneer, key: 'canyon' }];


function Home() {
    return (
        <>
            <div className='hero'>
                <h2 className='heroText'>EPIC Adventure Elopements, Weddings, &  Destination Honeymoons</h2>
            </div>
            <div className="column">
                <section className="sectHome">
                    <p>WOOHOO! You've just stumbled on the most badass team dedicated to serving you and creating an INSANE experience because…</p>
                    <h2>YOU DESERVE to celebrate your love story in a way as rad as you are</h2>
                    <p>Serving Georgia, Nevada, Arizona, North Carolina, Tennessee, Ecuador, Peru, Panama and beyond (We're based in Atlanta, Las Vegas & Quito)!</p>
                    <Link to='pricing'>
                        <Button variant="contained" color="primary">EXPLORE PACKAGES</Button>
                    </Link>
                </section>
            </div>
            <Grid sx={{ mb: '5vh', flexGrow: 1 }} container spacing={1}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={1}>
                        {imgs.map((pic) => (
                            <Grid key={pic.key} item xs={6} md={4}>
                                <CardMedia
                                    sx={{ height: { xs: 200, sm: 300, md: 400, lg: 500, xl: 600}}}
                                    component="img"
                                    alt={pic.key}
                                    image={pic.img}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            <div className="column">
                <section className="sectHome">
                <h2>YOUR WEDDING DAY + ONE TRULY EPIC ADVENTURE</h2>
                    <h2>AND GUESS WHAT THE BEST PART IS?</h2>
                    <p>The Adventure Pact team is here to literally plan every detail (or help you plan if you're into that sort of thing)</p>
                </section>
            </div>
            <Grid sx={{ mb: '5vh', flexGrow: 1 }} container spacing={1}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={1}>
                            <Grid item xs={12} md={6}>
                                <CardMedia
                                    sx={{ height: { xs: 300, sm: 400, md: 500, lg: 700, xl: 800}}}
                                    component="img"
                                    alt="Badass couple on the glacier"
                                    image={IceBurrr}
                                />
                            </Grid>
                            <Grid textAlign="center" item xs={12} md={6}>
                                <h2>Adventure Honeymoons, Vow Renewals, Elopements, Weddings, Adventure dates and more— you're in for the time of your life</h2>
                            </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Home;