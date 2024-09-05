import React from 'react'
import { useState } from 'react';

import './App.css';
import Room from './Room';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate=useNavigate();

    const [RoomId, setRoomId] = useState()
    const handleRoomLogin=()=>{
       navigate('Room'+ `/${RoomId}`);
    }
  return (
    <div className='flex justify-center items-center w-[100vw] h-[100vh] border-4 border-indigo-500/100 '>
    <input value={RoomId} onChange={(e)=>{ setRoomId(e.target.value)}} className='text-[25px] p-[10px] mx-[20px] ' type="text" placeholder='Enter Room Id'/>
    <button onClick={handleRoomLogin} className='bg-green-400 text-[25px] w-[299px] text-white rounded-[20px]  '>Join Room</button>
    </div>

  )
}

export default Home