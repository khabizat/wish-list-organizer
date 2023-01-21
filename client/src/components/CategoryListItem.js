import { React, useEffect, useState} from "react";
import axios from "axios";
import ItemList from "./ItemList";

export default function CategoryListItem(props) {

  const categoryId = props.categoryId;

  return(
    <aside className="w-64">
      <li onClick={()=>props.setCategoryId(categoryId)}>
          <h2 className="flex justify-between p-8 text-lg font-normal bg-yellow-100 text-gray-900 transition duration-75 hover:bg-yellow-500 dark:hover:bg-gray-700 dark:text-white">
            {props.name}
            <button>
              <svg 
                className="w-10 h-10 hover:fill-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor">
                <path 
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </h2>
      </li>
    </aside>
  );
}