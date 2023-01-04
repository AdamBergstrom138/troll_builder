-- Table Schema Template:
CREATE TABLE "some_thing" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(500) NOT NULL,
  "is_nifty" BOOLEAN
);

-- Seed Data Template:
INSERT INTO "some_thing"
  ("name", "is_nifty")
  VALUES
  ('Gizmo', true),
  ('Gadget', true),
  ('Bits', true),
  ('Bobs', false);
