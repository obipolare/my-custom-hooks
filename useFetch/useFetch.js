import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  const isMounted = useRef(true);

  const [state, setstate] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setstate({
      data: null,
      loading: true,
      error: null,
    });

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        isMounted.current &&
          setstate({
            data,
            loading: false,
            error: null,
          });
      });
  }, [url]);

  return state;
};
