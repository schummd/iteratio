import * as React from 'react';
import { Box, Typography, Button, Divider, List, ListItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ClientLogo = ({ title, logos }) => {
  return (
    <>
      <Box width={'100%'} margin={'10px 0px'} display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
        <Typography variant={'subtitle1'} textTransform={'uppercase'} color={'#707070'}>{ title }</Typography>
        <Box flex={1} sx={{ backgroundColor: '', marginLeft: '8px' }}>
          <Divider variant={'middle'} sx={{ borderBottomWidth: 0.8, borderBottomColor: '#cccccc', margin: '15px 0px 0px' }}/>
        </Box>
      </Box>
      <Box
        display={'flex'}
        gap={'10px'}
        justifyContent={'space-between'}
        alignContent={'flex-start'}
        flexWrap={'wrap'}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        {
          logos.map((logo, i) => (
            <Box key={'box_client_' + i}>
              <Box
                key={'client_' + i}
                component={'img'}
                height={logo.height}
                src={require( "../" + logo.image)}
                sx={{ objectFit: 'contain' }}
              />
            </Box>
          ))
        }
      </Box>
    </>
  )
}

const Section = ({ section }) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      // width={'100%'}
    >
      {/* title, descpription */}
      <Box width={'80%'} margin={'40px auto 26px'} backgroundColor={''}>
        <Typography component={'h2'} variant={'h2'} marginBottom={'8px'}>{ section.title }</Typography>
        {
          section.description.map((line, i) => (
            <Typography variant={'body1'} key={'text' + i} marginBottom={'14px'}>{ line }</Typography>
          ))
        }
        {
          Object.keys(section.bullets).length !== 0 ?
          // <Box width={'80%'} display={'flex'} backgroundColor={'pink'}>
            <List sx={{ listStyleType: 'disc', backgroundColor: '', margin: 0, padding: 0, marginLeft: '48px' }}>
              {
                section.bullets.map((line, i) => (
                  <ListItem flex={1} key={"bullet" + i} sx={{ display: 'list-item', backgroundColor: '',  padding: '4px 0px'}}>
                    <Typography variant={'body1'} key={i}>{ line }</Typography>
                  </ListItem>
                ))
              }
            </List>
          // </Box>
          :
          null
        }
      </Box>

      {/* images of the section */}
      {
        Object.keys(section.image).length !== 0 ?
        <Box width={'80%'} display={'flex'} flexDirection={'column'} margin={'40px auto 20px'} backgroundColor={''}>
          {
            section.image.map((item, i) => (
              <Box
                key={section.title.replace(/The /g, "") + "_" + i}
                component={'img'}
                src={require( "../" + item.image)}
                sx={{ objectFit: 'contain' }}
                // height={item.height}
                marginBottom={'20px'}
              />
            ))
          }
        </Box> :
        null
      }

    </Box>
  )
}

export default function UseCase ({ description }) {
  const navigate = useNavigate();
  const handleClick = (link) => {
		navigate('/' + link);
	};

  React.useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      width={'100vw'}
    >
        {/* Title, Description, Keywords, Clients */}
        <Box width={'80%'} margin={'80px auto'}>
          <Typography component={'h1'} variant={'h1'} marginBottom={'10px'}>{ description.title }</Typography>
          <Typography component={'h2'} variant={'subtitle1'} fontSize={24}>{ description.description }</Typography>
          <Box display={'flex'} flexDirection={'column'} margin={'20px 0px'}>
            {
              description.keywords.map((line, i) => (
                <Box flex={1} key={"keywords" + i}>
                  <Typography variant={'subtitle1'} color={'#707070'} key={i}>{ line }</Typography>
                </Box>
              ))
            }
          </Box>
          {
            description.clients.title !== "" ?
            <ClientLogo title={description.clients.title} logos={description.clients.image}/> :
            null
          }
        </Box>

        {/* Hero image */}
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          width={'100%'}
          marginBottom={'40px'}
        >
          <Box
            component={'img'}
            width={'80%'}
            height={'100%'}
            src={require( "../" + description.hero)}
            sx={{ objectFit: 'contain' }}
          />
        </Box>

        {/* Challenge */}
        {
          Object.keys(description.challenge.description).length !== 0 ?
          <Section section={description.challenge}/> :
          null
        }

        {/* Research */}
        {
          Object.keys(description.research.description).length !== 0 ?
          <Section section={description.research}/> :
          null
        }

        {/* Approach */}
        {
          Object.keys(description.approach.section.description).length !== 0 ?
          <Section section={description.approach.section}/> :
          null
        }

        {/* Approach subsections */}
        {
          Object.keys(description.approach.subsection).length !== 0 ?
          description.approach.subsection.map((subsection, i) => (
            <Section section={subsection} key={subsection.title + i}/>
          )) :
          null
        }

        {/* The Result */}
        {
          Object.keys(description.result.description).length !== 0 ?
          <Section section={description.result}/> :
          null
        }

        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          width={'100%'}
        >
          <Box width={'80%'} marginBottom={'40px'}>
            <Button
              variant='outlined'
              color='primary'
              onClick={() => handleClick('')}
              sx={{ borderRadius: '100px' }}
            >
              Back to Projects
            </Button>
          </Box>
        </Box>

    </Box>
  )
}