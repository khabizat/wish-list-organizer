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
    <ul className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
      <li >
      {categories}
      </li>
    </ul>
  );
};

export default CategoryList;

