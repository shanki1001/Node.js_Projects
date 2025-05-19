const notesList = document.getElementById("notesList");
const noteForm = document.getElementById("noteForm");
const noteInput = document.getElementById("noteInput");

function loadNotes() {
   fetch("/notes")
      .then((res) => res.json())
      .then((notes) => {
         notesList.innerHTML = "";
         notes.forEach((note) => {
            const li = document.createElement("li");
            li.innerHTML = `
            ${note.text}
            <button onclick="deleteNote(${note.id})">Delete</button>
            `;
            notesList.appendChild(li);
         });
      });
}

function deleteNote(id) {
   fetch(`/notes/${id}`, { method: "DELETE" }).then(() => loadNotes());
}

noteForm.addEventListener("submit", (e) => {
   e.preventDefault();
   const text = noteInput.value.trim();
   if (!text) return;

   fetch("/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
   }).then(() => {
      noteInput.value = "";
      loadNotes();
   });
});
loadNotes();
