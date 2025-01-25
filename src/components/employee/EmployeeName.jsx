import React, { useState } from "react";
import "./Employee.css";
import Employee from "./Employee";
import AddEmployee from "./AddEmployee";
import employeeData from '../../data/employees.json';

const title = "Editable Table";

const EmployeeName = () => {
  const [employeesList, setEmployeesList] = useState(employeeData);

  const addEmployee = (name, position, salary) => {
    const newEmployee = {
      id: employeesList.length,
      name,
      position,
      salary: parseInt(salary, 10),
    };
    setEmployeesList([...employeesList, newEmployee]);
  };

  const updateEmployee = (id, updatedEmployee) => {
    setEmployeesList((prevList) =>
      prevList.map((emp) => (emp.id === id ? updatedEmployee : emp))
    );
  };

  const deleteEmployee = (id) => {
    setEmployeesList((prevList) => prevList.filter((emp) => emp.id !== id));
  };

  return (
    <div>
      <div header={title}></div>
      <div className="card">
        <table data-testid="table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Position</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employeesList.map((employee, idx) => (
              <tr key={employee.id} data-testid={`row-${idx}`}>
                <Employee
                  employee={employee}
                  idx={idx}
                  updateEmployee={updateEmployee}
                  deleteEmployee={deleteEmployee}
                />
              </tr>
            ))}
            <tr>
              <AddEmployee addEmployee={addEmployee} />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeName;
