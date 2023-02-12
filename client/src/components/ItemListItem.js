import React from "react";
import Microlink from '@microlink/react';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export default function ItemListItem(props) {

  const {
    name,
    url,
    price,
  } = props;


  return (
    <div className="p-5 hover:bg-blue-200 hover:border-blue-300 h-64 w-64 md:h-auto md:w-auto">
      <div className="flex justify-between">
        <span className="mt-4 flex justify-start">{name}</span>
        <DeleteOutlineOutlinedIcon/>
      </div>
      <hr className="border-b-4 border-black"></hr>
      <span className="mt-4 flex justify-start">{price}</span>
      <Microlink url={url} />
    </div>
  )  
}