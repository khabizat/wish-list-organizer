import React, { useState } from "react";
import ItemListItem from "./ItemListItem";

export default function ItemList(props) {

  const items = props.items.map((item) => {
    return (
      <ItemListItem
        key={item.id}
        name = {item.name}
        price = {item.price}
        url = {item.url}
        setSelectedCategory = {props.onChange}
      />
    );
  });

  return (
    <>
      <ul>
        {items}
      </ul>
    </>
  )

}