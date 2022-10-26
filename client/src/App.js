import React from "react";
import CategoryList from "./components/CategoryLIst";
import useApplicationData from "./hooks/useApplicationData";



function App(props) {

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

export default App;
