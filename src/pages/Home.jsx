import * as React from 'react';
import Box from '@mui/material/Box';

import Hero from '../components/Hero';
import Slider from '../components/Slider';
// import Logos from '../components/Logos';
import Services from '../components/Services';
import Banner from '../components/Banner';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

export default function Home () {
  React.useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      width={'100%'}
    >
      <Hero />
      <Slider />
      {/* <Logos /> */}
      <Services />
      <Banner />
      <Portfolio />
      <Contact />
    </Box>
  )
}

