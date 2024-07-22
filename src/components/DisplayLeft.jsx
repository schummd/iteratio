import * as React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function DisplayLeft ({ description }) {
  const navigate = useNavigate();
  const handleClick = (link) => {
		navigate('/' + link);
	};

  return (
    <Grid container gap={0} width={'80%'} padding={'20px 0px'}>

      {/* image */}
      <Grid item xs={12} sm={6} display={'flex'} paddingRight={{ xs: '0px', sm: '20px' }} paddingTop={{ xs: '10px', sm: '0px' }}>
        <Box
          component={'img'}
          flexShrink={1}
          width={'100%'}
          src={require( "../" + description.image )}
          sx={{ objectFit: 'contain' }}
        />
      </Grid>

      {/* text */}
      <Grid item xs={12} sm={6} paddingLef={{ sx: '0px', sm: '20px' }}>
        <Typography variant={'subtitle2'} color={'#949494'} marginTop={{ xs: '20px', sm: '0px' }}>{ description.type }</Typography>
        <Typography variant={'h2'} margin={'2px 0px'}>{ description.title }</Typography>
        <Typography variant={'h3'} margin={'12px 0px'}>{ description.subtitle }</Typography>
        <Typography variant={'body1'}>{ description.description }</Typography>
        <Button
          variant='outlined'
          color='primary'
          onClick={() => handleClick(description.link)}
          sx={{ borderRadius: '100px', margin: '14px 0px' }}
        >
          See More
        </Button>
      </Grid>

  </Grid>
  )
}
