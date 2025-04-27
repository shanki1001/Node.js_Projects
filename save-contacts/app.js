const yargs = require("yargs");
const contacts = require("./contacts");

yargs.command({
  command: "addcontact",
  describe: "Add a new Contact",
  builder: {
    name: {
      describe: "Contact name",
      demandOption: true,
      type: "string",
    },
    phone: {
      describe: "Contact phone number",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contacts.addContact(argv.name, argv.phone);
  },
});

// List all contacts
yargs.command({
  command: "listcontacts",
  describe: "List all contacts",
  handler() {
    contacts.listContacts();
  },
});

yargs.parse();
