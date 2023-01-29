import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useVisualMode from "../hooks/useVisualMode";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const axios = require("axios");

export default function ItemForm(props) {

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
    onCancel();
  }

  return(
    <main>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={event => event.preventDefault()}
      >
        <TextField
          id="filled-search"
          label="Enter Item Name"
          type="text"
          variant="filled"
          value={itemName}
          onChange={(event) => setItemName(event.target.value)}
        />
        <TextField
          id="filled-search"
          label="Enter Item Price"
          type="text"
          variant="filled"
          value={itemPrice}
          onChange={(event) => setItemPrice(event.target.value)}
        />
        <TextField
          id="filled-search"
          label="Enter Item Link"
          type="text"
          variant="filled"
          value={itemLink}
          onChange={(event) => setItemLink(event.target.value)}
        />
      </Box>
      <section>
        <button onClick={cancel}>Cancel</button>
        <button>Save</button>
      </section>
    </main>
  );
}
