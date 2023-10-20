DROP TABLE IF EXISTS questions CASCADE;
CREATE TABLE questions (
  id SERIAL PRIMARY KEY NOT NULL,
  quiz_id INT REFERENCES quizzes(id) ON DELETE CASCADE NOT NULL,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  option_1 TEXT NOT NULL,
  option_2 TEXT,
  option_3 TEXT
);