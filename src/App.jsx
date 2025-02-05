import * as React from 'react';
// import './index.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Volt from './pages/Volt';
import Spokes from './pages/9Spokes';
import Bullseye from './pages/Bullseye';
import Ateed from './pages/Ateed';


const theme = createTheme({
  typography: {
    fontFamily: "'Montserrat'",
  },
  palette: {
    primary: {
      main: '#000000'
    },
    secondary: {
      main: '#fff'
    }
  }
});

theme.typography.h1 = {
  fontFamily: "'Montserrat'",
  [theme.breakpoints.up('xs')]: {
    fontSize: '3rem',
    fontWeight: 700,
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '4.5rem',
    fontWeight: 700,
  }
}

theme.typography.h2 = {
  fontFamily: "'Montserrat'",
  [theme.breakpoints.up('xs')]: {
    fontSize: '2rem',
    fontWeight: 700,
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '2.5rem',
    fontWeight: 700,
  },
}

theme.typography.h3 = {
  fontFamily: "'Montserrat'",
  [theme.breakpoints.up('xs')]: {
    fontSize: '1rem',
    fontWeight: 600,
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.5rem',
    fontWeight: 600,
  },
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ThemeProvider theme={theme}>
        <Container component='main' sx={{ padding: '0px!important', maxWidth: '100%!important' }}>
          <Box>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/volt' element={<Volt />}/>
              <Route path='/9spokes' element={<Spokes />}/>
              <Route path='/bullseye' element={<Bullseye />}/>
              <Route path='/ateed' element={<Ateed />}/>
            </Routes>
          </Box>
        </Container>
      </ThemeProvider>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
