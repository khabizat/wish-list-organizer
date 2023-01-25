import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const axios = require("axios");

export default function ItemForm(props) {

  const {name, price, url} = props;

  const [itemName, setItemName] = useState(name || "");
  const [itemPrice, setItemPrice] = useState(price || "");
  const [itemLink, setItemLink] = useState(url || "");

  return(
    <main>
      <section>
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            value={itemName}
            name="item name"
            onChange={(event) => setItemName(event.target.value)}
            type="text"
            placeholder="Enter Item Name"
          />
          <input
            value={itemPrice}
            name="item price"
            onChange={(event) => setItemPrice(event.target.value)}
            type="text"
            placeholder="Enter Item Price"
          />
          <input
            value={itemLink}
            name="item link"
            onChange={(event) => setItemLink(event.target.value)}
            type="text"
            placeholder="Enter Item Link"
          />
        </form>
      </section>
      <section>
          <button>Cancel</button>
          <button>Save</button>
       </section>
    </main>
  );
}
