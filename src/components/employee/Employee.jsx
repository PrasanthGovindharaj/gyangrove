import React, { useState } from "react";

const Employee = ({ employee, idx, updateEmployee, deleteEmployee }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [editedEmployee, setEditedEmployee] = useState(employee);

  const handleSave = () => {
    updateEmployee(employee.id, editedEmployee);
    setIsEditable(false);
  };

  return (
    <>
      <td>{idx + 1}</td> 
      <td>
        {isEditable ? (
          <input
            type="text"
            value={editedEmployee.name}
            data-testid={`employee-name-input-${idx}`}
            onChange={(e) =>
              setEditedEmployee({ ...editedEmployee, name: e.target.value })
            }
          />
        ) : (
          <div onClick={() => setIsEditable(true)}>{employee.name}</div>
        )}
      </td>
      <td>
        {isEditable ? (
          <input
            type="text"
            value={editedEmployee.position}
            data-testid={`employee-position-input-${idx}`}
            onChange={(e) =>
              setEditedEmployee({ ...editedEmployee, position: e.target.value })
            }
          />
        ) : (
          <div onClick={() => setIsEditable(true)}>{employee.position}</div>
        )}
      </td>
      <td>
        {isEditable ? (
          <input
            type="number"
            value={editedEmployee.salary}
            data-testid={`employee-salary-input-${idx}`}
            onChange={(e) =>
              setEditedEmployee({ ...editedEmployee, salary: e.target.value })
            }
          />
        ) : (
          <div onClick={() => setIsEditable(true)}>{employee.salary}</div>
        )}
      </td>
      <td className="actions">
        {isEditable ? (
          <button
            className="button-save"
            data-testid={`employee-save-button-${idx}`}
            onClick={handleSave}
          >
            Save
          </button>
        ) : (
          <button
            data-testid={`employee-edit-button-${idx}`}
            onClick={() => setIsEditable(true)}
          >
            Edit
          </button>
        )}
        <button
          className="button-delete"
          data-testid={`employee-delete-button-${idx}`}
          onClick={() => deleteEmployee(employee.id)}
        >
          Delete
        </button>
      </td>
    </>
  );
};

export default Employee;
