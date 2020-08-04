// ----------------------------------------------------------------------
// BLOCKS ROUTER
// for interacting with the `blocks` table data and relational references
// ----------------------------------------------------------------------
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// BASE MODE - make a route to get all saved color blocks
router.get('/', (req, res) => {
    const queryString = `SELECT "blocks".id, "colors".label, "colors".hex_code
    FROM "blocks"
    JOIN "colors" ON "blocks".color_id = "colors".id;`;
    pool.query(queryString)
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            res.sendStatus(500);
        })
});

// BASE MODE - make a route to save new color blocks item
router.post('/', (req, res) => {
    const newBlockColor = req.body;
    const queryString = `INSERT INTO "blocks" ("color_id")
    VALUES ('${newBlockColor.id}');`;
    pool.query(queryString)
        .then((response) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            res.sendStatus(500);
        })
});
// BASE MODE - make a route to delete a specific color block
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const queryString = `DELETE FROM "blocks" WHERE id=$1;`;
    pool.query(queryString, [id])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((err) => {
            res.sendStatus(500);
        })
});
module.exports = router;
