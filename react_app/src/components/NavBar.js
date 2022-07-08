import React from 'react'
import './NavBar.css'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import DataUsageTwoToneIcon from '@mui/icons-material/DataUsageTwoTone';
import FeedbackTwoToneIcon from '@mui/icons-material/FeedbackTwoTone';

export default function NavBar() {
  const [value, setValue] = React.useState(0);
  return (
    <div className='nav-bar-ui'>
        <Box className='bottom-nav-bar-ui' sx={{ width: 1000 }}>
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
            }}
        >
            <BottomNavigationAction label="Home" icon={<HomeTwoToneIcon />} />
            <BottomNavigationAction label="Data Visualization" icon={<DataUsageTwoToneIcon />} />
            <BottomNavigationAction label="Feedback" icon={<FeedbackTwoToneIcon />} />
        </BottomNavigation>
        </Box>
    </div>
  );
}