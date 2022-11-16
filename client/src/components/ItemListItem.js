import React from "react";

export default function ItemListItem(props) {

  const {
    name,
    url,
    price,
  } = props;


  return (
    <div className="max-w-2xl w-3/4 px-8 py-4 mx-auto my-4 bg-green-100 rounded-md border p-5 shadow-lg transition hover:bg-blue-200 hover:border-blue-300 hover:scale-105">
      <span className="mt-4 flex justify-start">{name}</span>
      <span className="mt-4 flex justify-start">{price}</span>
      <span className="mt-4 flex justify-start">{url}</span>
    </div>
  )
}