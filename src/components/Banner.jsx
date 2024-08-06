import * as React from 'react';
import { Box, Typography, Grid } from '@mui/material';

export default function Banner () {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      width={'100%'}
      backgroundColor={'#712963'}
      padding={'54px 0px'}
    >

      <Box width={'60%'}>
        <Typography component={'p'} variant={'body1'} textAlign={'left'} color={'#fff'}>
          With over two decades of experience in UX strategy and product design leadership,
          I specialize in agile UX/UI processes, emphasizing rapid experimentation and
          validation. My track record spans from dynamic startups to established enterprises,
          consistently transforming concepts into intuitive, high-converting user experiences.
        </Typography>
      </Box>

    </Box>
  )
}
