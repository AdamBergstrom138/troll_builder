# Full-Stack CRUD Starter

##### Tech Stack:

* Client-Side / Front-End:
  * HTML
  * CSS
  * JS
  * jQuery
* Server-Side / Back-End:
  * JS
  * Node
  * Express
  * Body Parser
  * PostgreSQL

##### Usage:

1. Click "Use this template" then "Create a new repository".
  * In the "Owner" dropdown that pops up, be sure to choose *your own* GitHub account.
  * Name the repository whatever you'd like. Only rule is *no swears*. (Pirate slang is fine.)
2. Clone the repo you've just generated.
3. `cd` into the repo.
4. Run `npm install` to install this repo's dependencies.
    * This will create the `node_modules/` folder.
5. In Postico, create and name your database.
6. Update `pool.js` to reflect the name you chose for your database.
7. Modify the `CREATE TABLE` and `INSERT INTO` statements in the `database.sql` file to reflect what you are going to build.
8. In Postico, connect to the database you created, then use the SQL queries you've modified `database.sql` to:
  * Create your table.
  * Populate the table with seed data.
9. Run `npm start` to start the server with `nodemon`.
  * Or, kick it old-school and use `node server/server.js`.
10. Go to `http://localhost:5000`.
11. Build a CRUD app.
