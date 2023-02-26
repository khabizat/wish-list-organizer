import React, { useState, useEffect } from "react";
import axios from "axios";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import CategoryListItem from "./CategoryListItem";

import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
// import WatchOutlinedIcon from '@mui/icons-material/WatchOutlined';
import ColorizeOutlinedIcon from '@mui/icons-material/ColorizeOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import ChairOutlined from "@mui/icons-material/ChairOutlined";
import BlenderOutlinedIcon from '@mui/icons-material/BlenderOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';

const categoryIcons = {
  "Clothing & Shoes": <CheckroomOutlinedIcon />,
  "Accessories": < BusinessCenterOutlinedIcon />,
  // HiOutlineShoppingBag
  "Skincare": <ColorizeOutlinedIcon />,
  "Beauty": <StarBorderOutlinedIcon />,
  "Wellness": < SpaOutlinedIcon />,
  "Electronics": <SmartphoneOutlinedIcon />,
  "Home Decor": <ChairOutlined />,
  "Kitchen": <BlenderOutlinedIcon/>,
  "Books": <AutoStoriesOutlinedIcon />,
};

export default function CategoryList(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const allCategories = categories.map((category) => (
    <ListItemButton  key={category.id}>
      <CategoryListItem
        name={category.name}
        icon={categoryIcons[category.name]}
        categoryId={category.id}
        setCategoryId={props.onChange}
      />
    </ListItemButton>
  ));

  return (
    <List>
      {allCategories}
    </List>
  );
};
