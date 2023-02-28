import { React, useState } from "react";

export default function CategoryListItem(props) {

  const categoryId = props.categoryId;
  const isSelected = categoryId === props.selectedCategoryId;

  //update the selected category ID and the category ID in the parent component's state
  const handleCategoryClick = () => {
    props.setSelectedCategoryId(categoryId);
    props.setCategoryId(categoryId);
  };

  return(
    <aside className="w-full">
      <li onClick={handleCategoryClick}>
        <h2
          className={`flex justify-start gap-2 p-6 text-lg font-semibold font-mono ${
            isSelected ? "bg-yellow-500" : "bg-white"
          } transition duration-75 hover:bg-yellow-500`}
        >
          {props.icon}
          {props.name}
        </h2>
      </li>
    </aside>
  );
}