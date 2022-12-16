import { React, useEffect, useState} from "react";
import axios from "axios";
import ItemList from "./ItemList";

export default function CategoryListItem(props) {

  const category = props.name;

  return(
    <section>
      <li 
        onClick={()=>props.setCategory(category)}
      >
        <div className="p-4 w-full flex flex-wrap justify-center text-center mb-2">
          <h2 className="w-1/2 bg-yellow-100 rounded-lg border border-primaryBorder shadow-default py-10 px-16">
            {props.name}
          </h2>
        </div>
      </li>
    </section>
  );
}