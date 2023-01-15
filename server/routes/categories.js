const router = require("express").Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(
      `SELECT
      categories.id as id,
      categories.name as name
      FROM categories`
      ).then((response) => {
        res.json(response.rows);
    });
  });


  router.get("/:categoryId", (req, res) => {
    const { categoryId } = req.params;
    db.query(`
      SELECT
      items.id as item,
      items.url as url,
      items.price as price,
      items.category_id as category_id,
      items.name as name
      FROM items 
      JOIN categories 
      ON items.category_id = categories.id
      WHERE categories.id = $1`, [categoryId])
      .then((response) => {
        return res.json(response.rows);
      })
      .catch((err) => {
        console.log("query ERROR");
        return res.json(err);
      });
  });

  return router;
};