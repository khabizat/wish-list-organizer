import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryListItem from "./CategoryListItem";


export default function CategoryList(props) {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const categoryItems = categories.map((category) => {
    return (
      <CategoryListItem
        key={category.id}
        name={category.name}
        categoryId={category.id}
        setCategoryId={props.onChange}
      />
    );
  });

  return (
    <ul>
      {categoryItems}
    </ul>
  );
};

