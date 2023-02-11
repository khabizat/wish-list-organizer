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
    axios.get(`http://localhost:8080/api/categories/${props.categoryId}`)
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

  const allItems = items.map((item) => {
    return (
      <ItemListItem
        key={item.id}
        name = {item.name}
        price = {item.price}
        url = {item.url}
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