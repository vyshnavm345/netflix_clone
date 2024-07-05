import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Movie from './Movie';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import Youtube from 'react-youtube';

const Row = ({title, fetchURL, rowID}) => {
    const [movies , setMovies] = useState([]);
    const [urlID, setUrlID] =useState('');
    const [dataFromChild, setDataFromChild] = useState(null);

    useEffect(()=>{
        axios.get(fetchURL).then((response)=>{
            const moviesWithImages = response.data.results.filter(movie => movie.backdrop_path !== null);
            setMovies(moviesWithImages)
        })
    },[fetchURL])
    
    const slideLeft = ()=>{
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = ()=>{
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft + 500;
    }
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
        autoplay: 1,
        },
};



    const handleDataFromChild = (data) => {
        console.log('Data from child:', data);
        axios.get(`https://api.themoviedb.org/3/movie/${data}/videos?api_key=0df3772e005f1f93dda3fbb5f52771e1&language=en-US`).then(response=>{
            if(response.data.results.length !==0){
                setUrlID(response.data.results[0])
            }
        })
    };



return (
    <>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        <div className='relative flex items-center group'>
            <MdChevronLeft onClick={slideLeft} className='bg-white rounded-full left-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />
            <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies.map((item, id)=>(
                <Movie  sendDataToParent={handleDataFromChild} key={id} item={item}/>
                ))}
            </div>
            <MdChevronRight onClick={slideRight} className='bg-white rounded-full right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
        </div>
        { urlID && <Youtube  videoId={urlID.key} opts={opts} />}
    </>
)
}

export default Row

