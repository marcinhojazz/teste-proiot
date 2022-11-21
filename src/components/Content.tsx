import React, { useState } from 'react'
import Card from './Card'
import Linechart from './LineChart'

type Props = {}

const buttonStyle = `

`;

export default function Content({ }: Props) {
  const [active, setActive] = useState(false);

  return (
    <div className=''>
      <div className='flex justify-start items-center border px-6  py-6 space-x-12'>
        <div className='flex justify-center items-center space-x-2'>
          <span className='flex h-4 w-4'>
            <span className={`relative inline-flex rounded-full h-3 w-3  ${active ? 'bg-lime-500' : 'bg-red-500'}`}>
              {active ? (
                <span className="animate-ping ring-2 ring-lime-500 rounded-full w-full h-full ping"></span>
              ) : ''}
            </span>
          </span>

          <span>
            Comunicação {active ? 'ativa' : 'desativada'}
          </span>
        </div>
        <div>
          <button onClick={() => setActive(!active) } className={`bg-white px-6 py-4 rounded-md hover:bg-gray-200 ring-4 transition ${active ? 'ring-red-500 focus:ring-red-400' : 'ring-lime-500 focus:ring-lime-500 flex'}`}>
            {
              active ? "Desativar Socket" : "Ativar Socket"
            }
          </button>
        </div>
      </div>
      <div className='py-16 px-12 flex flex-wrap md:justify-between justify-center gap-12'>
        <Card>
          <h2 className='border w-full text-center font-bold py-2'>
            Chart
          </h2>
          <Linechart />
        </Card>
        <Card>
          <h2 className='border w-full text-center font-bold py-2'>Temperature</h2>
          <div className='border h-full w-full flex flex-col justify-center items-center'>
            <span>Last value</span>
            <span>27 ºc</span>
          </div>
        </Card>
        <Card >
          <h2 className='border w-full text-center font-bold py-2'>Umidade</h2>
          <div className='border h-full w-full flex flex-col justify-center items-center'>
            <svg className='svg-icon animate-spin h-5 w-5 mr-3' xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 119.4 122.88"><title>reload</title><path d="M83.91,26.34a43.78,43.78,0,0,0-22.68-7,42,42,0,0,0-24.42,7,49.94,49.94,0,0,0-7.46,6.09,42.07,42.07,0,0,0-5.47,54.1A49,49,0,0,0,30,94a41.83,41.83,0,0,0,18.6,10.9,42.77,42.77,0,0,0,21.77.13,47.18,47.18,0,0,0,19.2-9.62,38,38,0,0,0,11.14-16,36.8,36.8,0,0,0,1.64-6.18,38.36,38.36,0,0,0,.61-6.69,8.24,8.24,0,1,1,16.47,0,55.24,55.24,0,0,1-.8,9.53A54.77,54.77,0,0,1,100.26,108a63.62,63.62,0,0,1-25.92,13.1,59.09,59.09,0,0,1-30.1-.25,58.45,58.45,0,0,1-26-15.17,65.94,65.94,0,0,1-8.1-9.86,58.56,58.56,0,0,1,7.54-75,65.68,65.68,0,0,1,9.92-8.09A58.38,58.38,0,0,1,61.55,2.88,60.51,60.51,0,0,1,94.05,13.3l-.47-4.11A8.25,8.25,0,1,1,110,7.32l2.64,22.77h0a8.24,8.24,0,0,1-6.73,9L82.53,43.31a8.23,8.23,0,1,1-2.9-16.21l4.28-.76Z"/></svg>
          </div>
        </Card>
      </div>
    </div>
  )
}
