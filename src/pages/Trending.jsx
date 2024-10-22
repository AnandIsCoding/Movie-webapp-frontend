import React from 'react'
import { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import axiosInstance from '../utils/axiosSetup';

function Trending() {
  const [allMovies, setAllMovies] = useState([]);
  const fetchAllMoviesCards = async () => {
    try {
      const { data } = await axiosInstance.get(`trending/movie/day`);
      setAllMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
  useEffect(() => {
    fetchAllMoviesCards();
  }, []);

  return (
    <div className="w-full mt-2">
    

    <div className="w-full cards flex overflow-x-auto gap-5 rounded-xl overflow-y-hidden px-2 py-2 flex-wrap">
      {allMovies.length > 0 ? (
        allMovies.map((singleMovie) => (
          <div
            key={singleMovie.id}
            className="cursor-pointer w-[15vw] h-[25vw] flex-shrink-0 rounded-xl border-b-2 border-violet-100 bg-black overflow-scroll"
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${singleMovie.backdrop_path}`}
              className="h-[80%] w-full object-cover rounded-xl"
              alt={singleMovie.title || singleMovie.name}
            />
            <h1 className="text-center text-xl font-bold text-blue-200">
              {singleMovie.name || singleMovie.title}
            </h1>
            <p className="text-xs font-light text-white px-1 pb-2">
              {singleMovie.overview.slice(0, 80)}...
              <span className="text-blue-200">more</span>
            </p>
          </div>
        ))
      ) : (
        <p className="text-white"> <Loading/> </p>
      )}
    </div>
  </div>
  )
}

export default Trending
