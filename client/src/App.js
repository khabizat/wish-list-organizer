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
      <div className="bg-white h-screen overflow-y-scroll">
        <CategoryList
        categories={state.categories}
        value={state.categoryId}
        onChange={setCategoryId}
      />
      </div>

      <div className="bg-white h-screen overflow-y-scroll">
        <ItemList
        categoryId={state.categoryId}
        />
      </div>
    </main>
  );
}