const router = require("express").Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    const command = "SELECT * FROM items";
    db.query(command).then((data) => {
      res.json(data.rows);
    });
  });

  return router;
};