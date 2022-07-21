import { useState, Fragment } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addformData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    // we will update the object with the new value which the user has typed.
    const newFormData = { ...addformData };

    // here newFormData variable  is an object so we can use the bracket syntax to get a given key
    newFormData[fieldName] = fieldValue;
    console.log("newFormFData", newFormData[fieldName]);

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    console.log("newFormFData", newFormData[fieldName]);

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addformData.fullName,
      address: addformData.address,
      phoneNumber: addformData.phoneNumber,
      email: addformData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const editContact = {
      id: nanoid(),
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts, editContact];
    setContacts(newContacts);

    // index of the row here:  editcontactId is the row we are editing
    // we want to get the index of that  row that we are editing
    const index = contacts.findIndex((contact) => contact.id === editContactId);

    console.log("Index", index);

    newContacts[index] = editContact;
    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (e, contact) => {
    e.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  const contactData = [
    {
      id: "1",
      type: "text",
      name: "fullName",
      required: "required",
      placeholder: "Enter a name...",
      eventHandler: handleAddFormChange,
    },
    {
      id: "2",
      type: "text",
      name: "address",
      required: "required",
      placeholder: "Enter a address...",
      eventHandler: handleAddFormChange,
    },
    {
      type: "text",
      name: "phoneNumber",
      required: "required",
      placeholder: "Enter a phone number...",
      eventHandler: handleAddFormChange,
    },
    {
      type: "text",
      name: "email",
      required: "required",
      placeholder: "Enter a Email...",
      eventHandler: handleAddFormChange,
    },
  ];

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => {
              return (
                <Fragment>
                  {editContactId === contact.id ? (
                    <EditableRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRow
                      contact={contact}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </form>
      <div className="InputContainer">
        <h2>Add a Contact</h2>
        <form onSubmit={handleAddFormSubmit}>
          {contactData.map((ele) => {
            return (
              <input
                autoComplete="off"
                type={ele.type}
                name={ele.name}
                placeholder={ele.placeholder}
                required={ele.required}
                onChange={ele.eventHandler}
              />
            );
          })}
          &nbsp;
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default App;
