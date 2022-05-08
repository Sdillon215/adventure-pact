import * as React from 'react';
import { Button, Grid, CardMedia, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import {
    Cave,
    BlackVelvet,
    Canyoneer,
    IceBurrr,
    Flamingo,
    Tree,
    SunsetVow,
    Road,
    MountainStencil,
    Map,
    Rocks,
    River,
    Pool,
    Junipup
} from '../assets/images';

const threeImgOne = [{ img: Cave, key: 'Looking through a cave on the beach' }, { img: BlackVelvet, key: 'Black Velvet Canyon Red Rock National Conservation Area' }, { img: Canyoneer, key: 'A couple rappelling down a water fall' }];
const threeImgTwo = [{ img: Tree, key: 'A couple sitting on a fallen tree' }, { img: SunsetVow, key: 'A couple renews vows during sunset' }, { img: Road, key: 'Dacning in the road' }];
const threeImgThree = [{ img: Rocks, key: 'A couple nestled in the sandstone of Red Rock' }, { img: River, key: 'Splashing in the river' }, { img: Pool, key: 'Jumping into the pool' }];
const fourReasons = [
    {
        key: 23536,
        title: '1. REAL ADVENTURE',
        text: 'IMAGINE ARRIVING IN A HELICOPTER TO HIKE UP A 19,000 FOOT SUMMIT, SAYING "I DO" ON TOP OF A VOLCANO AND THEN HONEYMOONING IN THE AMAZON—YEA, WE CAN DO THAT.',
        subText: 'If you can dream it, we can make it happen.'
    },
    {
        key: 98874,
        title: '2. COMMUNITY CONSCIOUS',
        text: "IT'S EXTREMELY IMPORTANT TO US THAT WE GIVE BACK TO THE COMMUNITIES WHERE OUR COUPLES ADVENTURE.",
        subText: "That's why we are dedicated to donating 10% of earnings to community projects."
    },
    {
        key: 3454,
        title: "3. BEST-FRIEND EXPERIENCE",
        text: "strangers are just friends who haven't met yet, right?",
        subText: "If you love getting off the beaten path, singing in the car, catching sunrises, and getting a little dirty we're surefire bff's"
    },
    {
        key: 78967,
        title: "4. VALUE",
        text: "NOT JUST PHOTOGRAPHERS - ADVENTURE PACT ALSO HELPS YOU CHOOSE LOCATIONS, GET YOUR PERMITS AND VISAS, ARRANGE FLOWERS AND DECOR, CHOOSE ACCOMODATIONS, AND ANYTHING ELSE YOU WANT TO INCLUDE IN YOU DAY.",
        subText: "photographer + planner + guide + pack mule all in one."
    }
]

function Home() {
    return (
        <>
            <div className='hero'>
                <h2 className='heroText'>EPIC Adventure Elopements, Weddings, &  Destination Honeymoons</h2>
            </div>
            <div className="column">
                <section className="sectHome">
                    <p>WOOHOO! You've just stumbled on the most badass team dedicated to serving you and creating an INSANE experience because…</p>
                    <h2>YOU DESERVE to celebrate your love story in a way that's as  rad as you are</h2>
                    <p>Serving Georgia, Nevada, Arizona, North Carolina, Tennessee, Ecuador, Peru, Panama and beyond (We're based in Atlanta, Las Vegas & Quito)!</p>
                    <Link to='pricing'>
                        <Button variant="contained" color="primary">EXPLORE PACKAGES</Button>
                    </Link>
                </section>
            </div>
            <Grid sx={{ mb: '5vh', flexGrow: 1 }} container spacing={1}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={1}>
                        {threeImgOne.map((pic) => (
                            <Grid key={pic.key} item xs={6} md={4}>
                                <CardMedia
                                    sx={{ height: { xs: 200, sm: 300, md: 400, lg: 500, xl: 600 } }}
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
            <Grid sx={{ flexGrow: 1 }} container>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" sx={{ flexDirection: { xs: 'column-reverse', md: 'row'}}}>
                        <Grid item xs={12} md={6}>
                            <Box 
                            position="relative"
                            sx={{ height: { xs: 320, sm: 400, md: 500, lg: 700, xl: 800 } }}>
                                <div className="testimonial-cont quote1">
                                    <h3>"Seeing the photos she took Literally brought me to tears and gave me butterflies! I couldn't wait to ask my husband to plan another adventure with her!"</h3>
                                    <p> - Sherry B</p>
                                </div>
                                <div className="testimonial-cont quote2">
                                    <h3>"Everything about working with Kayla — her solid communication and thoughtful planning, her fun and easy going nature, and her crazy talented photography — made our elopement session a dream from start to finish."</h3>
                                    <p> - Diana G</p>
                                </div>
                                <div className="testimonial-cont quote3">
                                    <h3>"The experience was truly like working with your friend who truly got to know you and tailored the experience just for you."</h3>
                                    <p> - Jessica F</p>
                                </div>
                                <div className="testimonial-cont quote4">
                                    <h3>"The whole day was truly a dream filled with love. I don't think we stopped laughing the whole day."</h3>
                                    <p> - Peggy T</p>
                                </div>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <CardMedia
                                sx={{ height: { xs: 300, sm: 400, md: 500, lg: 700, xl: 800 } }}
                                component="img"
                                alt="Juniper the adventure dog"
                                image={Junipup}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid sx={{ flexGrow: 1 }} container>
                <Grid item xs={12}>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} md={6}>
                            <CardMedia
                                sx={{ height: { xs: 300, sm: 400, md: 500, lg: 700, xl: 800 } }}
                                component="img"
                                alt="Badass couple on the glacier"
                                image={IceBurrr}
                            />
                        </Grid>
                        <Grid className="column" item xs={12} md={6}>
                            <section className='sectHome'>
                                <h2>ADVENTURE HONEYMOONS, VOW RENEWALS, ELOPEMENTS, WEDDINGS, ADVENTURE DATES AND MORE— YOU'RE IN FOR THE TIME OF YOUR LIFE</h2>
                                <Link to='contact'>
                                    <Button variant="contained" color="primary">TELL ME MORE DAMNIT</Button>
                                </Link>
                            </section>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid sx={{ mb: '5vh', flexGrow: 1 }} className="secondaryColor" container spacing={0}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={0}>
                        <Grid className="column" item sx={{ px: "5vw" }} xs={12} md={6}>
                            <section>
                                <h2>HI I'M KAYLA</h2>
                                <p>Your love-loving, (yep, just call me Ted Mosby), mountain top dancing, coffee-bearing hype girl who gathered the RADDEST team around to create some truly EPIC experiences.
                                    With endless stoke, sub-par dance moves, endless motivation, and the skills and general badassery to pull of some pretty amazing things.</p>
                                <h3>Trust us, we've got you and your going to LIVE your LOVE STORY like you deserve</h3>
                            </section>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <CardMedia
                                sx={{
                                    my: { xs: '5vh', md: '10vh' },
                                    mx: { xs: 'auto' },
                                    height: { xs: 300, sm: 500, md: 400, lg: 500, xl: 600 },
                                    width: { xs: 300, sm: 500, md: 400, lg: 500, xl: 600 }
                                }}
                                component="img"
                                alt="Kayla loving life with her camera and inflatable flamingo"
                                image={Flamingo}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid sx={{ mb: '5vh', flexGrow: 1 }} container spacing={1}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={1}>
                        {threeImgTwo.map((pic) => (
                            <Grid key={pic.key} item xs={6} md={4}>
                                <CardMedia
                                    sx={{ height: { xs: 200, sm: 300, md: 400, lg: 500, xl: 600 } }}
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
                    <h3>I AM HERE FOR THE WILD ONES- THE BOLD, THE ADVENTUROUS, THE ONES THAT THROW AWAY THE RULE BOOK.</h3>
                    <h3>SAY YES TO YOUR FOREVER ADVENTURE WITH EXPERIENCES THAT TAKE YOUR BREATHE AWAY. SAY YES TO TRULY INTIMATE EXPERIENCES. SAY YES TO CELEBRATING LIFE. SAY HELL YES TO LAUGHING, DANCING, SINGING, AND ENJOYING LIKE THERE IS NO TOMORROW.</h3>
                    <Link to='contact'>
                        <Button variant="contained" color="primary">Let Adventure Pact Plan Your Experience</Button>
                    </Link>
                </section>
            </div>
            <div className="column secondaryColor">
                <section className="sectHome">
                    <h2>ARE YOU READY TO TAKE A LEAP INTO YOUR FOREVER ADVENTURE???</h2>
                    <Link to='contact'>
                        <Button variant="contained" color="lighterGreen" sx={{ color: 'white' }}>Contact Me</Button>
                    </Link>
                </section>
            </div>
            <Grid sx={{ flexGrow: 1 }} container spacing={0}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={0}>
                        <Grid item xs={12} md={6} className="primary column">
                            <Box
                                className="column"
                                sx={{
                                    position: 'sticky',
                                    top: '100px',
                                    mb: "auto",
                                    padding: '10vw'
                                }}>
                                <CardMedia
                                    sx={{ height: 100, width: 200 }}
                                    component="img"
                                    alt="Mountain drawing"
                                    image={MountainStencil}
                                />
                                <h2 className="whiteText">4 REASONS WHY YOU SHOULD SERIOUSLY CONSIDER ME</h2>
                            </Box>
                        </Grid>
                        <Grid className="column terrtiary" sx={{ textAlign: { md: 'left'}, pr: { md: '6vw'} }} item xs={12} md={6}>
                            <section className='sectHome'>
                                {fourReasons.map((reason) => (
                                    <div key={reason.key}>
                                        <h2 key={reason.title} className='underline'>{reason.title}</h2>
                                        <h3 key={reason.text}>{reason.text}</h3>
                                        <p key={reason.subText} className="whiteText">{reason.subText}</p>
                                    </div>
                                ))}
                            </section>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Box sx={{ width: '90vw', px: '5vw', pt: '5vh' }}>
                <img id="map" alt="map" src={Map} />
            </Box>
            <div className="column">
                <section className="sectHome">
                <h2>STAY UP-TO-DATE WITH ALL THE RAD HAPPENINGS AT ADVENTURE PACT BY FOLLOWING US ON INSTAGRAM</h2>
                <Box sx={{ width: 'fit-content', display: 'flex', mx: 'auto' }} >
                    <a underline="none" target="_blank" rel="noreferrer" href='https://www.instagram.com/adventurepact/'>
                        <InstagramIcon sx={{ display: 'flex', fontSize: '5rem' }} />
                    </a>
                </Box>
                </section>
            </div>
            <Grid sx={{ mb: '5vh', flexGrow: 1 }} container spacing={1}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={1}>
                        {threeImgThree.map((pic) => (
                            <Grid key={pic.key} item xs={6} md={4}>
                                <CardMedia
                                    sx={{ height: { xs: 200, sm: 300, md: 400, lg: 500, xl: 600 } }}
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
                    <h2>SOUND LIKE WE'RE THE RIGHT FIT? LET'S MAKE A PACT!</h2>
                    <Link to='contact'>
                        <Button variant="contained" color="primary">Start Planning Your Perfect Adventure</Button>
                    </Link>
                </section>
            </div>
        </>
    );
};

export default Home;