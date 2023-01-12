import { React, useEffect, useState} from "react";
import axios from "axios";
import ItemList from "./ItemList";

export default function CategoryListItem(props) {

  const categoryId = props.categoryId;

  return(
      <li 
        onClick={()=>props.setCategoryId(categoryId)}
      >
        <div>
          <h2 className="bg-yellow-100 rounded-lg border border-primaryBorder shadow-default">
            {props.name}
            <img
            className="mx-auto"
            src="images/add.png"
            alt="Add"
          />
          </h2>
        </div>
      </li>
  );
}