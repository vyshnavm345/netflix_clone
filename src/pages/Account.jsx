import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
    <div className='w-full text-white'>
    <img className=' absolute w-full h-[400px] object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg" alt="/" />

    <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
    <div className='absolute top-[20%] p-4 md:p-8'>
      <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
    </div>
    </div>
    <div className='relative  top-96'> <SavedShows /></div>
   
    </>
  );
};

export default Account