import React from "react";
import CategoryList from "./components/CategoryList";
import CategoryListItem from "./components/CategoryListItem";
import ItemList from "./components/ItemList";
import useApplicationData from "./hooks/useApplicationData";



export default function App(props) {

  const {
    state,
    setCategoryId
  } = useApplicationData();


  return (
    <main>
      <CategoryList
        categories={state.categories}
        value={state.categoryId}
        onChange={setCategoryId}
      />
      <ItemList
        categoryId={state.categoryId}/>
    </main>
  );
}