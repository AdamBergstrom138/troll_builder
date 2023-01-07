CREATE TABLE "troll" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(250) NOT NULL,
  "notes" VARCHAR(250),
  "head" BOOLEAN,
  "body" BOOLEAN,
  "render" BOOLEAN
);

INSERT INTO "troll"
  ("name", "notes", "head", "body", "render")
  VALUES
  ('Gizmo', 'hates water', true, true, false),
  ('Balthazar', 'likes Romeo', true, true, false),
  ('Icarus', 'likes to fly', true, true, false),
  ('Meatwad', 'member of an elite squad', true, false, false);
  
