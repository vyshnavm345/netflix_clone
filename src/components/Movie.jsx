import {FaHeart, FaRegHeart} from 'react-icons/fa';
import React, {useState} from 'react'
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase'; 
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'; 

const Movie = ({item, sendDataToParent }) => {

    const [like , setLike] = useState(false);
    const [saved, setSaved] = useState(false);
    const {user} = UserAuth();

    const movieID = doc(db, 'users', `${user?.email}`)

    const saveShow = async ()=>{
      if(user?.email){
        setLike(!like)
        setSaved(true)
        await updateDoc(movieID, {
          savedShows:arrayUnion({
            id:item.id,
            title: item.title,
            Image: item.backdrop_path
        })
        })
      } else {
        alert('Please log in to save a movie');
      }
    }
    const handleClick = (id) =>{
      sendDataToParent(id);
    }
    
  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
        <img  className='w-full h-auto block ' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
        <p onClick={()=> handleClick(item.id)} className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
        <p onClick={saveShow}>
            {like ? <FaHeart className='absolute top-4 left-4 text-grey-300'/> : <FaRegHeart className='absolute top-4 left-4 text-grey-300'/>}
        </p>
        </div>
    </div>
  )
}

export default Movie











//alternate way to do it

// import { FaHeart, FaRegHeart } from 'react-icons/fa';
// import React, { useState, useEffect } from 'react';
// import { UserAuth } from '../context/AuthContext';
// import { db } from '../firebase';
// import { arrayUnion, arrayRemove, doc, updateDoc } from 'firebase/firestore';

// const Movie = ({ item }) => {
//   const [like, setLike] = useState(false);
//   const [saved, setSaved] = useState(false);
//   const { user } = UserAuth();
//   const movieID = doc(db, 'users', `${user?.email}`);

//   useEffect(() => {
//     // Check if the current movie is already saved when the component mounts
//     if (user?.email) {
//       // TODO: Add logic to check if the current movie is in the user's savedShows
//       // If it is, set both like and saved to true
//     }
//   }, [user, item.id]); // Dependency array to run the effect when user or item.id changes

//   const saveShow = async () => {
//     if (user?.email) {
//       if (like) {
//         // If the movie is already liked, remove it from the saved state
//         setSaved(false);
//         await updateDoc(movieID, {
//           savedShows: arrayRemove({
//             id: item.id,
//             title: item.title,
//             Image: item.backdrop_path,
//           }),
//         });
//       } else {
//         // If the movie is not liked, remove it from the saved state (if it was saved previously)
//         if (saved) {
//           setSaved(false);
//           await updateDoc(movieID, {
//             savedShows: arrayRemove({
//               id: item.id,
//               title: item.title,
//               Image: item.backdrop_path,
//             }),
//           });
//         } else {
//           // If the movie was not saved previously, add it to the saved state
//           setSaved(true);
//           await updateDoc(movieID, {
//             savedShows: arrayUnion({
//               id: item.id,
//               title: item.title,
//               Image: item.backdrop_path,
//             }),
//           });
//         }
//       }

//       // Toggle the like state
//       setLike((prevLike) => !prevLike);
//     } else {
//       alert('Please log in to save a movie');
//     }
//   };

//   return (
//     <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
//       <img
//         className='w-full h-auto block'
//         src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
//         alt={item?.title}
//       />
//       <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
//         <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
//           {item?.title}
//         </p>
//         <p onClick={saveShow}>
//           {like ? (
//             <FaHeart className='absolute top-4 left-4 text-grey-300' />
//           ) : (
//             <FaRegHeart className='absolute top-4 left-4 text-grey-300' />
//           )}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Movie;
