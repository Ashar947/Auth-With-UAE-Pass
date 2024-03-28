import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Third() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get('code');
  const state = queryParams.get('state');
  
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/user/auth/uaePass', { code, state });
      setUserData(response.data);
      setError(null);
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };

  return (
    <>
      <h1>Third</h1>
      <button onClick={handleClick}>Click Me</button>
      {userData && <div>User Data: {JSON.stringify(userData)}</div>}
      {error && <div>Error: {error.message}</div>}
    </>
  );
}

export default Third;
