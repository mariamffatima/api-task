import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const fetchData = async () => {
  const response = await fetch('https://random-data-api.com/api/users/random_user?size=5');
  const data = await response.json();
  return data;
};

const IndexPage = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchData().then((data) => setUserData(data));
  }, []);

  return (
    <div className="">
		<h1 className='font-bold text-3xl p-5 font-serif' >Users</h1>
		<nav>
			<div className='grid-col-3 '></div>
			
		</nav>
      <ul>
        {userData.map((user) => (
          <li key={user.id} className="mb-3">
            <h2 className="text-lg font-semibold">{user.first_name} {user.last_name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone_number}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndexPage;
