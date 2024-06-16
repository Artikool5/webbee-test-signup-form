import { Typography } from '@mui/material';
import React from 'react';

interface FormSubheaderProps {
  children?: string;
}

function FormSubheader({children}: FormSubheaderProps) {
  return (
    <Typography variant='subtitle1' component='h3' pb={1.5}>{children}</Typography>
  );
}

export default FormSubheader;
