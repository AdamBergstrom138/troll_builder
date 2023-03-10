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
    ("name", "notes", "head", "body", "render")
    VALUES
    ($1, $2, $3, $4, $5);
    `
    let sqlValues = [req.body.name, req.body.notes, req.body.head, req.body.body, req.body.render];
    pool.query(sqlQuery, sqlValues)
        .then((dbRes) => {
            res.sendStatus(201);
        }).catch((dbErr) => {
            console.log('Error in POST /troll', dbErr);
        });
});
// PUT
trollRouter.put('/body/:id', (req, res) => {
    console.log('req.params:', req.params);
    console.log('req.body:', req.body);
    let idToUpdate = req.params.id;
    let newBody = req.body.body;
    
    let sqlQuery = `
        UPDATE "troll"
        SET "body"=$1
        WHERE "id"=$2
    `
    let sqlValues = [newBody, idToUpdate];

    pool.query(sqlQuery, sqlValues)
        .then((dbRes) => {
            res.sendStatus(200);
        })
        .catch((dbErr) => {
            console.log('Error in PUT', dbErr);
        });
});
trollRouter.put('/head/:id', (req, res) => {
    console.log('req.params:', req.params);
    console.log('req.body:', req.body);
    let idToUpdate = req.params.id;
    let newHead = req.body.head;
    
    let sqlQuery = `
        UPDATE "troll"
        SET "head"=$1
        WHERE "id"=$2
    `
    let sqlValues = [newHead, idToUpdate];

    pool.query(sqlQuery, sqlValues)
        .then((dbRes) => {
            res.sendStatus(200);
        })
        .catch((dbErr) => {
            console.log('Error in PUT', dbErr);
        });
});

trollRouter.put('/render/:id', (req, res) => {
    console.log('req.params:', req.params);
    console.log('req.body:', req.body);
    let idToUpdate = req.params.id;
    let newRender = req.body.render;
    
    let sqlQuery = `
        UPDATE "troll"
        SET "render"=$1
        WHERE "id"=$2
    `
    let sqlValues = [newRender, idToUpdate];

    pool.query(sqlQuery, sqlValues)
        .then((dbRes) => {
            res.sendStatus(200);
        })
        .catch((dbErr) => {
            console.log('Error in render PUT', dbErr);
        });
});

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


// *****
module.exports = trollRouter;