import * as React from 'react';
import { Box, Typography, Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

export default function Banner () {
  // const navigate = useNavigate();
  // const handleClick = (link) => {
	// 	navigate('/' + link);
	// };

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      width={'100%'}
      backgroundColor={'#712963'}
      padding={'48px 0px'}
    >

      <Box width={'80%'}>
        <Typography component={'p'} variant={'body1'} textAlign={'left'} color={'#fff'}>
          With 20+ years in UX strategy and product design leadership,
          I specialize in fast-paced UX/UI processes, focusing on
          experimentation and validation. My track record spans startups
          and established companies, transforming concepts into intuitive
          user experiences. Expertise in FinTech, SaaS, data visualization,
          and AI-driven design with a strong focus on conversion and UX
          optimization. Effective collaboration with diverse teams in
          various industries, ensuring innovative, seamless solutions.
        </Typography>
      </Box>

      {/* button */}
      {/* <Box width={'80%'} sx={{ marginTop: 2 }}>
        <Button
          variant='outlined'
          color='secondary'
          // link to contact form
          onClick={() => handleClick('')}
          sx={{ borderRadius: '100px' }}
        >
          Explore More Projects
        </Button>
      </Box> */}

    </Box>
  )
}
