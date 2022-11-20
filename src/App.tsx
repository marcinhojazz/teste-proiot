import { useState } from 'react'
import reactLogo from './assets/react.svg'

// import components
import Content from './components/Content'
import Header from './components/Header'

function App() {
  return (
    <div className="w-full bg-gray-300">
      <Header />
      <Content />
    </div>
  )
}

export default App
