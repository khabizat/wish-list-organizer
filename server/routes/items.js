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

  router.get("/:itemId", (req, res) => {
    const { itemId } = req.params;
    db.query(
      `SELECT 
      items.id as item_id,
      items.name as name,
      items.price as price,
      items.url as url,
      items.category_id as category_id
      FROM items
      JOIN categories
      ON categories.id = items.category_id
      WHERE items.id = $1
      ORDER BY categories.id DESC;`,
      [itemId]
    )
      .then((response) => {
        return res.json(response.rows);
      })
      .catch((error) => {
        console.log(error);
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

  router.delete("/:itemId", (req, res) => {
    const  { itemId } = req.params;
    db.query(
      `DELETE FROM items
      WHERE id = $1
      RETURNING *;
      `,
      [itemId]
    )
      .then((response) => {
        if (response.rows.length === 0) {
          return res.status(404).json({ error: "Item not found" });
        }
        res.json(response.rows[0]);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
      });
});

  return router;
};