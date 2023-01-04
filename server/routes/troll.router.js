const express = require('express');
const trollRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool.js'); 
// *****

// GET
trollRouter.get('/', (req, res) => {
    console.log('in get');
    let sqlQuery = `
    SELECT * FROM "troll" 
        ORDER BY "name";
    `;
    pool.query(sqlQuery)
        .then((dbRes) => {
            res.send(dbRes.rows);
        })
        .catch((dbErr) => {
            console.log('error getting trolls', dbErr);
        });
});
// POST
trollRouter.post('/', (req, res) =>{
    console.log('POST /troll');
    console.log(req.body);
    let sqlQuery = `
    INSERT INTO "troll"
    ("name", "notes", "head", "body")
    VALUES
    ($1, $2, $3, $4);
    `
    let sqlValues = [req.body.name, req.body.notes, req.body.head, req.body.body];
    pool.query(sqlQuery, sqlValues)
        .then((dbRes) => {
            res.sendStatus(201);
        }).catch((dbErr) => {
            console.log('Error in POST /troll', dbErr);
        });
});
// PUT

// DELETE
trollRouter.delete('/:id', (req, res) => {
    console.log(req.params);
    let idToDelete = req.params.id;
    let sqlQuery = `
    DELETE FROM "troll"
    WHERE "id"=$1;
    `
    let sqlValues = [idToDelete];
    pool.query(sqlQuery, sqlValues)
        .then((dbRes) => {
            res.sendStatus(200);
        }).catch((dbErr) => {
            console.log('Error in Delete', dbErr);
        });
});

// todoRouter.delete('/:id', (req, res) => {
//     console.log(req.params);
//     let idToDelete = req.params.id;
//     let sqlQuery = `
//     DELETE FROM "todo"
//     WHERE "id"=$1;
//     `
//     let sqlValues = [idToDelete];
//     pool.query(sqlQuery, sqlValues)
//         .then((dbRes) => {
//             res.sendStatus(200);
//         })
//         .catch((dbErr) => {
//             console.log('Error in Delete:', dbErr);
//         })
// });
// *****
module.exports = trollRouter;