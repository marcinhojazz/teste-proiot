import React from 'react';
import Chart from 'react-apexcharts';

type LineChartProps = {}

function Linechart() {
  return (
    <>
      <div className="border w-full h-full grid justify-items-center">
        <Chart
          className='bg-white'
          type='line'
          width={380}
          height={250}
          grid={true}

          series={[
            {
              name: "Umidade",
              data: [90,95,80,70,60,75]
            },
            {
              name: "Temperatura",
              data: [35,50,45,40,35,30]
            },
          ]}

          options={{
            title: { text: "Chart Line" },
            xaxis: {
              categories: ['01', '02', '03', '04', '05', '06'],
            },
            colors: ['#3d85c6', '#cc0000'],
            stroke: {
              curve: 'straight',
            },

          }}
        />


      </div>
    </>
  )
}

export default Linechart;
