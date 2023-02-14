import React from "react";
import CategoryList from "./components/CategoryList";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";
import useApplicationData from "./hooks/useApplicationData";
// import useVisualMode from "./hooks/useVisualMode";


export default function App(props) {

  const {
    state,
    setCategoryId
  } = useApplicationData();

  return (
    <main className="flex">
      <div>
        <CategoryList
        categories={state.categories}
        value={state.categoryId}
        onChange={setCategoryId}
        />
      </div>

      <div>
        <ItemList
        categoryId={state.categoryId}
        />
      </div>
    </main>
  );
}