import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryListItem from "./CategoryListItem";

export default function CategoryList(props) {

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
    >
      {categories}
    </ul>
  );
};

