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
  return router;
};