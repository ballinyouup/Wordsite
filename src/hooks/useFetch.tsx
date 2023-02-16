import { useEffect, useState } from 'react';
import axios from 'axios';
import { IData } from '../types/FetchTypes';
import { useRouter } from 'next/router';

const useFetch = () => {
  //Creates data variable of Interface IData or null and is set a default state of null.
  const [data, setData] = useState<IData | null>(null);

  //Store return from next's useRouter hook inside router.
  const router = useRouter();

  //Destructures page object from router.query.
  const { word } = router.query;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  /*
  Fetches data with useEffect hook asynchronously with a try catch for errors and
  runs whenever word changes as a dependency array.
  Returns the data object and word.
  */
  const fetchData = async () => {
    try {
      if (word !== '') {
        setIsLoading(true); // set isLoading to true when the request is sent
        const response = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        setData(response.data[0]);
      }
    } catch (error) {
      console.log(error);
      router.push('/notfound');
    } finally {
      // set isLoading to false when the response is received.
      setTimeout(() => setIsLoading(false), 2000);
    }
  };

  useEffect(() => {
    fetchData();
  }, [word]);
  return { data, word, isLoading };
};

export default useFetch;
