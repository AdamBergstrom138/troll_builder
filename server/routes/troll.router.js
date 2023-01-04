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

// todoRouter.get('/', (req, res) => {
//     console.log('in get');
//     let sqlQuery = `
//       SELECT * FROM "todo" 
//         ORDER BY "id";
//     `;
//     pool.query(sqlQuery)
//       .then((dbRes) => {
//         res.send(dbRes.rows);
//       })
//       .catch((dbErr) => {
//         console.log('error getting books', dbErr);
//         res.sendStatus(500);
//       });
//   });
// POST

// PUT

// DELETE


// *****
module.exports = trollRouter;