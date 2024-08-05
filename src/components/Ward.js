import React, { useState } from "react";
import "../App.css";
import img13 from "../assets/image/img13.png";
import img14 from "../assets/image/img14.png";

const Ward = () => {
  const [formData, setFormData] = useState({
    wardNumber: "",
    wardName: "",
    floorNumber: "",
    error: null,
  });

  const [floorData, setFloorData] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value, error: null });
  };

  const addWard = () => {
    if (
      formData.wardNumber !== "" &&
      formData.wardName !== "" &&
      formData.floorNumber !== ""
    ) {
      const newWard = {
        id: floorData.length + 1,
        wardNumber: formData.wardNumber,
        wardName: formData.wardName,
        floorNumber: formData.floorNumber,
      };
      setFloorData([...floorData, newWard]);
      setFormData({
        ...formData,
        wardNumber: "",
        wardName: "",
        floorNumber: "",
        error: null,
      });
    } else {
      setFormData({ ...formData, error: "Please enter all details." });
    }
  };

  const editWard = (index) => {
    const selectedWard = floorData[index];
    setFormData({
      ...formData,
      wardNumber: selectedWard.wardNumber,
      wardName: selectedWard.wardName,
      floorNumber: selectedWard.floorNumber,
      error: null,
    });
    setEditIndex(index);
  };
  console.log("floorData", floorData);

  const updateWard = () => {
    if (
      formData.wardNumber !== "" &&
      formData.wardName !== "" &&
      formData.floorNumber !== ""
    ) {
      const updatedFloorData = floorData.map((ward, index) =>
        index === editIndex
          ? {
              ...ward,
              wardNumber: formData.wardNumber,
              wardName: formData.wardName,
              floorNumber: formData.floorNumber,
            }
          : ward
      );
      setFloorData(updatedFloorData);
      setEditIndex(-1);
      setFormData({
        ...formData,
        wardNumber: "",
        wardName: "",
        floorNumber: "",
        error: null,
      });
    } else {
      setFormData({ ...formData, error: "Please enter all details." });
    }
  };

  const deleteWard = (index) => {
    const updatedFloorData = floorData.filter((ward, i) => i !== index);
    setFloorData(updatedFloorData);
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-4 col-md-4">
          <div className="create-floor-form">
            <h3 className="create-floor-title">Create Ward</h3>

            <input
              type="number"
              id="wardNumber"
              placeholder="Enter Ward No."
              value={formData.wardNumber}
              onChange={handleInputChange}
              required
              style={{
                maxWidth: "100%",
              }}
            />
            <br />
            <input
              type="text"
              id="wardName"
              autoComplete="off"
              placeholder="Enter Ward Name"
              value={formData.wardName}
              onChange={handleInputChange}
              required
              style={{
                marginTop: "20px",
                maxWidth: "100%",
              }}
            />

            <div className="custom-select">
              <select
                id="floorNumber"
                value={formData.floorNumber}
                placeholder="select Floor"
                onChange={handleInputChange}
                style={{
                  color: "gray",
                  marginTop: "20px",
                  marginLeft: "0px",
                  padding: "20px",
                  maxWidth: "100%",
                }}
              >
                <option value="">Select Floor</option>
                <option value="Floor No.1">Floor No.1</option>
                <option value="Floor No.2">Floor No.2</option>
                <option value="Floor No.3">Floor No.3</option>
                <option value="Floor No.4">Floor No.4</option>
              </select>
            </div>

            <button
              type="button"
              onClick={editIndex === -1 ? addWard : updateWard}
              className="floor-button"
            >
              {editIndex === -1 ? "Create" : "Update"}
            </button>
            {formData.error && (
              <p
                className="error-message"
                style={{
                  marginTop: "-33px",
                  marginLeft: "20px",
                  fontWeight: 500,
                }}
              >
                {formData.error}
              </p>
            )}
          </div>
        </div>
        <div className="col-lg-8 col-md-8">
          <div className="Ava-floor">
            <div className="flex-container">
              <h3 style={{ margin: "0px", padding: "9px 10px" }}>
                Available Ward
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
                <thead className="sticky-header">
                  <tr>
                    <th>Ward No.</th>
                    <th>Ward Name</th>
                    <th>Floor Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {floorData?.length > 0 &&
                    floorData.map((ward, index) => (
                      <tr key={index}>
                        <td>{ward.wardNumber}</td>
                        <td>{ward.wardName}</td>
                        <td>{ward.floorNumber}</td>

                        <td style={{ width: "186px", height: "10px" }}>
                          <button
                            type="button"
                            onClick={() => editWard(index)}
                            style={{ border: "none", background: "none" }}
                          >
                            <img src={img13} alt="Edit" />
                          </button>
                          <button
                            type="button"
                            onClick={() => deleteWard(index)}
                            style={{ border: "none", marginLeft: "10px" }}
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
    </>
  );
};

export default Ward;
