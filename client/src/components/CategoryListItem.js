import { React } from "react";

export default function CategoryListItem(props) {

  const categoryId = props.categoryId;

  return(
    <aside className="w-full">
      <li onClick={()=>props.setCategoryId(categoryId)}>
          <h2 className="flex justify-start gap-2 p-6 text-lg font-semibold font-mono text-gray-900 transition duration-75 hover:bg-yellow-500">
            {props.icon}
            {props.name}
          </h2>
      </li>
    </aside>
  );
}