import React, {useState} from "react";
import axios from "axios";
import Microlink from '@microlink/react';
import moment from 'moment';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ItemForm from "./ItemForm";


export default function ItemListItem(props) {

  const {
    itemId,
    name,
    url,
    date,
    price,
    onDelete,
    onEdit,
    selectedItemId,
    setSelectedItemId,
    onUpdate
  } = props;

  const dateFormatted = moment.utc(date).format('MMMM D, YYYY');

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
    onEdit(itemId);
    console.log(`handleEditClick from ItemListItem with id ${itemId}`)
  };

  const handleCancel = () => {
    setIsEditing(false);
    console.log('handleCancel from ItemListItem')
  }
  

  if (isEditing) {
    return (
      <ItemForm
        name={name}
        url={url}
        price={price}
        onCancel={handleCancel}
        selectedItemId={itemId}
        onUpdate={onUpdate}
        setSelectedItemId={setSelectedItemId}
      />
    );
  }

  return (
    <div className="p-5 hover:bg-blue-200 hover:border-blue-300 h-64 w-1/3 md:h-auto md:w-auto">
      <div className="flex justify-between">
        <span className="mt-4 flex justify-start text-yellow-500 font-bold">{name}</span>
        <div className="flex justify-end space-x-2">
          <button onClick={handleEditClick}>
            <EditOutlinedIcon />
          </button>
          <button onClick={onDelete}>
            <DeleteOutlineOutlinedIcon />
          </button>
        </div>
      </div>
      <hr className="border-b-4 border-yellow-500"></hr>
      <div className="flex justify-between">
        <span className="mt-4 flex justify-start">{price}</span>
        <span className="mt-4 flex justify-start text-gray-400 text-sm">Item added {dateFormatted}</span>
      </div>
      <Microlink url={url} />
    </div>
  );
}