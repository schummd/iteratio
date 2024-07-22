
import * as React from 'react';
import Box from '@mui/material/Box';

import Hero from '../components/Hero';
import Slider from '../components/Slider';
import Logos from '../components/Logos';
import Services from '../components/Services';
import Banner from '../components/Banner';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home () {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      // height={'100vh'}
      width={'100%'}
    >
      <Hero />
      <Slider />
      {/* <Logos /> */}
      <Services />
      <Banner />
      <Portfolio />
      <Contact />
      {/* <Footer /> */}
    </Box>
  )
}

