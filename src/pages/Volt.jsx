import * as React from 'react';
// import { Box, Typography, Grid, Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

import data from '../assets/data.json';
import UseCase from './UseCase';

export default function Volt () {
  return (
    <UseCase description={data.volt.page}/>
  )
}