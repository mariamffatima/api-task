// pages/index.js

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

const fetchData = async () => {
  const response = await fetch('https://random-data-api.com/api/users/random_user?size=10');
  const data = await response.json();
  return data;
};

const Api = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchData().then((data) => setUserData(data));
  }, []);

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3 mt-16'>
        {userData.map((user) => (
          <div key={user.id} className='flex bg-slate-100 m-3 h-50  w-50  rounded-2xl space-x-2 py-5 hover:bg-white hover:scale-100 hover:border-2 hover:cursor-pointer hover:shadow-lg border border-gray-600 hover:border-blue-300'>
            <div className='w-24 h-24 rounded-full overflow-hidden'>
              <Image
                src={user.avatar}
                alt='image'
                width={600}
                height={600}
              />
            </div>
            <div>
              <h2 className='text-xl text-black font-semibold flex justify-start'>{user.first_name} {user.last_name}</h2>
              <h3 className='text-lg text-black hidden lg:inline'>{user.email}</h3>
             <ul className='flex flex-row flex-wrap space-x-2 '>
             <li className='text-lg px-2 bg-white text-black rounded-2xl hover:bg-white hover:scale-100 hover:border-2 hover:cursor-pointer hover:shadow-lg border border-gray-600 hover:border-blue-300'>{user.employment.key_skill}</li>
             <li className='text-lg px-2 bg-white text-black rounded-2xl  hover:bg-white hover:scale-100 hover:border-2 hover:cursor-pointer hover:shadow-lg border border-gray-600 hover:border-blue-300'>{user.subscription.plan}</li>
             </ul>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

function Navbar() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <nav className='flex  flex-row justify-between items-center p-3 text-black'>
      <div className='flex items-center px-2 border-2 border-gray-600 hover:cursor-text rounded-xl'>
        <FaSearch className='text-gray-600 mr-2' />
        <input
          type='text'
          value={inputValue}
          onChange={handleChange}
          className='bg-transparent outline-none text-sm text-gray-800 placeholder-gray-700'
          placeholder='Search...'
        />
      </div>
      <div className='space-x-3 flex-wrap'>
        <button className='bg-transparent hover:bg-white hover:scale-100 hover:border-2 hover:cursor-pointer hover:shadow-lg text-black font-semibold py-2 px-3 border border-black hover:border-blue-500 rounded'>
          Home
        </button>
        <button className='bg-transparent hidden md:inline hover:bg-white hover:scale-100 hover:border-2 hover:cursor-pointer  hover:shadow-lg text-black font-semibold py-2 px-3 border border-black hover:border-blue-500 rounded'>
          Contact
        </button>
      </div>
    </nav>
  );
}

export default function Home() {
  return (
    <main>
      <title>api rendering</title>
      
      <div ><h1 className='font-bold text-3xl font-serif p-2'>Users</h1></div>
        
        <Navbar />
        <div >
         <Api/>
        </div>
      
    </main>
  );
}
