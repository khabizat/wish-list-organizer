import {useEffect, useState} from "react";
import axios from "axios";

export default function useApplicationData(props) {
  const [state, setState] = useState({
    category: "Clothing & Shoes",
    categories: [],
    items: {}
  });

  //set the current category
  const setCategory = category => setState({ ...state, category });


  useEffect(() => {
   Promise.all([
    axios.get("http://localhost:8080/api/categories"),
    axios.get("http://localhost:8080/api/items")
  ]).then((all) => {
    console.log(all)
    setState(prev => ({...prev, categories: all[0].data, items: all[1].data }));
  });
  }, []);


  return {
    state,
    setCategory
  }

}