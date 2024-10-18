import React, { useEffect, useState } from 'react'
import { GoSearch } from "react-icons/go";
import axios from 'axios';
import axiosInstance from '../utils/axiosSetup'
import Banner from '../components/Banner';
function Mainpage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const getSearchresult = async () => {
    try {
      const response = await axiosInstance.get(`/search/multi?query=${searchQuery}`);
      setSearchResults(response.data.results || []); // Ensure an empty array if no results
      console.log(response.data.results);
      console.log(response.data)
    } catch (error) {
      console.log('problem in fetching: ' + error);
    }
  }

  useEffect(() => {
    getSearchresult();
  }, [searchQuery])

  return (
    <div  className='w-[80vw] bg-[#212020]'>
      {/* input */}
      <div className='flex'>
        <div className=' flex text-center w-[40vw] ml-[15vw]  outline-none bg-transparent border-2 border-white rounded-lg text-xl text-blue-200'>
          <input
            onChange={(event) => setSearchQuery(event.target.value)}
            type='text'
            placeholder='Search according to you'
            value={searchQuery}
            className='w-[90%] h-full px-5 py-2 object-cover outline-none bg-transparent'
          />
          <button><GoSearch className='text-[#3636f4] mr-2 text-2xl font-extrabold' /></button>
          <button onClick={() => setSearchQuery('')} className='px-3 py-1 font-extralight text-3xl text-white ml-4 border-l-2 border-white rounded-lg'>X</button>
        </div>
      </div>

      {/* results of search */}
      {
        searchQuery.length > 0 && (
          <div className='absolute w-[50vw] bg-blue-100 max-h-[30vh] top-[8vh] ml-[11.8vw] rounded-xl px-5 py-1 overflow-y-auto'>
            {
              Array.isArray(searchResults) && searchResults.length > 0 ? (
                searchResults.map((item, index) => (
                  <h1 key={index} className='px-10 py-3 border-b-2 border-zinc-600 text-black text-lg font-semibold'>
                  <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} className='w-[75px] h-[40px] rounded-xl '></img>
                    {item.original_title || item.name}
                  </h1>
                ))
              ) : (
                <p className="text-black">No results found</p>
              )
            }
          </div>
        )
      }

      {/* banner */}
      <Banner/>

    </div>
  )
}

export default Mainpage;
