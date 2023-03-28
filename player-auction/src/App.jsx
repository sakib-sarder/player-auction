import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import CardCart from './Component/CardCart/CardCart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='mb-12'>
      <Header/>
      </div>
      <div className='container mx-auto'>
        <CardCart/>
      </div>
    </div>
  )
}

export default App
