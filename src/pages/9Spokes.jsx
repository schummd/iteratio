import * as React from 'react';
// import { Box, Typography, Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

import data from '../assets/data.json';
import UseCase from './UseCase';

export default function Spokes () {
  return (
    <UseCase description={data.spokes.page}/>
  )
}