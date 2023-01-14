import { React, useEffect, useState} from "react";
import axios from "axios";
import ItemList from "./ItemList";

export default function CategoryListItem(props) {

  const categoryId = props.categoryId;

  return(
    <aside className="w-64" aria-label="Sidebar">
      <li onClick={()=>props.setCategoryId(categoryId)}>
          <h2 className="flex align-items-stretch p-2 text-base font-normal bg-yellow-100 text-gray-900 transition duration-75 hover:bg-yellow-500 dark:hover:bg-gray-700 dark:text-white group">
            {props.name}
          </h2>
      </li>
      {/* <img
            className="flex justify-start"
            src="images/add.png"
            alt="Add"
          /> */}
    </aside>

  );
}