import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosSetup';

function Banner() {
  const [bannerImage, setBannerImage] = useState('');
  const [bannerData, setBannerData] = useState(null);

  const getBannerImage = async () => {
    try {
      const { data } = await axiosInstance.get('trending/all/day');
      

      if (data.results.length > 0) {
        // Randomly select a banner
        const randomIndex = Math.floor(Math.random() * data.results.length);
        const selectedBanner = data.results[randomIndex];
        const imageUrl = `https://image.tmdb.org/t/p/original${selectedBanner.backdrop_path || selectedBanner.poster_path}`;
        
        setBannerData(selectedBanner); // Set full banner data
        setBannerImage(imageUrl); // Set the image URL
        
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBannerImage();
  }, []);

  if (!bannerData) return null; // Don't render if there's no banner data yet

  const overview = bannerData.overview || '';

  return (
    <div className='w-full h-[300px] overflow-hidden mt-1  relative'>
      <img className='w-full h-full object-cover' src={bannerImage} alt={bannerData.name || bannerData.title || 'Banner'} />
      <h1 className='text-5xl font-extralight text-blue-500 absolute left-10 top-[120px]'>
        {bannerData.name || bannerData.title}
      </h1>
      {/* <p className='text-xl font-extralight   text-[#ff4ce1] absolute left-10 top-[150px]'>
        {overview.length > 100 ? overview.slice(0, 180) + '...' : overview}
      </p> */}
      <button className='px-5 py-3  bg-[#377df7] hover:bg-[#ff39ff] absolute top-[180px] left-10 text-white rounded-md'>
        Watch Trailer
      </button>
    </div>
  );
}

export default Banner;
