import { useState } from 'react'
import './App.css'

import './App.css'
import OtpLogin from './components/OtpLogin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='App bg-purple-300 h-[100vh] flex flex-col justify-center text-center items-center'>
      <div className='text-3xl text-purple-700 font-bold uppercase py-5'>Login with Phone</div>  
      <OtpLogin/  >
    </div>
    </>
      
  )
}

export default App
