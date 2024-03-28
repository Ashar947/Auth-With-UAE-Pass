// import React, { useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';

async function Second() {
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const code = queryParams.get('code');
  // const state = queryParams.get('state');
  
  // const [isLoading, setIsLoading] = useState(true);
  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.post("http://localhost:5000", {
  //       code: code,
  //       state: state
  //     });
  //     setData(response.data);
  //   } catch (error) {
  //     setError(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, [code, state]);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  return (
    <div>
      {/* Render your component with the fetched data */}
      <p>Code: </p>
      {/* Render additional content based on the fetched data if needed */}
    </div>
  );
};


export default Second


