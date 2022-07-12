import React from 'react'
import './UralsCrude.css'
import { Divider } from '@mui/material';
import {
    AreaChart,
    ResponsiveContainer,
    Legend, Tooltip,
    XAxis,
    YAxis,
    Area,
    Label
} from 'recharts';
import { Container } from '@mui/system';
 

const pdata = [
    {
        "Date": "Jul-22",
        "Price": "84.87",
        "Open": "89.53",
        "High": "89.53",
        "Low": "89.53",
        "B_Price": "99.84",
        "B_Open": "109.56",
        "B_High": "114.71",
        "B_Low": "98.52"
    },
    {
        "Date": "Jun-22",
        "Price": "90.99",
        "Open": "94.53",
        "High": "94.53",
        "Low": "94.53",
        "B_Price": "109.03",
        "B_Open": "113.14",
        "B_High": "121.74",
        "B_Low": "104.35"
    },
    {
        "Date": "May-22",
        "Price": "98.03",
        "Open": "78.08",
        "High": "78.08",
        "Low": "78.08",
        "B_Price": "115.6",
        "B_Open": "104.53",
        "B_High": "120.8",
        "B_Low": "100.14"
    },
    {
        "Date": "Apr-22",
        "Price": "79.41",
        "Open": "81.83",
        "High": "81.83",
        "Low": "81.83",
        "B_Price": "107.14",
        "B_Open": "103.31",
        "B_High": "113.61",
        "B_Low": "97.18"
    },
    {
        "Date": "Mar-22",
        "Price": "82.91",
        "Open": "98.29",
        "High": "98.29",
        "Low": "98.29",
        "B_Price": "104.71",
        "B_Open": "95.48",
        "B_High": "134.91",
        "B_Low": "94.61"
    },
    {
        "Date": "Feb-22",
        "Price": "94.28",
        "Open": "90.47",
        "High": "90.47",
        "Low": "90.47",
        "B_Price": "97.97",
        "B_Open": "88.22",
        "B_High": "102.26",
        "B_Low": "86.31"
    },
    {
        "Date": "Jan-22",
        "Price": "92.04",
        "Open": "76.61",
        "High": "76.61",
        "Low": "76.61",
        "B_Price": "89.26",
        "B_Open": "77.75",
        "B_High": "90.27",
        "B_Low": "76.6"
    },
    {
        "Date": "Dec-21",
        "Price": "76.8",
        "Open": "70.55",
        "High": "70.55",
        "Low": "70.55",
        "B_Price": "77.35",
        "B_Open": "69.37",
        "B_High": "80.03",
        "B_Low": "65.48"
    },
    {
        "Date": "Nov-21",
        "Price": "69.34",
        "Open": "83.1",
        "High": "83.1",
        "Low": "83.1",
        "B_Price": "69.23",
        "B_Open": "82.44",
        "B_High": "84.26",
        "B_Low": "67.45"
    },
    {
        "Date": "Oct-21",
        "Price": "82.1",
        "Open": "76.67",
        "High": "76.67",
        "Low": "76.67",
        "B_Price": "83.72",
        "B_Open": "77.67",
        "B_High": "85.77",
        "B_Low": "76.78"
    },
    {
        "Date": "Sep-21",
        "Price": "75.86",
        "Open": "68.68",
        "High": "68.68",
        "Low": "68.68",
        "B_Price": "78.31",
        "B_Open": "70.98",
        "B_High": "79.95",
        "B_Low": "69.85"
    },
    {
        "Date": "Aug-21",
        "Price": "70.88",
        "Open": "71.43",
        "High": "71.43",
        "Low": "71.43",
        "B_Price": "71.63",
        "B_Open": "74.45",
        "B_High": "74.52",
        "B_Low": "64.2"
    },
    {
        "Date": "Jul-21",
        "Price": "73.97",
        "Open": "74.66",
        "High": "74.66",
        "Low": "74.66",
        "B_Price": "75.41",
        "B_Open": "73.83",
        "B_High": "76.8",
        "B_Low": "66.91"
    },
    {
        "Date": "Jun-21",
        "Price": "74.91",
        "Open": "68.81",
        "High": "68.81",
        "Low": "68.81",
        "B_Price": "74.62",
        "B_Open": "69.07",
        "B_High": "75.77",
        "B_Low": "68.98"
    },
    {
        "Date": "May-21",
        "Price": "67.74",
        "Open": "68.44",
        "High": "68.44",
        "Low": "68.44",
        "B_Price": "68.95",
        "B_Open": "66.24",
        "B_High": "69.9",
        "B_Low": "64.5"
    },
    {
        "Date": "Apr-21",
        "Price": "65.69",
        "Open": "60.35",
        "High": "60.35",
        "Low": "60.35",
        "B_Price": "66.76",
        "B_Open": "62.68",
        "B_High": "68.44",
        "B_Low": "60.93"
    },
    {
        "Date": "Mar-21",
        "Price": "61.63",
        "Open": "64.55",
        "High": "64.55",
        "Low": "64.55",
        "B_Price": "62.74",
        "B_Open": "64",
        "B_High": "70.67",
        "B_Low": "60.33"
    },
    {
        "Date": "Feb-21",
        "Price": "64.92",
        "Open": "56.45",
        "High": "56.45",
        "Low": "56.45",
        "B_Price": "64.42",
        "B_Open": "54.7",
        "B_High": "66.82",
        "B_Low": "54.4"
    },
    {
        "Date": "Jan-21",
        "Price": "55.81",
        "Open": "50.97",
        "High": "50.97",
        "Low": "50.97",
        "B_Price": "55.04",
        "B_Open": "51.53",
        "B_High": "57.31",
        "B_Low": "50.66"
    },
    {
        "Date": "Dec-20",
        "Price": "50.97",
        "Open": "49.68",
        "High": "49.68",
        "Low": "49.68",
        "B_Price": "51.82",
        "B_Open": "47.95",
        "B_High": "52.46",
        "B_Low": "46.81"
    },
    {
        "Date": "Nov-20",
        "Price": "46.92",
        "Open": "46.92",
        "High": "46.92",
        "Low": "46.92",
        "B_Price": "47.88",
        "B_Open": "37.8",
        "B_High": "49",
        "B_Low": "36.29"
    },
    {
        "Date": "Oct-20",
        "Price": "37.12",
        "Open": "37.12",
        "High": "37.12",
        "Low": "37.12",
        "B_Price": "37.94",
        "B_Open": "42.65",
        "B_High": "43.99",
        "B_Low": "37.26"
    },
    {
        "Date": "Sep-20",
        "Price": "40.49",
        "Open": "40.49",
        "High": "40.49",
        "Low": "40.49",
        "B_Price": "42.3",
        "B_Open": "45.96",
        "B_High": "46.57",
        "B_Low": "39.88"
    }
];

const revData = pdata.reverse();

function UralsCrude() {
    return (
        <>
            <Divider>
                <p>

                </p>
            </Divider>
            <h1 className="text-heading">
                Urals Crude Oil Prices
            </h1>
            <Container className='firstChart'>
                <ResponsiveContainer width="100%" aspect={2}>
                    <AreaChart 
                        data={revData} 
                        margin={{
                            top: 10,
                            right: 20,
                            left: 0,
                            bottom: 15
                        }}>
                        <XAxis dataKey="Date"  
                            rotate={0}
                            interval={0}/>
                        <YAxis>
                            <Label angle={-90} value='$USD / Barrel' position='insideLeft' style={{textAnchor: 'middle', fontWeight: 'bolder'}} />
                        </YAxis>
                        <Legend />
                        <Tooltip />
                        <Area name='Urals Crude Oil Price' stackId='1' dataKey="Price"
                            stroke="#8884d8" activeDot={{ r: 5 }}
                            fillOpacity='0.1'
                            isAnimationActive='true'
                            />
                        <Area name='Brent Crude Oil Price'stackId='2' dataKey="B_Price"
                            stroke="#ffc658" activeDot={{ r: 5 }}
                            fillOpacity='0.1'
                            isAnimationActive='true'
                            fill='#ffc658'
                            />
                    </AreaChart>
                </ResponsiveContainer>
            </Container>
        </>
    );
}
  
export default UralsCrude;