import React, { useState } from "react";
import CategoryListItem from "./CategoryListItem";

export default function CategoryList(props) {

  function handleClick() {
    alert(`You clicked!`);
  }


  const categories = props.categories.map((category) => {
    return (
      <CategoryListItem
        key={category.id}
        name = {category.name}
      />
    );
  });

  return (
    <ul
      onClick={handleClick}
    >
      {categories}
    </ul>
  );
};

