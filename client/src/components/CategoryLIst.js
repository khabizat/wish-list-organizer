import React from "react";
import CategoryListItem from "./CategoryListItem";

function CategoryList(props) {

  const categories = props.categories.map((category) => {
    return (
      <CategoryListItem
        key={category.id}
        name = {category.name}
        setCategory = {props.onChange}
      />
    );
  });

  return (
    <ul>
      {categories}
    </ul>
  );
};

export default CategoryList;

