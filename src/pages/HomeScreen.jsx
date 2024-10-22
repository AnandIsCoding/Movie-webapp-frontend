import React from 'react'
import Sidebar from '../components/sidebar'
import Mainpage from './Mainpage'



function HomeScreen() {
  return (
    <div className='flex w-screen'>
      <Sidebar/>
      <Mainpage/>
     
    </div>
  )
}

export default HomeScreen
