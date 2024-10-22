import React, { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosSetup";
import Loading from '../components/Loading'

function ScrollCards() {
  const [allMovies, setAllMovies] = useState([]);
  const [typeOfMovies, setTypeOfMovies] = useState('all');

  const fetchAllMoviesCards = async () => {
    try {
      const { data } = await axiosInstance.get(`trending/${typeOfMovies}/day`);
      setAllMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchAllMoviesCards();
  }, [typeOfMovies]);

  return (
    <div className="w-full mt-2">
      <label htmlFor="filter" className="ml-2 mt-1 mb-1 px-2 text-violet-800 font-semibold  py-2 bg-blue-100 rounded-l-full">
        Choose your preference
      </label>
      <select
        name="filter"
        id="filter"
        className="cursor-pointer px-5 py-[7px] bg-blue-300 rounded-r-full outline-none"
        onChange={(e) => setTypeOfMovies(e.target.value)} // Use onChange to handle selection
        value={typeOfMovies}
      >
        <option value="all" className="cursor-pointer" >All</option>
        <option value="tv">TV</option>
        <option value="movie">Movies</option>
      </select>

      <div className="w-full cards flex overflow-x-auto gap-5 rounded-xl overflow-y-hidden px-2 py-2">
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
  );
}

export default ScrollCards;
