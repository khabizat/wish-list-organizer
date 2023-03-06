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
  const [selectedItemId, setSelectedItemId] = useState(null);
  
  console.log(items);

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

  //delete item from the list
  const handleDelete = (itemId) => {
    axios.delete(`http://localhost:8080/api/items/${parseInt(itemId, 10)}`)
      .then(() => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  //edit item from the list - get item id
  const handleEdit = (itemId) => {
    setSelectedItemId(itemId);
    console.log(`Edit item with ID ${itemId}`);
  };

  //update item information on the server
  const handleUpdate = (itemId, name, url, price, categoryId) => {
    const updatedItem = {
      id: itemId,
      name: name,
      url: url,
      price: price,
      categoryId: parseInt(categoryId, 10)
    };
    console.log('updated item', updatedItem);
    axios
      .put(`http://localhost:8080/api/items/${itemId}`, updatedItem)
      .then((response) => {
        const updatedItems = items.map((item) => {
          if (item.id === itemId) {
            return response.data;
          }
          return item;
        });
        setItems(updatedItems);
        setSelectedItemId(null);
      })
      .catch((error) => {
        console.log("update error", error);
      });
  };

  const allItems = items.map((item) => {
    // console.log(items)
    return (
      <ItemListItem
        key={item.id}
        itemId={item.id}
        name = {item.name}
        price = {item.price}
        url = {item.url}
        categoryId={item.category_id}
        onDelete={() => handleDelete(item.id)}
        onEdit={handleEdit}
        selectedItemId={selectedItemId}
        onUpdate={handleUpdate}
        setSelectedItemId={setSelectedItemId}
      />
    );
  });


  return (
    <div>
      <ul>
        {allItems}
      </ul>
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
      <ItemForm 
        onCancel={back}
        onAdd={handleAdd}
        onUpdate={handleUpdate}
      />
      )}
    </div>
  )
}