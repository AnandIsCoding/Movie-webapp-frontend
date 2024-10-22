import React from 'react'

function Loading() {
  return (
    <div className='w-screen h-screen bg-black absolute top-0 left-0 overflow-hidden z-50 flex justify-center items-center'>
       <img className=' h-[70%] object-cover' src='public/loader.gif' alt='loading.....'></img>
    </div>
  )
}

export default Loading
