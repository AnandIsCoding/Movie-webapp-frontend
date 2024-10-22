import React from 'react'
import Sidebar from './components/sidebar'
import Mainpage from './pages/Mainpage'
import { Route, Routes } from 'react-router-dom'
import Trending from './pages/Trending'
import HomeScreen from './pages/HomeScreen'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className='flex w-screen'>
      
      <Routes>
        <Route path='/' element={ <HomeScreen/> } />
        <Route path='/trending' element={ <Trending/> } />
        <Route path='/*' element={ <NotFound/> } />
      </Routes>
    </div>
  )
}

export default App
