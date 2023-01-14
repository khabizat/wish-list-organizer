import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemListItem from "./ItemListItem";

export default function ItemList(props) {

  const [items, setItems] = useState([]);

  const {
    categoryId
  } = props;
  
  useEffect(() => {
    axios.get(`http://localhost:8080/api/categories/${props.categoryId}`)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  const allItems = items.map((item) => {
    return (
      <ItemListItem
        key={item.id}
        name = {item.name}
        price = {item.price}
        url = {item.url}
      />
    );
  });


  return (
      <ul>
        {allItems}
      </ul>
  )

}