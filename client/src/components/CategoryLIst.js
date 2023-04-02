import React, { useState, useEffect } from "react";
import axios from "axios";

import ListItemButton from '@mui/material/ListItemButton';
import CategoryListItem from "./CategoryListItem";
import IconButton from '@mui/material/IconButton';
import Add from "@mui/icons-material/Add";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import List from '@mui/material/List';
import { 
  CheckroomOutlined as CheckroomOutlinedIcon, 
  BusinessCenterOutlined as BusinessCenterOutlinedIcon, 
  ColorizeOutlined as ColorizeOutlinedIcon, 
  StarBorderOutlined as StarBorderOutlinedIcon, 
  SpaOutlined as SpaOutlinedIcon, 
  SmartphoneOutlined as SmartphoneOutlinedIcon, 
  ChairOutlined as ChairOutlinedIcon, 
  BlenderOutlined as BlenderOutlinedIcon, 
  AutoStoriesOutlined as AutoStoriesOutlinedIcon, 
  MoreHorizOutlined as MoreHorizOutlinedIcon
} from '@mui/icons-material';

const categoryIcons = {
  "Clothing & Shoes": <CheckroomOutlinedIcon />,
  "Accessories": < BusinessCenterOutlinedIcon />,
  "Skincare": <ColorizeOutlinedIcon />,
  "Beauty": <StarBorderOutlinedIcon />,
  "Wellness": < SpaOutlinedIcon />,
  "Electronics": <SmartphoneOutlinedIcon />,
  "Home Decor": <ChairOutlinedIcon />,
  "Kitchen": <BlenderOutlinedIcon/>,
  "Books": <AutoStoriesOutlinedIcon />,
  "Other": <MoreHorizOutlinedIcon />,
};

export default function CategoryList(props) {
  
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // fetch data from an API endpoint and update the categories state with the response data
  useEffect(() => {
    axios.get("http://localhost:8080/api/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //update the category list in real-time
    const handleAdd = (newCategory) => {
      setCategories([...categories, newCategory]);
  };

  // map the categories array to a new array which contains a ListItemButton component and a CategoryListItem component for each category
  const allCategories = categories.map((category) => (
    <ListItemButton  key={category.id}>
      <CategoryListItem
        name={category.name}
        icon={categoryIcons[category.name]}
        categoryId={category.id}
        setCategoryId={props.onChange}
        setSelectedCategoryId={setSelectedCategoryId}
        selectedCategoryId={selectedCategoryId}
      />
    </ListItemButton>
  ));

  return (
    <>
      <List>
        {allCategories}
      </List>
      <div className="flex justify-center">
        <IconButton
          onClick = {() => setShowForm(!showForm)}
          size="small"
          aria-label="add"
        >
          <Add sx={{ fontSize: "2rem" }} />
        </IconButton>
      </div>
      {showForm && (
      <Box>
        <div className="flex flex-row">
        <TextField
          id="outlined-helperText"
          label="enter category name"
        />
        <Button 
          style={{ width: '4rem', marginRight: '1rem', marginLeft: '1rem', marginTop: '1rem' }}
          variant="contained"
          color="success"
        >
          Add
        </Button>
        </div>
      </Box>
      )}
    </>
  );
};
