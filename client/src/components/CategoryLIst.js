import React, { useState, useEffect } from "react";
import axios from "axios";
import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
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

  const allCategories = categories.map((category) => (
    <ListItemButton  key={category.id}>
      <CategoryListItem
        name={category.name}
        categoryId={category.id}
        setCategoryId={props.onChange}
      />
    </ListItemButton>
  ));

  return (
    <List>
      {allCategories}
    </List>
  );
};
