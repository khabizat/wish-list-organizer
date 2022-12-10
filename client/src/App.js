import React from "react";
import CategoryList from "./components/CategoryList";
import ItemList from "./components/ItemList";
import useApplicationData from "./hooks/useApplicationData";



export default function App(props) {

  const {
    state,
    setCategory
  } = useApplicationData();


  return (
    <main>
      <CategoryList
        categories={state.categories}
        value={state.category}
        onChange={setCategory}
      />
    </main>
  );
}