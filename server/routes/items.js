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
      ORDER BY items.id ASC;`
      ).then((response) => {
        res.json(response.rows);
      }).catch((err) => {
        console.log(err);
        return res.json(err);
      });
  });

  router.post("/", (req, res) => {
    const { name, price, url, categoryId  } = req.body;
    db.query(
      `INSERT INTO items (name, price, url, category_id)
      VALUES ($1, $2, $3, $4)
      RETURNING *`,
      [name, price, url, categoryId]
    )
      .then((response) => {
        res.json(response.rows[0]);
      })
      .catch((err) => {
        console.log(err);
        return res.json(err);
      });
  });

  return router;
};