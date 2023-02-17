import React, {useState} from "react";
import axios from "axios";
import Microlink from '@microlink/react';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
// import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ItemForm from "./ItemForm";


export default function ItemListItem(props) {

  const {
    name,
    url,
    price,
    onDelete
  } = props;


  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  }

  const handleCancel = () => {
    setIsEditing(false);
  }
  

  if (isEditing) {
    return (
      <ItemForm
        name={name}
        url={url}
        price={price}
        onCancel={handleCancel}
      />
    );
  }

  return (
    <div className="p-5 hover:bg-blue-200 hover:border-blue-300 h-64 w-64 md:h-auto md:w-auto">
      <div className="flex justify-between">
        <span className="mt-4 flex justify-start">{name}</span>
        <div className="flex justify-end space-x-2">
          <button onClick={handleEdit}>
            <EditOutlinedIcon />
          </button>
          <button onClick={onDelete}>
            <DeleteOutlineOutlinedIcon />
          </button>
        </div>
      </div>
      <hr className="border-b-4 border-black"></hr>
      <span className="mt-4 flex justify-start">{price}</span>
      <Microlink url={url} />
    </div>
  );
}