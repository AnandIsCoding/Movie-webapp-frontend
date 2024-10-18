import React from 'react'
import Sidebar from './components/sidebar'
import Mainpage from './pages/Mainpage'

function App() {
  return (
    <div className='flex w-screen'>
      <Sidebar/>
      <Mainpage/>
    </div>
  )
}

export default App
