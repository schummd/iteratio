import * as React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function DisplayRight ({ description }) {
  const navigate = useNavigate();

  const handleClick = (link) => {
		navigate('/' + link);
	};

  return (
    <Grid container gap={0} width={'60%'} padding={'40px 0px'}>

      {/* image for mobile */}
      <Grid item xs={12} sm={6} display={{ xs: 'flex', sm: 'none' }} sx={{ paddingLeft: { xs: '0px', sm: '40px' }, paddingTop: { xs: '10px', sm: '0px' } }}>
        <Box
          component={'img'}
          flexShrink={1}
          width={'100%'}
          src={require( "../" + description.image )}
          sx={{ objectFit: 'contain' }}
        />
      </Grid>

      {/* text */}
      <Grid item xs={12} sm={6} paddingRight={{ xs: '0px', sm: '40px' }}>
        <Typography variant={'subtitle2'} color={'#949494'}>{ description.type }</Typography>
        <Typography variant={'h2'} margin={'2px 0px'}>{ description.title }</Typography>
        <Typography variant={'h3'} margin={'12px 0px'}>{ description.subtitle }</Typography>
        {
          description.description.map((line, i) => (
            <Typography variant={'body1'} key={'description_' + i} marginBottom={'7px'}>
              { line }
            </Typography>
          ))
        }
        <Button
          variant={'outlined'}
          color={'primary'}
          onClick={() => handleClick(description.link)}
          sx={{ borderRadius: '100px', margin: '7px 0px 14px' }}
        >
          See More
        </Button>
      </Grid>

      {/* image */}
      <Grid
        item xs={12} sm={6}
        display={{ xs: 'none', sm: 'flex' }}
        paddingLeft={{ xs: '0px', sm: '20px' }}
        paddingTop={{ xs: '10px', sm: '0px' }}
      >
        <Box
          component={'img'}
          flexShrink={1}
          width={'100%'}
          src={require( "../" + description.image )}
          sx={{ objectFit: 'contain' }}
        />
      </Grid>

    </Grid>
  )
}
