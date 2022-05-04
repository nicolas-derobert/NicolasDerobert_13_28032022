import { useState, useCallback } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const sendRequest = useCallback(async (requestConfig) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      const responseData = await response.json();
      setData(responseData)
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    } finally{
      setIsLoading(false);
    }
  }, []);
  return {
    isLoading,
    error,
    sendRequest,
    data
  };
};

export default useHttp;
