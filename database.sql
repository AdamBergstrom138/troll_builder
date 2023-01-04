-- Table Schema Template:
CREATE TABLE "troll" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(250) NOT NULL,
  "notes" VARCHAR(250),
  "head" BOOLEAN,
  "body" BOOLEAN
);

-- Seed Data Template:
INSERT INTO "troll"
  ("name", "notes", "head", "body")
  VALUES
  ('Gizmo', 'hates water', true, true),
  ('Balthazar', 'likes Romeo', true, true),
  ('Icarus', 'likes to fly', true, true),
  ('Meatwad', 'member of an elite squad', true, false);
