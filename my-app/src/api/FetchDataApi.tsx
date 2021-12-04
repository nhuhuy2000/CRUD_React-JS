import React, { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";
interface Type {
  id: number;
  name: string;
  dob: string;
  age: string;
}

const useAxios = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function Data() {
      try {
        let res = await axios.get(url);
        let dataRes = res.data;
        // if(dataRes && dataRes.length > 0) {
        //     dataRes.map((item) => {
        //       name:
        //     })
        // }
        if (dataRes && dataRes.length > 0) {
          dataRes.map((item: Type) => {
            return (item.dob = moment(item.dob).format("DD/MM/YYYY"));
          });
        }
        setData(dataRes);
        // console.log(dataRes);
        setIsError(false);
        setIsLoading(false);
      } catch (e) {
        setIsError(true);
        setIsLoading(false);
      }
    }
    Data();
  }, []);
  return {
    data,
    isLoading,
    isError,
  };
};

export default useAxios;
