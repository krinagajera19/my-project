import React, { useState } from "react";
import img18 from "../assets/image/img18.png";
import img19 from "../assets/image/img19.png";
import img20 from "../assets/image/img20.png";
import img21 from "../assets/image/img21.png";
import img22 from "../assets/image/img22.png";
import img23 from "../assets/image/img23.png";
import img26 from "../assets/image/img26.png";

const Activity = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [previousDate, setPreviousDate] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const toggleSettingsDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleViewAllClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const getAccessByName = (index) => {
    return names[index % names.length];
  };

  const [data, setData] = useState([
    {
      nurseName: "Ralph Edwards",
      patientName: "Annette Black",
      taskType: "Bath",
      requestTime: "07/19/2019 4:57 AM PT",
      attendedTime: "07/19/2019 4:57 AM PT",
      duration: "14:28",
      Imgsrc: img18,
    },
    {
      nurseName: "Jacob Jones",
      patientName: "Brooklyn Simmons",
      taskType: "Washroom",
      requestTime: "07/19/2019 4:57 AM PT",
      attendedTime: "07/19/2019 4:57 AM PT",
      duration: "09:29",
      Imgsrc: img19,
    },
    {
      nurseName: "Annette Black",
      patientName: "Eleanor Pena",
      taskType: "Bath",
      requestTime: "07/19/2019 4:57 AM PT",
      attendedTime: "07/19/2019 4:57 AM PT",
      duration: "08:50",
      Imgsrc: img20,
    },
    {
      nurseName: "Bessie Cooper",
      patientName: "Cody Fisher",
      taskType: "Emergency",
      requestTime: "07/19/2019 4:57 AM PT",
      attendedTime: "07/19/2019 4:57 AM PT",
      duration: "14:14",
      Imgsrc: img21,
    },
    {
      nurseName: "Cody Fisher",
      patientName: "Jane Cooper",
      taskType: "Bath",
      requestTime: "07/19/2019 4:57 AM PT",
      attendedTime: "07/19/2019 4:57 AM PT",
      duration: "08:24",
      Imgsrc: img22,
    },
    {
      nurseName: "Jenny Wilson",
      patientName: "Jacob Jones",
      taskType: "Clothing",
      requestTime: "07/19/2019 4:57 AM PT",
      attendedTime: "07/19/2019 4:57 AM PT",
      duration: "16:30",
      Imgsrc: img26,
    },
    {
      nurseName: "Dianne Russell",
      patientName: "Kristin Watson",
      taskType: "Emergency",
      requestTime: "07/19/2019 4:57 AM PT",
      attendedTime: "07/19/2019 4:57 AM PT",
      duration: "13:27",
      Imgsrc: img23,
    },
  ]);

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
    amPmToggle: {},
    dateFormatToggle: false,
  });

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }

    const amPmToggle = { ...sortConfig.amPmToggle };
    if (["requestTime", "attendedTime"].includes(key)) {
      amPmToggle[key] = amPmToggle[key] === "AM" ? "PM" : "AM";
    }

    let dateFormatToggle = sortConfig.dateFormatToggle;
    if (key === "requestTime") {
      dateFormatToggle = !dateFormatToggle;
    }

    setSortConfig({ key, direction, amPmToggle, dateFormatToggle });
  };

  const getFormattedTime = (time, amPm) => {
    const date = new Date(time.replace(" PT", ""));
    const formattedDate = date.toLocaleDateString(undefined, {
      month: "numeric",
      day: "numeric",
      year: "numeric",
    });
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const amPmFormat = amPm || "AM";

    return `${formattedDate} ${hours % 12 || 12}:${minutes
      .toString()
      .padStart(2, "0")} ${amPmFormat} PT`;
  };
  const getFormattedDate = (date, dateFormatToggle) => {
    const options = {
      month: "numeric",
      day: "numeric",
      year: "numeric",
    };

    return dateFormatToggle
      ? new Date(date.replace(" PT", "")).toLocaleDateString(undefined, options)
      : "";
  };

  const sortedData = [...data].sort((a, b) => {
    const valueA = a[sortConfig.key];
    const valueB = b[sortConfig.key];

    if (["requestTime", "attendedTime"].includes(sortConfig.key)) {
      const timestampA = new Date(valueA.replace(" PT", "")).getTime();
      const timestampB = new Date(valueB.replace(" PT", "")).getTime();

      return sortConfig.direction === "ascending"
        ? timestampA - timestampB
        : timestampB - timestampA;
    }

    if (typeof valueA === "string" && typeof valueB === "string") {
      return sortConfig.direction === "ascending"
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    }

    return 0;
  });

  return (
    <>
      <div className="table-main-div">
        <div className="table-header">
          <div className="available-task">
            <h2>Activity Report</h2>
          </div>
          <div className="button-main-div">
            <input
              type="date"
              id="DatePicker"
              min="2015-01-01"
              max="2025-12-31"
              style={{ marginRight: "10px" }}
            />

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
                <th onClick={() => handleSort("nurseName")}>
                  Nurse Name
                  {sortConfig.key === "nurseName" && (
                    <span>
                      {sortConfig.direction === "ascending" ? " 🔼" : " 🔽"}
                    </span>
                  )}
                </th>
                <th onClick={() => handleSort("patientName")}>
                  Patient Name
                  {sortConfig.key === "patientName" && (
                    <span>
                      {sortConfig.direction === "ascending" ? " 🔼" : " 🔽"}
                    </span>
                  )}
                </th>
                <th onClick={() => handleSort("taskType")}>
                  Task Type
                  {sortConfig.key === "taskType" && (
                    <span>
                      {sortConfig.direction === "ascending" ? " 🔼" : " 🔽"}
                    </span>
                  )}
                </th>
                <th onClick={() => handleSort("requestTime")}>
                  Request Time
                  {sortConfig.key === "requestTime" && (
                    <span>
                      {sortConfig.direction === "ascending" ? " 🔼" : " 🔽"}{" "}
                      {sortConfig.amPmToggle["requestTime"]}
                    </span>
                  )}
                </th>
                <th onClick={() => handleSort("attendedTime")}>
                  Attended Time
                  {sortConfig.key === "attendedTime" && (
                    <span>
                      {sortConfig.direction === "ascending" ? " 🔼" : " 🔽"}{" "}
                      {sortConfig.amPmToggle["attendedTime"]}
                    </span>
                  )}
                </th>
                <th onClick={() => handleSort("duration")}>
                  Duration
                  {sortConfig.key === "duration" && (
                    <span>
                      {sortConfig.direction === "ascending" ? " 🔼" : " 🔽"}
                    </span>
                  )}
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((row, index) => (
                <tr key={index}>
                  <td>
                    <img src={row.Imgsrc} />
                    <span>{row.nurseName}</span>
                  </td>
                  <td>{row.patientName}</td>
                  <td>{row.taskType}</td>
                  <td>
                    {getFormattedDate(
                      row.requestTime,
                      sortConfig.dateFormatToggle
                    )}{" "}
                    {getFormattedTime(
                      row.requestTime,
                      sortConfig.amPmToggle["requestTime"]
                    )}
                  </td>
                  <td>
                    {getFormattedDate(
                      row.attendedTime,
                      sortConfig.dateFormatToggle
                    )}{" "}
                    {getFormattedTime(
                      row.attendedTime,
                      sortConfig.amPmToggle["attendedTime"]
                    )}
                  </td>
                  <td>{row.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Activity;
