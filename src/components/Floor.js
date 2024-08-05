import React, { useState } from "react";
import "../App.css";
import img13 from "../assets/image/img13.png";
import img14 from "../assets/image/img14.png";

const Manage = () => {
  const [formData, setFormData] = useState({
    floorNumber: "",
    floorName: "",
    error: null,
  });
  const [floorData, setFloorData] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const addFloor = () => {
    if (formData.floorNumber !== "" && formData.floorName !== "") {
      const newFloor = {
        id: floorData.length + 1,
        floorNumber: formData.floorNumber,
        floorName: formData.floorName,
      };
      setFloorData([...floorData, newFloor]);
      setFormData({ ...formData, floorNumber: "", floorName: "", error: null });
    } else {
      setFormData({ ...formData, error: "Please enter all details." });
    }
  };

  const editFloor = (index) => {
    const selectedFloor = floorData[index];
    setFormData({
      ...formData,
      floorNumber: selectedFloor.floorNumber,
      floorName: selectedFloor.floorName,
      error: null,
    });
    setEditIndex(index);
  };

  const updateFloor = () => {
    if (formData.floorNumber !== "" && formData.floorName !== "") {
      const updatedFloorData = floorData.map((floor, index) =>
        index === editIndex
          ? {
              ...floor,
              floorNumber: formData.floorNumber,
              floorName: formData.floorName,
            }
          : floor
      );
      setFloorData(updatedFloorData);
      setEditIndex(-1);
      setFormData({ ...formData, floorNumber: "", floorName: "", error: null });
    } else {
      setFormData({ ...formData, error: "Please enter all details." });
    }
  };

  const deleteFloor = (index) => {
    const updatedFloorData = floorData.filter((floor, i) => i !== index);
    setFloorData(updatedFloorData);
  };

  return (
    <div className="row">
      <div className="col-lg-4 col-md-4 ">
        <div className="create-floor-form">
          <h3 className="create-floor-title">Create Floors</h3>
          <input
            type="number"
            id="floorNumber"
            placeholder="Floor No."
            value={formData.floorNumber}
            onChange={handleInputChange}
            required
            style={{ maxWidth: "100%" }}
          />
          <br />
          <input
            type="text"
            id="floorName"
            autoComplete="off"
            placeholder="Floor Name"
            value={formData.floorName}
            onChange={handleInputChange}
            required
            style={{ marginTop: "14px", maxWidth: "100%" }}
          />
          <button
            type="button"
            onClick={editIndex === -1 ? addFloor : updateFloor}
            className="floor-button"
          >
            {editIndex === -1 ? "Create" : "Update"}
          </button>
          {formData.error && (
            <p
              className="error-message"
              style={{ marginTop: "-34px", marginLeft: "20px" }}
            >
              {formData.error}
            </p>
          )}
        </div>
      </div>

      <div className=" col-lg-8 col-md-8">
        <div className="Ava-floor">
          <div className="flex-container">
            <h3 style={{ margin: "0px", padding: "9px 10px" }}>
              Available floor
            </h3>

            <input
              type="text"
              id="searchBar"
              placeholder="Search"
              style={{
                width: "272px",
                height: "48px",
                borderRadius: "20px",
                marginTop: "10px",
              }}
            />
          </div>
          <div className="tbody-container">
            <table className="ward-table">
              <thead>
                <tr>
                  <th>No.#</th>
                  <th>Floor No.</th>
                  <th>Floor Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {floorData?.length > 0 &&
                  floorData.map((floor, index) => (
                    <tr key={index} className={index === 0 ? "first-row" : ""}>
                      <td>{index + 1}</td>
                      <td>{floor.floorNumber}</td>
                      <td>{floor.floorName}</td>
                      <td style={{ width: "150px", height: "10px" }}>
                        <button
                          type="button"
                          onClick={() => editFloor(index)}
                          style={{
                            border: "none",
                            background: "none",
                          }}
                        >
                          <img src={img13} alt="Edit" />
                        </button>

                        <button
                          type="button"
                          onClick={() => deleteFloor(index)}
                          style={{
                            border: "none",
                            background: "none",
                            marginLeft: "3px",
                          }}
                        >
                          <img src={img14} alt="Delete" />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Manage;
