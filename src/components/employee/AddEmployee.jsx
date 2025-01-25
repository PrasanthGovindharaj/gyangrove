import React, { useState } from "react";

const AddEmployee = ({ addEmployee }) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");

  const handleAdd = () => {
    addEmployee(name, position, salary);
    setName("");
    setPosition("");
    setSalary("");
  };

  return (
    <>
      <td></td> 
      <td>
        <input
          type="text"
          value={name}
          data-testid="new-employee-name-input"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={position}
          data-testid="new-employee-position-input"
          placeholder="Enter Position"
          onChange={(e) => setPosition(e.target.value)}
        />
      </td>
      <td>
        <input
          type="number"
          value={salary}
          data-testid="new-employee-salary-input"
          placeholder="Enter Salary"
          onChange={(e) => setSalary(e.target.value)}
        />
      </td>
      <td>
        <button
          data-testid="add-new-employee-button"
          disabled={!name || !position || !salary}
          onClick={handleAdd}
        >
          Add
        </button>
      </td>
    </>
  );
};

export default AddEmployee;
