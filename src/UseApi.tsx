import {useEffect, useState} from "react";
import axios from "axios";

export function useApi(url: string) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      try {
        const {data} = await axios(url);
        setData(data);
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
        setError(true);
      }
    }

    getData();

    return () => {
      setIsLoading(false);
      setError(false);
    }

  }, [url]);


  return {data, error, isLoading};
}
