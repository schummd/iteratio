import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';

import Logo from '../assets/logo.png';
import { Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export default function Header () {
  const navigate = useNavigate();

  const handleClick = (link) => {
		// setActiveLink(link);
		navigate('/' + link);
	};

  return (
    <Box component={'nav'}>
      <AppBar position='fixed' color='inherit' sx={{ boxShadow: '0px 0px 0px #e3e3e3', backgroundColor: '' }}>
        <Toolbar sx={{ minHeight: { xs: '30', sm: '100' } }} >

          <Box display={'flex'} width={'100%'} alignItems={'center'} sx={{ backgroundColor: '' }}>
            {/* logo */}
            <Box
              component='img'
              src={Logo}
              sx={{ height: '1rem', padding: { xs: '0px 10px', sm: '0px 25px' }, cursor: 'pointer', backgroundColor: '' }}
              alt='logo'
              onClick={() => handleClick('')}
            />
          </Box>

        </Toolbar>
      </AppBar>
      <Offset />
    </Box>
  )
}
