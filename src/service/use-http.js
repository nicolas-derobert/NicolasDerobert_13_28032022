import { useState, useCallback } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const sendRequest = useCallback(async (requestConfig) => {
    setIsLoading(true);
    setError(null);
    console.log(requestConfig)
    console.log(JSON.stringify(requestConfig.headers))
    console.log(JSON.stringify(requestConfig.body))

    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const responseData = await response.json();
      setData(responseData)
      console.log(responseData)
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, []);
  return {
    isLoading,
    error,
    sendRequest,
    data
  };
};

export default useHttp;
// import { useState, useCallback } from 'react';

// const useHttp = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const sendRequest = useCallback(async (requestConfig, applyData) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await fetch(requestConfig.url, {
//         method: requestConfig.method ? requestConfig.method : 'GET',
//         headers: requestConfig.headers ? requestConfig.headers : {},
//         body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
//       });

//       if (!response.ok) {
//         throw new Error('Request failed!');
//       }

//       const data = await response.json();
//       applyData(data);
//     } catch (err) {
//       setError(err.message || 'Something went wrong!');
//     }
//     setIsLoading(false);
//   }, []);

//   return {
//     isLoading,
//     error,
//     sendRequest,
//   };
// };

// export default useHttp;