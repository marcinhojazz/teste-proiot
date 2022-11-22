import React, { useState } from 'react';
import Chart from 'react-apexcharts';

type LineChartProps = {}

function Linechart() {

  const [values, setValues] = useState([
    {
        name: "Umidade",
        data: [90,95,80,70,60,75]
      },
      {
        name: "Temperatura",
        data: [35,50,45,40,35,30]
      },
  ])

  const [option, setOptions] = useState(
    {
      title: { text: "Chart Line" },
      colors: ['#3d85c6', '#cc0000'],
      xaxis: {
        categories: ['01', '02', '03', '04', '05', '06'],
      },
      yaxis: {
        min: 0,
        max: 100,
      },
      stroke: {
        curve: 'straight',
        width: [4, 4, 4]
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        borderColor: '#F0F',
        yaxis: {
          lines: {
            show: true,
          }
        },
        xaxis: {
          lines: {
            show: true,
          }
        },
      }
    }
  );

  return (
    <>
      <div className="border w-full h-full grid justify-items-center">
        <Chart
          className='bg-white'
          type='line'
          width={300}
          height={250}
          grid={true}
          series={values}
          options={option}
        />
      </div>
    </>
  )
}

export default Linechart;
