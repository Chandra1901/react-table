import React from "react";
import { Edit } from "./SvgIcons/Edit";
import { Delete } from "./SvgIcons/Delete";

const ReadOnlyRow = (props) => {
  const { contact, handleEditClick, handleDeleteClick } = props;
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <div style={{ display: "flex" }}>
          <div onClick={(e) => handleEditClick(e, contact)}>
            <Edit />
          </div>
          &nbsp;&nbsp;
          <div onClick={(e) => handleDeleteClick(contact.id)}>
            <Delete />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
