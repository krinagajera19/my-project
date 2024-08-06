import React, { useState, useEffect } from "react";
import "../App.css";
import img27 from "../assets/image/img27.png";
import img13 from "../assets/image/img13.png";
import img14 from "../assets/image/img14.png";
import img18 from "../assets/image/img18.png";
import img19 from "../assets/image/img19.png";
import img20 from "../assets/image/img20.png";
import img21 from "../assets/image/img21.png";
import img22 from "../assets/image/img22.png";
import img23 from "../assets/image/img23.png";
import img26 from "../assets/image/img26.png";

const Settings = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);
  const [isSubmitVisible, setIsSubmitVisible] = useState(true);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState("Super");
  const [userTypes, setUserTypes] = useState(["Super", "Admin", "User"]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * userTypes.length);
    setSelectedUserType(userTypes[randomIndex]);
  }, []);

  const [data, setData] = useState([
    { id: 1, username: "Ralph Edwards", usertype: "Admin", Imgsrc: img18 },
    { id: 2, username: "Jacob Jones", usertype: "Super Admin", Imgsrc: img19 },
    { id: 3, username: "Annette Black", usertype: "Admin", Imgsrc: img20 },
    {
      id: 4,
      username: "Bessie Cooper",
      usertype: "Super Admin",
      Imgsrc: img21,
    },
    { id: 5, username: "Cody Fisher", usertype: "Admin", Imgsrc: img22 },
    { id: 6, username: "Jenny Wilson", usertype: "Super Admin", Imgsrc: img26 },
    { id: 7, username: "Dianne Russell", usertype: "Admin", Imgsrc: img23 },
    { id: 8, username: "Cody Fisher", usertype: "Admin", Imgsrc: img22 },
    { id: 9, username: "Jenny Wilson", usertype: "Super Admin", Imgsrc: img26 },
    { id: 10, username: "Dianne Russell", usertype: "Admin", Imgsrc: img23 },
  ]);

  const toggleSettingsDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearchClick = () => {
    setIsSearchDropdownOpen(!isSearchDropdownOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleUserTypeSelect = (type) => {
    setSelectedUserType(type);
  };

  const handleCancel = () => {
    setIsSearchDropdownOpen(false);
    setSelectedUserType(false);
  };

  const handleDropdownClose = () => {
    setIsSearchDropdownOpen(false);
  };

  const handleSubmit = () => {
    console.log("Submit clicked!");
  };
  const handleUserSetting = (userType) => {
    setSelectedUserType(userType);
    setIsOpen(false);
  };

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const [selectedRow, setSelectedRow] = useState(null);
  const [editedData, setEditedData] = useState({
    username: "",
    usertype: "",
  });

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };
  const handleEdit = (row) => {
    setEditedData({ ...row });
    setSelectedRow(row.id);
    setSelectedUserType(row.usertype);
  };

  const handleEditSubmit = () => {
    const newData = data.map((row) =>
      row.id === selectedRow ? { ...row, ...editedData } : row
    );
    setData(newData);
    setSelectedRow(null);
    setEditedData({ username: "", usertype: "" }); // Reset editedData
  };

  const handleDelete = (row) => {
    const newData = data.filter((item) => item.id !== row.id);
    setData(newData);
  };

  const sortedData = [...data].sort((a, b) => {
    const valueA = a[sortConfig.key] || "";
    const valueB = b[sortConfig.key] || "";

    if (sortConfig.key === "username" || sortConfig.key === "usertype") {
      return sortConfig.direction === "ascending"
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    } else {
      if (sortConfig.direction === "ascending") {
        return valueA - valueB;
      } else {
        return valueB - valueA;
      }
    }
  });

  return (
    <>
      <div>
        <div className="table-header">
          <div className="available-task">
            <h2>Setting</h2>
          </div>
          <div className="button-main-div">
            <input
              type="date"
              id="DatePicker"
              min="2015-01-01"
              max="2025-12-31"
            />

            <div className="button">
              <p onClick={handleSearchClick}>Search</p>

              <div>
                {isSearchDropdownOpen && (
                  <div className="main-dropdown-open">
                    <div className="line-flex">
                      <h5>User Setting</h5>
                      <img src={img27} onClick={handleDropdownClose} />
                    </div>
                    <div className="radio-group">
                      <input
                        type="radio"
                        value="Super"
                        onChange={() => handleUserSetting("Super")}
                        checked={selectedUserType === "Super"}
                      />
                      <label htmlFor="html">Super</label>
                      <br />
                      <input
                        type="radio"
                        value="Admin"
                        onChange={() => handleUserSetting("Admin")}
                        checked={selectedUserType === "Admin"}
                      />
                      <label htmlFor="css">Admin</label>
                      <br />
                      <input
                        type="radio"
                        value="User"
                        onChange={() => handleUserSetting("User")}
                        checked={selectedUserType === "User"}
                      />
                      <label>User</label>
                    </div>

                    <div className="checkbox-div">
                      <div className="floor-div">
                        <input
                          type="checkbox"
                          value="Super admin"
                          style={{ marginLeft: "-118px" }}
                        />

                        <label className="floor-label">
                          Give Access for Floors
                        </label>
                      </div>
                      <div className="floor-div">
                        <input
                          type="checkbox"
                          value="Super admin"
                          style={{ marginLeft: "-118px" }}
                        />

                        <label className="floor-label">
                          Give Access for wards
                        </label>
                      </div>
                      <div className="floor-div">
                        <input
                          type="checkbox"
                          value="Super admin"
                          style={{ marginLeft: "-118px" }}
                        />

                        <label className="floor-label">
                          Give Access for Beds
                        </label>
                      </div>
                      <div className="floor-div">
                        <input
                          type="checkbox"
                          value="Super admin"
                          style={{ marginLeft: "-118px" }}
                        />

                        <label className="floor-label">
                          Give Access for Actions
                        </label>
                      </div>
                    </div>
                    <div className="button-container">
                      <button className="cancel-button" onClick={handleCancel}>
                        Cancel
                      </button>
                      {isSubmitVisible && (
                        <button
                          className="submit-button"
                          onClick={handleSubmit}
                        >
                          Submit
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
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
                <th onClick={() => handleSort("username")}>
                  Username
                  {sortConfig.key === "username" && (
                    <span>
                      {sortConfig.direction === "ascending" ? " 🔼" : " 🔽"}
                    </span>
                  )}
                </th>
                <th onClick={() => handleSort("usertype")}>
                  Usertype: {selectedUserType}
                  {sortConfig.key === "usertype" && (
                    <span>
                      {sortConfig.direction === "ascending" ? " 🔼" : " 🔽"}
                    </span>
                  )}
                </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((row) => (
                <tr key={row.id}>
                  <td>
                    <img src={row.Imgsrc} alt="User Avatar" />
                    <span>
                      {selectedRow === row.id ? (
                        <input
                          type="text"
                          value={editedData.username}
                          onChange={(e) =>
                            setEditedData({
                              ...editedData,
                              username: e.target.value,
                            })
                          }
                        />
                      ) : (
                        row.username
                      )}
                    </span>
                  </td>
                  <td>
                    {selectedRow === row.id ? (
                      <input
                        type="text"
                        value={editedData.usertype}
                        onChange={(e) =>
                          setEditedData({
                            ...editedData,
                            usertype: e.target.value,
                          })
                        }
                      />
                    ) : (
                      row.usertype
                    )}
                  </td>
                  <td>
                    {selectedRow === row.id ? (
                      <button type="button" onClick={handleEditSubmit}>
                        Update
                      </button>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={() => handleEdit(row)}
                          style={{ border: "none", background: "none" }}
                        >
                          <img src={img13} alt="Edit" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(row)}
                          style={{ border: "none", marginLeft: "10px" }}
                        >
                          <img src={img14} alt="Delete" />
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Settings;
