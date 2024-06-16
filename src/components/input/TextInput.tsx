import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';

function TextInput(props: TextFieldProps) {

  return (
  <TextField  { ...props } sx={{maxWidth: '220px'}}/>
  );
}

export default TextInput;
