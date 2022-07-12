import * as React from 'react';
import banner_1 from '../images/banner_1.jpg'
import { Container, textAlign } from '@mui/system';
import { Divider } from '@mui/material';

const containerOne = {
    display: 'flex',
    alignSelf: 'center',
    textAlign: 'center'
};

const imgOne = {
    maxWidth: '100%',
    textAlign: 'center',
    alignSelf: 'center'
};

function Layout() {
  return (
    <div>
        <Divider>
            <p> </p>
        </Divider>
        <Container style={containerOne}>
            <img style={imgOne} src={banner_1} alt="BigCo Inc. logo"/>
        </Container>
    </div>
  )
}

export default Layout