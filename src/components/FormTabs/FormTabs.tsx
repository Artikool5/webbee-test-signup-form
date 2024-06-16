import { Box, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import TabPanel from './TabPanel';
import SignupForm from '../Signup/SignupForm';

function a11yProps(index: number) {
  return {
    'id': `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function FormTabs() {
  const [openedTab, setOpenedTab] = useState(0);
  function handleTabChange(e:React.SyntheticEvent, newTab: number) {
    setOpenedTab(newTab);
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={
          {borderBottomWidth: 1,
          borderBottomColor: 'primary.main',
          borderBottomStyle: 'solid'}
        }>
        <Tabs
          value={openedTab}
          onChange={handleTabChange}
          aria-label='ренистрация пользователя и создание проекта'
        >
          <Tab label='Контактная информация' {...a11yProps(0)} />
          <Tab label='Проекты' {...a11yProps(0)} />
        </Tabs>
      </Box>
      <TabPanel value={openedTab} index={0}>
        <SignupForm />
      </TabPanel>
      <TabPanel value={openedTab} index={1}>
        Проекты
      </TabPanel>
    </Box>
  );
}

export default FormTabs;
