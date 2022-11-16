import React from "react";
import CategoryList from "./components/CategoryLIst";
import ItemList from "./components/ItemList";
import useApplicationData from "./hooks/useApplicationData";



export default function App(props) {

  const {
    state,
    setCategory
  } = useApplicationData();


  return (
    <main>
      <h1>Category List</h1>
      <CategoryList
        categories={state.categories}
        value={state.category}
        onChange={setCategory}
      />
      {/* <h1>Items List</h1>
      <ItemList
        items = {state.items}
        value={state.item}
      /> */}
    </main>
  );
}
