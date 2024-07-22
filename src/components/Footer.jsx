import * as React from 'react';
import { Typography, Box, styled } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Slash = styled('div')({
  color: '#fc100f',
  display: 'inline',
})

export default function Footer () {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      width={'100%'}
      component={'footer'}
      sx={{ backgroundColor: '#333' }}
    >
      <Box
        width={'80%'}
        padding={'60px 0px'}
        sx={{ backgroundColor: '' }}
        >
          <Box
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            sx={{ backgroundColor: '' }}
          >
            <Typography variant={'h6'} sx={{ color: '#fff' }}>
              Anna Shum <Slash>/</Slash> Lead Product Designer
            </Typography>
            <a href={'https://au.linkedin.com/in/anna-shum-a21a6165'} target={'_blank'} style={{ backgroundColor: '', paddingTop: '5px' }}>
              <LinkedInIcon sx={{ fill: '#fff' }}/>
            </a>
          </Box>

          <Typography variant={'body1'} sx={{ padding: '20px 0px', color: '#fff' }}>
            I help startup and scale-up companies grow by implementing exceptional product experience.
          </Typography>
          <Typography variant={'subtitle2'} sx={{ color: '#fff' }}>© 2023 Anna Shum</Typography>
        </Box>
    </Box>

  )
}
