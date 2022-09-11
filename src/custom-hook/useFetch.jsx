import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Abort controller: to prevent memory leaks when component unmounts before fetch completes (see useEffect cleanup function)
    const abortCont = new AbortController();
    const { signal } = abortCont;

    setTimeout(() => {
      fetch(url, { signal })
        .then((res) => {
          if (!res.ok)
            throw Error('could not fetch the data for that resource');
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setData(data);
          setError(null);
        })
        .catch((err) => {
          if (err.name === 'AbortError') console.log('fetch aborted');
          else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);
    // Stop fetching data if component unmounts before fetch completes
    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
