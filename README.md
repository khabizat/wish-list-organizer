# Wish List Organizer

## Purpose
The purpose of this wish list SPA is to provide users with a simple and organized way to keep track of all their desired items in one place. Users can add items to their wish list by providing a description, price, and link. The SPA allows users to categorize items and keep their wish list organized.

## Target Audience
The target audience for this SPA is anyone who likes to keep track of items they wish to buy, whether it's for personal use or for sharing with friends and family. This application can be especially useful for people who frequently shop online and want to keep track of items they are interested in purchasing.

## Key features
Key features of this wish list SPA include the ability to add, edit, and remove items from the wish-list, categorize items, and share the wish-list with others. Future plans for the SPA may include incorporating a downtime API that tracks prices of the items and notifies users when the price drops, which will help users save money and get the best deals on their desired items.


## Tech Stack

```sh
Front-End: React, JavaScript, Axios, JSX, HTML, CSS, Material UI
```

```sh
Back-End: Node.js, Express.js
```

```sh
Database: PostgreSQL
```


## Setup

Install dependencies with `npm install`.


## Running API Server
  
   ### Create database using host enviroment i.e Vagrant
   1. Use the psql -U command to login to the PostgreSQL server. This command must be run in a vagrant terminal.
   2. Create a database with the command CREATE DATABASE.
   3. Copy the .env.example file to .env.development and fill in the necessary PostgreSQL configuration. The node-postgres library uses these environment    variables by default.

   ### Seed the database while logged in to psql
   ```sh
    \i db/seeds/seeds.sql
  ```
   
  ### Run the API server
  ```sh
  npm start
  ```

## Running Webpack Development Server

```sh
npm start
```

## API response examples

### Categories

```sh
GET /api/categories
```

```json
[
  {
    "id": 1,
    "name": "Clothing & Shoes"
  },
  {
    "id": 2,
    "name": "Accessories"
  }
]
```

### Items

```sh
GET /api/items
```

```json
[
  {
    "id": 1,
    "name": "Birdies mules",
    "price": "$140.00",
    "url": "https://birdies.com/products/womens-slides-phoebe-woven-tassel-orange-pink?variant=39842925543504",
    "category_id": 1
  },
  {
    "id": 2,
    "name": "Umbrella",
    "price": "$110.00",
    "url": "https://www.longchamp.com/ca/en/products/retractable-umbrella-L1593PES300.html",
    "category_id": 2
  }
]
```
