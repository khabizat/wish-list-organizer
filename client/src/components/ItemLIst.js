import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemListItem from "./ItemListItem";
import ItemForm from "./ItemForm";
import IconButton from '@mui/material/IconButton';
import Add from "@mui/icons-material/Add";
import useVisualMode from "../hooks/useVisualMode";

export default function ItemList(props) {

  const [items, setItems] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const {
    categoryId
  } = props;

  const { 
    mode, 
    transition, 
    back } = useVisualMode(
  );  
  
  useEffect(() => {
    axios.get(`http://localhost:8080/api/categories/${categoryId}`)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  //update the item list in real-time
  const handleAdd = (newItem) => {
    setItems([...items, newItem]);
  };


  const handleDelete = (itemId) => {
    axios.delete(`http://localhost:8080/api/items/${parseInt(itemId, 10)}`)
      .then(() => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
      })
      .catch((err) => {
        console.error(err);
      });
  };


  const allItems = items.map((item) => {
    // console.log(item.item)
    return (
      <ItemListItem
        itemId={item.item}
        key={item.item}
        name = {item.name}
        price = {item.price}
        url = {item.url}
        onDelete={() => handleDelete(item.item)}
      />
    );
  });


  return (
    <ul className="w-full">
      {allItems}
      <div className="flex justify-center">
        <IconButton
          onClick = {() => setShowForm(!showForm)}
          size="large"
          aria-label="add"
        >
          <Add sx={{ fontSize: "80px" }} />
        </IconButton>
      </div>
      {showForm && (
      <ItemForm onCancel = {back} onAdd={handleAdd}/>
      )}
    </ul>
  )
}