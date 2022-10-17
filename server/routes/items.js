const router = require("express").Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(
      `SELECT 
      items.id as id,
      items.name as name,
      items.price as price,
      items.url as url,
      categories.name as category_name
      FROM items
      JOIN categories
      ON categories.id = items.category_id
      ORDER BY items.price DESC;`
      ).then((response) => {
        res.json(response.rows);
      }).catch((err) => {
        console.log(err);
        return res.json(err);
      });
  });

  return router;
};