import React, { useState } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ItemForm(props) {

  const {
    name,
    price,
    url,
    categoryId,
    onCancel,
    onAdd,
    onUpdate,
    itemId,
    selectedItemId,
    setSelectedItemId
  } = props; 

  const [isFormVisible, setIsFormVisible] = useState(true);
  const [itemName, setItemName] = useState(name || "");
  const [itemPrice, setItemPrice] = useState(price || "");
  const [itemLink, setItemLink] = useState(url || "");
  const [itemCategoryId, setItemCategoryId] = useState(categoryId || "");

  const reset = () =>{
    setItemName("");
    setItemPrice("");
    setItemLink("");
    setItemCategoryId("");
  }

  const cancel = () => {
    reset();
    setIsFormVisible(false);
    onCancel();
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedItemId) {
      onUpdate(selectedItemId, itemName, itemLink, itemPrice, itemCategoryId);
      setSelectedItemId(null);
      cancel();
    } else {
      axios.post("http://localhost:8080/api/items", {
        name: itemName,
        price: itemPrice,
        url: itemLink,
        categoryId: itemCategoryId
      })
      .then((response) => {
        reset();
        setIsFormVisible(false);
        onAdd(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }
  


  return (
    <main>
      { isFormVisible ? (
        <Box
          component="form"
          display="flex"
          flexDirection="column"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '50ch' }
          }}
          noValidate
          autoComplete="off"
          onSubmit={event => event.preventDefault()}
        >
          <TextField
            id="filled-basic"
            label="Enter Item Name"
            type="text"
            variant="filled"
            value={itemName}
            onChange={(event) => setItemName(event.target.value)}
          />
          <TextField
            id="filled-basic"
            label="Enter Item Price"
            type="text"
            variant="filled"
            value={itemPrice}
            onChange={(event) => setItemPrice(event.target.value)}
          />
          <TextField
            id="filled-basic"
            label="Enter Item Link"
            type="text"
            variant="filled"
            value={itemLink}
            onChange={(event) => setItemLink(event.target.value)}
          />
          <TextField
            id="filled-basic"
            label="Enter Item Category"
            type="text"
            variant="filled"
            value={categoryId}
            onChange={(event) => setItemCategoryId(event.target.value)}
          />
        </Box>
      ) : null }
      { isFormVisible ? (
        <section className="mb-8">
          <Button onClick={cancel} style={{width: '100px', marginRight: '10px', marginLeft: '10px'}} variant="contained" color="error">
            Cancel
          </Button>
          <Button onClick={handleSubmit} style={{width: '100px'}} variant="contained" color="success" >
            Save
          </Button>
        </section>
      ) : null }
    </main>
  );
}
