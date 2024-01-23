import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const {user, logout} = UserAuth()

  const navigate = useNavigate()

  const handleLogout = async ()=>{
    try{
      await logout();
      navigate('/');
    } catch(error){
      console.log(error);
    }
  }

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute' >
      <Link to='/'>
       <img className='relative left-20 w-40' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="NETFLIX" />
        {/* <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1> */}
      </Link>
      {user?.email ? 
      <div>
      <Link to='/account'>

        <button className='text-white pr-4'>Account</button>
      </Link>
      
        <button onClick={handleLogout} className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Logout</button>
        
      </div>
      :
      <div>
          <Link to='/login'>

            <button className='text-white pr-4'>Sign In</button>
          </Link>
          <Link to='/signup'>
          
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
          </Link>
            
      </div>
      }  
    </div>
    
  )
}

export default Navbar