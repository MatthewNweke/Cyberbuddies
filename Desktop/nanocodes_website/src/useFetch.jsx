import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { UserContext } from "./context/UserContext";


const useFetch = (url) => {
  const course = useContext(UserContext)

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data); 
        console.log(response.data)
        console.log('hello world')
        //course.fetchedData(response.data)
      })
      .catch((err) => {
        setError(err);
      }).finally(()=>[
        setLoading(false)
      ]);
  }, [url]);

  return {data, loading, error}
};

export default useFetch;
