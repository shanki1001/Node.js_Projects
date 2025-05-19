const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
// In-memory notes storage
let notes = [];
let id = 1;

// GET all notes
app.get("/notes", (req, res) => {
   res.json(notes);
});

// Post a new note
app.post("/notes", (req, res) => {
   const { text } = req.body;
   if (!text) {
      return res.status(400).json({ error: "Text is requried" });
   }
   const newNote = { id: id++, text };
   notes.push(newNote);
   res.status(201).json(newNote);
});

app.delete("/notes/:id", (req, res) => {
   const noteId = parseInt(req.params.id);
   notes = notes.filter((note) => note.id !== noteId);
   res.status(204).send();
});

// Start server
app.listen(port, () => {
   console.log(`Notes API listening at http://localhost:${port}`);
});
