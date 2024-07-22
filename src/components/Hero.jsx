import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function Hero () {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      width={'100%'}
    >

      <Box width={'80%'} margin={'20% auto'}>
        <Typography component={'h1'} variant={'h1'} marginBottom={'10px'}>
          Expert Product and User Experience Designer
        </Typography>

        <Typography component={'h2'} variant={'subtitle1'} fontSize={24}>
          Crafting digital excellence from concept to success, ensuring relevance, effectiveness, and user-friendliness.
        </Typography>
      </Box>

    </Box>
  )
}
