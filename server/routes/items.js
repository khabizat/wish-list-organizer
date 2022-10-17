const router = require("express").Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(
      `SELECT items.id as id,
      items.name as name,
      items.price as price,
      items.url as url
      FROM items
      JOIN categories
      ON categories.id = items.category_id`
      ).then((response) => {
      return res.json(response.rows);
    }).catch((err) => {
      console.log(err);
      return res.json(err);
    });
  });

  return router;
};