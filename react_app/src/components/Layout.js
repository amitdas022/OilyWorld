import * as React from 'react';
import banner_1 from '../images/banner_1.jpg'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const boxOne = {
  backgroundColor: 'red'
};

function Layout() {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
            <Grid item xs={6} md={8}>
                <Item style={boxOne}><img src={banner_1} alt="BigCo Inc. logo"/></Item>
            </Grid>
            <Grid item xs={6} md={4}>
                <Item>xs=6 md=4</Item>
            </Grid>
            <Grid item xs={6} md={4}>
                <Item>xs=6 md=4</Item>
            </Grid>
            <Grid item xs={6} md={8}>
                <Item>xs=6 md=8</Item>
            </Grid>
            </Grid>
        </Box>
    </div>
  )
}

export default Layout