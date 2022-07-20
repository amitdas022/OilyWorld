import * as React from 'react';
import './Layout.css'
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
        <div className='rowContent'>
            <Container>
                <p className='contentFolderOne'>
                    <span className='defHeading'>
                        What is Urals Crude Oil?<br/><br/>
                        <Divider /><br/>
                    </span>
                    <span className='contentOne'>
                        Urals oil is a reference oil brand used as a basis for pricing of the Russian export oil mixture. It is a mix of heavy sour oil of Urals and the Volga region with light oil of Western Siberia. Other reference oils are Brent, West Texas Intermediate and Dubai. Urals brand oil is supplied through the Baku-Novorossiysk pipeline system and the Druzhba pipeline. Urals oil futures trade on Moscow Exchange. There was also an effort to trade it on NYMEX under the name of REBCO (Russian Export Blend Crude Oil); however, not a single trade was made.
                    </span>
                </p>
            </Container>
        </div>
    </div>
  )
}

export default Layout