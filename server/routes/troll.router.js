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


// todoRouter.post('/', (req, res) => {
//     console.log('POST /todo');
//     console.log(req.body);
//     let sqlQuery = `
//     INSERT INTO "todo"
//     ("task", "edit", "complete")
//     VALUES
//     ($1, $2, $3);
//     `
//     let sqlValues = [req.body.task, req.body.edit, req.body.complete];
//     pool.query(sqlQuery, sqlValues)
//         .then((dbRes) => {
//             res.sendStatus(201);
//         }).catch((dbErr) => {
//             console.log('Error in POST /todo', dbErr);
//         })
// })

// PUT

// DELETE


// *****
module.exports = trollRouter;