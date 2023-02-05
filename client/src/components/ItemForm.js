import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const axios = require("axios");

export default function ItemForm(props) {

  const [isFormVisible, setIsFormVisible] = useState(true);

  const {name, price, url, onCancel} = props;

  const [itemName, setItemName] = useState(name || "");
  const [itemPrice, setItemPrice] = useState(price || "");
  const [itemLink, setItemLink] = useState(url || "");

  function reset() {
    setItemName("");
    setItemPrice("");
    setItemLink("");
  }

  function cancel() {
    reset();
    setIsFormVisible(false);
    onCancel();
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
        </Box>
      ) : null }
      { isFormVisible ? (
        <section>
          <Button style={{width: '100px', marginRight: '10px', marginLeft: '10px'}} onClick={cancel} variant="contained" color="error">
            Cancel
          </Button>
          <Button style={{width: '100px'}} variant="contained" color="success">
            Save
          </Button>
        </section>
      ) : null }
    </main>
  );
}
