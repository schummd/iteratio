import * as React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import ShapeLineIcon from '@mui/icons-material/ShapeLine';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';

export default function Services () {
  const services = {
    one: [ "Design Strategy & Planning", "Product Design Leadership", "User Research & Analysis", "Design Concepts & Ideation", "CX Omnichannel" ],
    two: [ "UX Design & Prototyping", "Branding & Design Systems", "UI Design & Interactions", "UX Audit & Usability Testing", "Design Leadership" ],
    three: [ "Usability & Accessibility", "Stakeholder Management", "Agile Collaboration", "HCD Methodologies", "Mentorship & Support" ],
  };
  const icons = [
    <ShapeLineIcon sx={{ marginBottom: '16px' }}/>,
    <DashboardIcon sx={{ marginBottom: '16px' }}/>,
    <AspectRatioIcon sx={{ marginBottom: '16px' }}/>
  ]

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      width={'100%'}
      margin={'80px auto'}
    >

      {/* title */}
      <Box width={'80%'} margin={'5px 0px'}>
        <Typography component={'h2'} variant={'h2'} textAlign={'center'} marginBottom={'8px'}>
          Services and Deliverables
        </Typography>
        <Typography component={'h3'} variant={'subtitle1'} fontSize={24} textAlign={'center'} marginBottom={'8px'}>
          I run UX design projects from strategy to production.
        </Typography>
      </Box>

      {/* services */}
      <Box width={'80%'} marginTop={'20px'}>
        <Grid container gap={0} spacing={0}>
          {
            Object.keys(services).map((key, i) => (
              <Grid item xs={12} sm={4} key={i} padding={'6px 0px'} marginBottom={{ xs: '18px', sm: '0px' }}>
                <Grid item xs={12} sm={4} key={"icon_" + i} textAlign={{ xs: 'center', sm: 'left' }}>
                  { icons[i] }
                </Grid>
                {
                  services[key].map((service, i) => (
                    <Typography component={'p'} variant={'body1'} id={i} key={i} textAlign={{ xs: 'center', sm: 'left' }} marginBottom={'4px'}>
                      { service }
                    </Typography>
                  ))
                }
              </Grid>
            ))
          }
        </Grid>
      </Box>

    </Box>
  )
}
