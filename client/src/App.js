import React from "react";
import CategoryList from "./components/CategoryList";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";
import SortForm from "./components/SortForm";
import useApplicationData from "./hooks/useApplicationData";
// import useVisualMode from "./hooks/useVisualMode";


export default function App(props) {

  const {
    state,
    setCategoryId
  } = useApplicationData();

  return (
    <main className="flex">
      <div className="bg-white h-screen overflow-y-scroll w-1/5">
        <CategoryList
        categories={state.categories}
        value={state.categoryId}
        onChange={setCategoryId}
      />
      </div>

      <div className="bg-white h-screen overflow-y-scroll w-2/5">
        <ItemList
        categoryId={state.categoryId}
        />
      </div>
      <div className="bg-white h-screen overflow-y-scroll w-1/5">
        <SortForm
        />
      </div>
    </main>
  );
}