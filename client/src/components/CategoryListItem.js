import { React } from "react";

export default function CategoryListItem(props) {

  const categoryId = props.categoryId;

  return(
    <aside className="w-64">
      <li onClick={()=>props.setCategoryId(categoryId)}>
          <h2 className="flex justify-start gap-2 p-8 text-lg font-normal bg-yellow-100 text-gray-900 transition duration-75 hover:bg-yellow-500 dark:hover:bg-gray-700 dark:text-white">
            {props.icon}
            {props.name}
          </h2>
      </li>
    </aside>
  );
}