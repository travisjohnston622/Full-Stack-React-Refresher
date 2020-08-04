// ----------------------------------------------------------------------
// COLORS ROUTER
// for interacting with the `colors` table data and relational references
// ----------------------------------------------------------------------
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// BASE MODE - make a route to get all of the available colors
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "colors"
                        ORDER BY "colors".id ASC;`;

    pool.query(queryText)
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            console.log('Error with Colors GET:', err);
            res.sendStatus(500);
        });
});

// BASE MODE - make a route to save a new color option
router.post('/', (req, res) => {
    const newColor = req.body;
    const queryString = `INSERT INTO "colors" ("label", "hex_code")
    VALUES ('${newColor.label}', '${newColor.hex_code}');`;
    pool.query(queryString)
        .then((response) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            res.sendStatus(500);
        })
});
// BASE MODE - make a route to update the label and/or hex_code associated with a specific color

// BASE MODE - make a route to delete a specific color option

module.exports = router;
