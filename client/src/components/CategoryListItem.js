import React from "react";

function CategoryListItem(props) {
  
  const category = props.name;
  
  return(
    <li 
      onClick={()=>props.setCategory(category)}
    >
      <h2>{props.name}</h2> 
    </li>
  );
}

export default CategoryListItem;
