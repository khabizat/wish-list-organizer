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
        <h2 className="w-56 m-auto bg-yellow-100 rounded-lg border border-primaryBorder shadow-default py-10 px-16">
          {props.name}
        </h2>
      </li>
    </section>

  );
}