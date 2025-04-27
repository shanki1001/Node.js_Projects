const fs = require("fs");

// Add a new contact
const addContact = (name, phone) => {
  const contacts = loadContacts();
  contacts.push({ name, phone });
  saveContacts(contacts);
  console.log("New contact added!");
};

// List all contacts
const listContacts = () => {
  const contacts = loadContacts();
  console.log("Your Contacts:");
  contacts.forEach((contact, index) => {
    console.log(`${index + 1}. ${contact.name} - ${contact.phone}`);
  });
};

const loadContacts = () => {
  try {
    const dataBuffer = fs.readFileSync("contacts.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveContacts = (contacts) => {
  const dataJSON = JSON.stringify(contacts, null, 2);
  fs.writeFileSync("contacts.json", dataJSON);
};

module.exports = {
  addContact,
  listContacts,
};
