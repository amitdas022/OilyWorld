import React, { useRef } from 'react'
import { Divider } from '@mui/material';
import { Line } from 'react-chartjs-2'

const uralsCrudeOil = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
        {
            label: "First dataset",
            data: [33, 53, 85, 41, 44, 65],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
        },
        {
            label: "Second dataset",
            data: [33, 25, 35, 51, 54, 76],
            fill: false,
            borderColor: "#742774"
        }
    ]
}


function UralsCrude() {
    const crudeChartState = useRef();
    
    if (crudeChartState.current === undefined) {
        console.log('True')
        crudeChartState.current.chartInstance.destroy();
    };

    return (
        <div>
            <Divider>
                <p> </p>
            </Divider>
            <div>
                <Line
                    ref={crudeChartState} 
                    data={uralsCrudeOil}
                    options={{
                        maintainAspectRatio: false,
                        responsive: true
                    }}
                />
            </div>
        </div>
    )
}

export default UralsCrude