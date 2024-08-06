import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Quote from './components/Quote'

function App() {

  return (
    <div className='flex justify-center items-center flex-col' id="bg">
      <h1 className='my-10 font-bold text-5xl'>Random Quote Generator</h1>
 <Quote/>
 <h1 className='my-10 text-1xl'>Made with React</h1>
    </div>
  )
}

export default App
