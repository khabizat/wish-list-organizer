import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryListItem from "./CategoryListItem";

export default function CategoryList(props) {

  const categoryId = props.id

  console.log(props)

  const [items, setItems] = useState(null);

  const getAllItems = (categoryId) => {
    axios
      .get(`http://localhost:8080/api/categories/${categoryId}`)
      .then((response) => {
        setItems(response.data)
        console.log(response)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllItems();
  }, []);


  const categories = props.categories.map((category) => {
    return (
      <CategoryListItem
        key={category.id}
        name={category.name}
        setCategory={props.onChange}
      />
    );
  });

  return (
    <ul
      onClick={getAllItems}
    >
      {categories}
    </ul>
  );
};

