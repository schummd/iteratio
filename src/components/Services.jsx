import * as React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import ShapeLineIcon from '@mui/icons-material/ShapeLine';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';

export default function Services () {
  const services = {
    one: [ "Strategic Design", "Product Design Leadership", "User Research", "Conceptual Ideation", "CX Design" ],
    two: [ "UX Prototyping", "Design Systems", "UI/UX Design", "Interaction Design", "UX Audits & Usability Testing" ],
    three: [ "Innovation Management", "Inclusive Design", "Stakeholder Engagement", "Agile Collaboration", "Human-Centered Design" ],
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
      margin={'80px 0px 40px'}
    >

      {/* title */}
      <Box width={'60%'} margin={'5px 0px'}>
        <Typography component={'h2'} variant={'h2'} textAlign={'center'} marginBottom={'8px'}>
          Services and Deliverables
        </Typography>
        <Typography component={'p'} variant={'body1'} textAlign={'center'} marginBottom={'8px'}>
          I run UX design projects from strategy to production for FinTech, SaaS platforms, data visualisation tools, and AI-enhanced interfaces.
        </Typography>
      </Box>

      {/* services */}
      <Box width={'60%'} marginTop={'20px'}>
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
