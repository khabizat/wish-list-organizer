import React from "react";

export default function CategoryListItem(props) {
  
  const category = props.name;
  
  return(
    <li 
      onClick={()=>props.setCategory(category)}
    >
      <h2>{props.name}</h2> 
    </li>
  );
}