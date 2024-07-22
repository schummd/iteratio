import * as React from 'react';
// import Box from '@mui/material/Box';
// import { useNavigate } from 'react-router-dom';

import data from '../assets/data.json';
import UseCase from './UseCase';

export default function Ateed () {
  return (
    <UseCase description={data.ateed.page}/>
  )
}