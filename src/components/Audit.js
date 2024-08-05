import React, { useState } from "react";
import "../App.css";
import img8 from "../assets/image/img8.png";
import img9 from "../assets/image/img9.png";
import img10 from "../assets/image/img10.png";
import img11 from "../assets/image/img11.png";

const Audit = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSettingsDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const getAccessByName = (index) => {
    const names = [
      "Darrell Steward",
      "Ronald Richards",
      "Brooklyn Simmons",
      "Wade Warren",
      "Jane Cooper",
      "Arlene McCoy",
      "Courtney Henry",
      "Jerome Bell",
      "Kristin Watson",
      "Devon Lane",
      "Cody Fisher",
      "Savannah Nguyen",
      "Marvin McKinney",
      "Floyd Miles",
    ];
    return names[index % names.length];
  };
  const ipAddressData = [
    "245.43.101.154",
    "106.28.168.49",
    "227.165.4.100",
    "134.234.149.30",
    "98.44.74.126",
    "174.130.243.11",
    "178.74.125.61",
    "14.143.86.75",
    "214.68.245.213",
    "59.248.249.101",
    "87.157.199.33",
    "17.44.209.220",
    "69.198.2.243",
    "148.134.209.200",
  ];
  const eventTypeData = [
    "log IN",
    "log out",
    "log In",
    "log In",
    "log out",
    "log In",
    "log In",
    "log In",
    "log out",
    "log In",
    "log In",
    "log In",
    "log out",
    "log In",
  ];
  const userAgentData = [
    "Mozila Firefox",
    "Google Chrome",
    "Mozila Firefox",
    "Mozila Firefox",
    "Google Chrome",
    "Brave Browser",
    "Mozila Firefox",
    "Google Chrome",
    "Mozila Firefox",
    "Brave Browser",
    "Mozila Firefox",
    "Mozila Firefox",
    "Brave Browser",
    "Mozila Firefox",
  ];

  const [data, setData] = useState(
    Array(13)
      .fill({})
      .map((_, index) => ({
        accessTime: `202${index + 0}-05-0${index + 1} 06:${(5 + index)
          .toString()
          .padStart(2, "0")}:46`,
        accessBy: getAccessByName(index + 1),
        ipAddress: ipAddressData[index],
        eventType: eventTypeData[index],
        userAgent: userAgentData[index],
      }))
  );

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

  const sortedData = [...data];
  if (sortConfig.key === "accessBy") {
    sortedData.sort((a, b) => {
      const valueA = a[sortConfig.key].toLowerCase();
      const valueB = b[sortConfig.key].toLowerCase();

      if (valueA < valueB) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (valueA > valueB) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  } else {
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
    { label: "Access Time", key: "accessTime" },
    { label: "Access By", key: "accessBy" },
    { label: "IP Address", key: "ipAddress" },
    { label: "Event Type", key: "eventType" },
    { label: "User Agent", key: "userAgent" },
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
            <h2>Audit Log</h2>
          </div>
          <div className="button-main-div">
            <input
              type="date"
              id="DatePicker"
              min="2015-01-01"
              max="2025-12-31"
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
                          <img src={img10} />

                          <img src={img11} />
                        </>
                      )}
                      {header.key !== "taskaction" &&
                        header.key !== "patientName" &&
                        header.key !== "data" &&
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

export default Audit;
