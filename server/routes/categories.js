const router = require("express").Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM categories`
      ).then((response) => {
      return res.json(response.rows);
    });
  });
  return router;
};