import * as React from 'react';
import { Box, Typography, Divider } from '@mui/material';

export default function Logos () {
  const cache = {};

	function importAll(r) {
		r.keys().forEach((key) => (cache[key] = r(key)));
	};

	importAll(require.context('../assets/clients', false, /\.png/));
	const logos = Object.entries(cache).map(module => module[1]);

  return (
    <Box display={'flex'} flexDirection={'column'} width={'100%'} marginTop={'50px'} sx={{ backgroundColor: '' }}>

      {/* line */}
      <Box
        display={'flex'}
        justifyContent={'center'}
        paddingBottom={'1em'}
        sx={{ backgroundColor: ''}}
      >
        <Box
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-between'}
          width={'80%'}
          height={'20px'}
          sx={{ backgroundColor: '' }}
        >
          <Box display={'inline'} sx={{ backgroundColor: '' }}>
            <Typography variant='string' sx={{ textTransform: 'uppercase', fontSize: 14, fontWeight: 400,
              backgroundColor: {
               	// xs: 'red',
               	// sm: 'yellow',
               	// md: 'grey',
               	// lg: 'blue',
               	// xl: 'green'
              } }}>
              Trusted by
            </Typography>
          </Box>
          <Box flex={1} sx={{ backgroundColor: '', marginLeft: '8px' }}>
            <Divider variant="middle" sx={{ borderBottomWidth: 1, borderBottomColor: '#cccccc', margin: '7.5px 0px 0px' }}/>
            <Divider variant="middle" sx={{ borderBottomWidth: 1, borderBottomColor: '#cccccc', margin: '4px 0px 0px' }}/>
          </Box>
        </Box>
      </Box>

      {/* logos */}
      <Box
        display={'flex'}
        // width={'100%'}
        justifyContent={'center'}
      >
        {
          <Box
            display={'flex'}
            width={'80%'}
            gap={'10px'}
            // justifyContent={'space-evenly'}
            justifyContent={'space-between'}
            flexWrap={'wrap'}
            flexDirection={'row'}
          >
            {
              logos.map((logo, i) => (
                <Box component={'img'} src={logo} flex={0} key={i} height={'40px'} sx={{ objectFit: 'contain', backgroundColor: '' }}/>
              ))
            }
          </Box>
        }

        {/* <Grid container columns={{ xs: 5, sm: 13 }} gap={0} width={'80%'} sx={{ display: { xs: '', sm: 'flex' }, backgroundColor: '' }}>
          {
            logos.map((logo, i) => (
              <Grid item xs={1} sm={1} lg={1} sx={{ margin: '0px 0px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box component={'img'} src={logo} key={i} width={'90%'} height={'90%'} sx={{ backgroundColor: 'green', objectFit: 'contain' }}/>
              </Grid>
            ))
          }
        </Grid> */}
      </Box>
    </Box>
  )
}