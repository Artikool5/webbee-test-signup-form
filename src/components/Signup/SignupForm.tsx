import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import React from 'react';
import TextInput from '../input/TextInput';
import FormSubheader from './FormSubheader';

function SignupForm() {
  return (
    <Paper elevation={2} sx={{p: 2, maxWidth: 'fit-content'}}>
      <Stack direction='column' spacing={2}>
        <FormSubheader>Общая информация</FormSubheader>
        <Stack direction='row' spacing={2} useFlexGap flexWrap='wrap' >
          <TextInput
            label='Фамилия'
            id='surname-input'
            required
            autoFocus
          />
          <TextInput
            label='Имя'
            id='surname-input'
            required
          />
          <TextInput
            label='Отчество'
            id='patronim-input'
          />
        </Stack>
      </Stack>
    </Paper>
  );
}

export default SignupForm;
