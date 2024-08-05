import React, { useState } from "react";
import "../App.css";
import select from "../assets/svg/select.svg";
import img8 from "../assets/image/img8.png";
import img9 from "../assets/image/img9.png";
import img10 from "../assets/image/img10.png";
import img11 from "../assets/image/img11.png";

const Tasks = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [addedData, setAddedData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isPriorityDropdownOpen, setIsPriorityDropdownOpen] = useState(false);
  const [isFloorDropdownOpen, setIsFloorDropdownOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [birthday, setBirthday] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", birthday);
  };

  const togglePriorityDropdown = () => {
    setIsPriorityDropdownOpen(!isPriorityDropdownOpen);
  };

  const handleDateChange = (date) => {
    setStartDate(date);
    setShowDatePicker(false);
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
    console.log("krina");
  };

  const toggleFloorDropdown = () => {
    setIsFloorDropdownOpen(!isFloorDropdownOpen);
  };

  const toggleSettingsDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [data, setData] = useState([
    {
      taskaction: "Bath",
      patientName: "John Doe",
      date: "1 may 2020",
      priority: "High",
    },
    {
      taskaction: "Washroom",
      patientName: "Jane Smith",
      date: "2 may 2020",
      priority: "Medium",
    },
    {
      taskaction: "Bath",
      patientName: "John Doe",
      date: "3 may 2020",
      priority: "High",
    },
    {
      taskaction: "Washroom",
      patientName: "Jane Smith",
      date: "4 may 2020",
      priority: "Medium",
    },
    {
      taskaction: "Bath",
      patientName: "John Doe",
      date: "5 may 2020",
      priority: "High",
    },
    {
      taskaction: "Washroom",
      patientName: "Jane Smith",
      date: "6 may 2020",
      priority: "Medium",
    },
    {
      taskaction: "Bath",
      patientName: "John Doe",
      date: "7 may 2020",
      priority: "High",
    },
  ]);

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const handleDelete = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };
  const handleCompleteTask = (index) => {
    alert("Task is completed");
  };

  const sortedData = [...data];
  if (sortConfig.key) {
    sortedData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  }

  const headers = [
    { label: "Task/Action", key: "taskaction" },
    { label: "Patient Name", key: "patientName" },
    { label: "Date/Time", key: "date" },
    { label: "Priority", key: "priority" },
    { label: "Actions", key: "actions" },
  ];
  const getCellStyle = (priority) => {
    if (priority === "High") {
      return {
        borderRadius: "15.5px",
        color: "red",
      };
    } else if (priority === "Medium") {
      return {
        borderRadius: "5px",
        color: "orange",
      };
    } else {
      return {};
    }
  };

  return (
    <>
      <div className="table-main-div">
        <div className="table-header">
          <div className="available-task">
            <h2>Available-Tasks</h2>
          </div>
          <div className="button-main-div">
            <input
              type="date"
              id="DatePicker"
              min="2015-01-01"
              max="2025-12-31"
            />

            <div
              className="button-div"
              style={{ width: "100px", position: "relative" }}
              onClick={togglePriorityDropdown}
            >
              <p onClick={togglePriorityDropdown}>priority</p>

              <img
                src={select}
                alt="select"
                className={isPriorityDropdownOpen ? "with-margin" : ""}
              />
              {isPriorityDropdownOpen && (
                <div
                  className="dropdown-content"
                  style={{ position: "absolute", top: "100%" }}
                >
                  <p>High</p>
                  <p>Medium</p>
                </div>
              )}
            </div>

            <div
              className="button-div"
              style={{
                width: "100px",
                position: "relative",
                marginTop: "0px",
              }}
              onClick={toggleFloorDropdown}
            >
              <p>Floor 10</p>
              <img src={select} alt="select" />
              {isFloorDropdownOpen && (
                <div
                  className="dropdown-content"
                  style={{ position: "absolute", top: "100%" }}
                >
                  <p>Floor 1</p>
                  <p>Floor 2</p>
                </div>
              )}
            </div>
            <div className="button">
              <p>Search</p>
            </div>
          </div>
        </div>
        <div className="table-body-container">
          <table
            style={{
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr>
                {headers.map((header) => (
                  <th key={header.key} onClick={() => handleSort(header.key)}>
                    {header.label}

                    {sortConfig.key === header.key && (
                      <span>
                        {sortConfig.direction === "ascending" ? " 🔼" : " 🔽"}
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sortedData.map((row, index) => (
                <tr key={index}>
                  {headers.map((header) => (
                    <td
                      key={`${header.key}-${index}`}
                      style={getCellStyle(row[header.key])}
                    >
                      {header.key === "taskaction" && (
                        <>
                          {(row[header.key] === "Bath" ||
                            row[header.key] === "Washroom") && (
                            <div className="bath-element">
                              <img
                                src={row[header.key] === "Bath" ? img8 : img9}
                              />
                              {row[header.key]}
                            </div>
                          )}
                          {(row[header.key] === "Bath" ||
                            row[header.key] === "Washroom") && (
                            <div className="time">2m ago</div>
                          )}
                        </>
                      )}
                      {header.key === "patientName" && (
                        <>
                          {row[header.key]}
                          <div className="Bed-div">Bed No. 3 | Ward No. 2</div>
                        </>
                      )}
                      {header.key === "date" && (
                        <>
                          {row[header.key]}
                          <div className="Date-Time">8:30 am</div>
                        </>
                      )}
                      {header.key === "actions" && (
                        <>
                          <img
                            src={img10}
                            alt="Complete Task"
                            onClick={() => handleCompleteTask(index)}
                          />
                          <img
                            src={img11}
                            style={{
                              marginBottom: "20px",
                              padding: "17px",
                              cursor: "pointer",
                            }}
                            onClick={() => handleDelete(index)}
                            alt="Delete"
                          />
                        </>
                      )}
                      {header.key !== "taskaction" &&
                        header.key !== "patientName" &&
                        header.key !== "date" &&
                        row[header.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Tasks;
