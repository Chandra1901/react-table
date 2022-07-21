import React from "react";

const EditableRow = (props) => {
  const { editFormData, handleEditFormChange, handleCancelClick } = props;

  const EditContactData = [
    {
      id: "1",
      type: "text",
      name: "fullName",
      required: "required",
      placeholder: "Enter a name...",
      eventHandler: handleEditFormChange,
      value: `${editFormData.fullName}`,
    },
    {
      id: "2",
      type: "text",
      name: "address",
      required: "required",
      placeholder: "Enter a address...",
      eventHandler: handleEditFormChange,
      value: `${editFormData.address}`,
    },
    {
      type: "text",
      name: "phoneNumber",
      required: "required",
      placeholder: "Enter a phone number...",
      eventHandler: handleEditFormChange,
      value: `${editFormData.phoneNumber}`,
    },
    {
      type: "text",
      name: "email",
      required: "required",
      placeholder: "Enter a Email...",
      eventHandler: handleEditFormChange,
      value: `${editFormData.email}`,
    },
  ];
  return (
    <tr>
      {EditContactData.map((editContact) => {
        return (
          <td>
            <input
              type={editContact.type}
              required={editContact.required}
              placeholder={editContact.placeholder}
              name={editContact.name}
              onChange={editContact.eventHandler}
              value={editContact.value}
            />
          </td>
        );
      })}
      <div className="editBtn">
        <button className="Btn" type="submit">
          Save
        </button>
        <button
          style={{ marginLeft: "20px" }}
          className="Btn"
          type="submit"
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </div>
    </tr>
  );
};

export default EditableRow;
