import React from "react";
import CategoryList from "./components/CategoryList";
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
    </main>
  );
}
