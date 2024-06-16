import { Box } from '@mui/material';
import React from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const {children, index, value} = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <Box sx={
        { p: 2,
          backgroundColor: 'primary.bg',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'primary.main',
        }}>
        {children}
      </Box>}
    </div>
  );
}

export default TabPanel;
