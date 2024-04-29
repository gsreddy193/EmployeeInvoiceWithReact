import React, { useState } from 'react';
import './App.css';

const Invoice = () => {
  const [employees, setEmployees] = useState([
    { id: '101', name: 'John', salary: 15000 },
    
  ]);

  const calculateTA = (salary) => {
    return salary * 0.1; 
  };

  const calculateDA = (salary) => {
    return salary * 0.05; 
  };
  const calculatePF = (salary) => {
    return salary * 0.08; 
  };

  const calculateGrossSalary = (salary, ta, da) => {
    return salary + ta + da;
  };

  const calculateNetSalary = (grossSalary, pf) => {
    return grossSalary - pf;
  };


  return (
    <div className="App">
      <h1>Employee Invoice App</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>&nbsp;
            <th>Name</th>&nbsp;
            <th>Salary</th>&nbsp;
            <th>TA</th>&nbsp;
            <th>DA</th>&nbsp;
            <th>PF</th>&nbsp;
            <th>gross_salary</th>&nbsp;
            <th>net_salary</th>&nbsp;
          </tr>
        </thead>
        <tbody>
        {employees.map((employee) => {
            const ta = calculateTA(employee.salary);
            const da = calculateDA(employee.salary);
            const pf = calculatePF(employee.salary);
            const grossSalary = calculateGrossSalary(employee.salary, ta, da);
            const netSalary = calculateNetSalary(grossSalary, pf);

            return (
                <tr key={employee.id}>
                  <td>{employee.id}</td>&nbsp;
                  <td>{employee.name}</td>&nbsp;
                  <td>{employee.salary}</td>&nbsp;
                  <td>{ta}</td>&nbsp;
                  <td>{da}</td>&nbsp;
                  <td>{pf}</td>&nbsp;
                  <td>{grossSalary}</td>&nbsp;
                  <td>{netSalary}</td>&nbsp;
                </tr>
              );
        })}
        </tbody>
      </table>
    </div>
  );
};

export default Invoice;
