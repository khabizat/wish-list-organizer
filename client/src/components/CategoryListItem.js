import { React } from "react";
// import Fab  from '@mui/material/Fab';
// import AddIcon from '@mui/icons-material/Add';

export default function CategoryListItem(props) {

  const categoryId = props.categoryId;

  return(
    <aside className="w-64">
      <li onClick={()=>props.setCategoryId(categoryId)}>
          <h2 className="flex justify-between p-8 text-lg font-normal bg-yellow-100 text-gray-900 transition duration-75 hover:bg-yellow-500 dark:hover:bg-gray-700 dark:text-white">
            {props.name}
            {/* <Fab onClick={()=>alert(`You clicked ${props.name}`)} size="small" color="secondary" aria-label="add" >
              <AddIcon />
            </Fab> */}
          </h2>
      </li>
    </aside>
  );
}