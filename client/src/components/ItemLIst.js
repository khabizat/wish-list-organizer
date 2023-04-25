import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemListItem from "./ItemListItem";
import ItemForm from "./ItemForm";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from "@mui/icons-material/Search";
import Add from "@mui/icons-material/Add";
import TextField from '@mui/material/TextField';
import useVisualMode from "../hooks/useVisualMode";

export default function ItemList(props) {

  const [items, setItems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [searchItem, setSearchItem] = useState('');
  
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
    if (window.confirm("Are you sure you want to delete this item?")) {
    axios.delete(`http://localhost:8080/api/items/${parseInt(itemId, 10)}`)
      .then(() => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
      })
      .catch((err) => {
        console.error(err);
      });
    }
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
      name,
      url,
      price,
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

  // filter item list to show matched items
  const filteredItems = items.filter((item) => {
    return item.name.toLowerCase().includes(searchItem.toLowerCase());
  });

  const allItems = filteredItems.map((item) => {
    return (
      <ItemListItem
        key={item.id}
        itemId={item.id}
        name = {item.name}
        price = {item.price}
        url = {item.url}
        date={item.date}
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
    <div className="mt-4">
      {/* <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        type="search"
      /> */}
      <TextField
        className="w-full mb-4"
        label="Search item"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
        InputProps={{
        endAdornment: (
          <IconButton>
            <SearchIcon />
          </IconButton>
        )
        }}
      />
      <ul>
        {allItems}
      </ul>
      {showForm && (
      <ItemForm
        onCancel={back}
        onAdd={handleAdd}
        onUpdate={handleUpdate}
      />
      )}
      <div className="flex justify-center">
        <IconButton
          onClick = {() => setShowForm(!showForm)}
          size="large"
          aria-label="add"
        >
          <Add sx={{ fontSize: "4rem" }} />
        </IconButton>
      </div>
    </div>
  )
}