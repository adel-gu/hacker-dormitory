import React, { useState } from 'react';
import { STUDENTS } from '../student';

// `joiningDate` && `validityDate` format "yyyy-mm-dd"

function checkValidity(joiningDate, validityDate) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [year, month, day] = joiningDate.split('-');
  const [yyyy, mm, dd] = validityDate.split('-');
  const maxValid = new Date(yyyy, mm - 1, dd);
  const selected = new Date(year, month - 1, day);
  return maxValid >= selected && maxValid >= today;
}

function Search({ setStudentNames, setErrorMessage, setErrorObj }) {
  const [studentName, setStudentName] = useState('');
  const [joiningDate, setJoiningDate] = useState('');

  const handelClick = () => {
    const filterStudent = STUDENTS.filter(
      (student) => student.name.toLowerCase() === studentName.toLowerCase(),
    )[0];

    if (
      filterStudent &&
      checkValidity(joiningDate, filterStudent.validityDate)
    ) {
      setStudentNames((prev) => [...prev, filterStudent.name]);
      setErrorObj({
        isError: false,
        message: '',
      });
      clearForm();
    } else {
      updateErrorMessage(filterStudent);
    }
  };

  const clearForm = () => {
    setStudentName('');
    setJoiningDate('');
  };

  const updateErrorMessage = (filterStudent) => {
    if (!filterStudent) {
      setErrorObj({
        isError: true,
        message: `Sorry, ${studentName} is not verified student!`,
      });
    } else if (
      filterStudent &&
      !checkValidity(joiningDate, filterStudent.validityDate)
    ) {
      setErrorObj({
        isError: true,
        message: `Sorry, ${studentName}'s validity has expired`,
      });
    }
  };

  return (
    <div className="my-50 layout-row align-items-end justify-content-end">
      <label htmlFor="studentName">
        Student Name:
        <div>
          <input
            id="studentName"
            data-testid="studentName"
            type="text"
            className="mr-30 mt-10"
            onChange={(e) => setStudentName(e.target.value)}
            value={studentName}
          />
        </div>
      </label>
      <label htmlFor="joiningDate">
        Joining Date:
        <div>
          <input
            id="joiningDate"
            data-testid="joiningDate"
            type="date"
            className="mr-30 mt-10"
            onChange={(e) => setJoiningDate(e.target.value)}
            value={joiningDate}
          />
        </div>
      </label>
      <button
        type="button"
        data-testid="addBtn"
        className="small mb-0"
        onClick={() => handelClick()}
      >
        Add
      </button>
    </div>
  );
}

export default Search;
