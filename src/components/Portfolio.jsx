import * as React from 'react';
import { Box } from '@mui/material';

import DisplayRight from './DisplayRight';
import DisplayLeft from './DisplayLeft';
import data from '../assets/data.json';

export default function Portfolio () {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      width={'100%'}
      margin={'80px 0px'}
    >
      <DisplayLeft description={data.volt.summary}/>
      <DisplayRight description={data.spokes.summary}/>
      <DisplayLeft description={data.bullseye.summary}/>
      <DisplayRight description={data.ateed.summary}/>
    </Box>
  )
}
