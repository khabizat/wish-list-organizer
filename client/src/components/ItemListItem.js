import React from "react";
import Microlink from '@microlink/react'

export default function ItemListItem(props) {

  const {
    name,
    url,
    price,
  } = props;


  return (
    <div className="max-w-2xl mx-auto border p-5 hover:bg-blue-200 hover:border-blue-300">
      <span className="mt-4 flex justify-start">{name}</span>
      <hr className="border-b-4 border-black"></hr>
      <span className="mt-4 flex justify-start">{price}</span>
      <Microlink url={url} />
    </div>
  )
}