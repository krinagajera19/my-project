import React, { useEffect, useState } from "react";
import "../App.css";
import img13 from "../assets/image/img13.png";
import img14 from "../assets/image/img14.png";

const Bed = () => {
  const [formData, setFormData] = useState({
    bedNumber: "",
    floorNumber: "",
    wardName: "",
    bedUrl: "",
    error: null,
  });

  const [bedData, setBedData] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value, error: null });
  };

  const addBed = () => {
    const { bedNumber, floorNumber, wardName, bedUrl } = formData;
    if (
      bedNumber !== "" &&
      floorNumber !== "" &&
      wardName !== "" &&
      bedUrl !== ""
    ) {
      const newBed = { id: bedData.length + 1, ...formData };
      setBedData([...bedData, newBed]);
      setFormData({
        bedNumber: "",
        floorNumber: "",
        wardName: "",
        bedUrl: "",
        error: null,
      });
    } else {
      setFormData({ ...formData, error: "Please enter all details." });
    }
  };

  const editBed = (index) => {
    const selectedBed = bedData[index];
    setFormData({ ...selectedBed });
    setEditIndex(index);
  };
  console.log("bedData", bedData);
  const updateBed = () => {
    const { bedNumber, floorNumber, wardName, bedUrl } = formData;
    if (
      bedNumber !== "" &&
      floorNumber !== "" &&
      wardName !== "" &&
      bedUrl !== ""
    ) {
      const updatedBedData = bedData.map((bed, index) =>
        index === editIndex ? { ...formData } : bed
      );
      setBedData(updatedBedData);
      setFormData({
        bedNumber: "",
        floorNumber: "",
        wardName: "",
        bedUrl: "",
        error: null,
      });
      setEditIndex(-1);
    } else {
      setFormData({ ...formData, error: "Please enter all details." });
    }
  };

  const deleteBed = (index) => {
    const updatedBedData = bedData.filter((bed, i) => i !== index);
    setBedData(updatedBedData);
  };

  return (
    <div className="row">
      <div className="col-lg-4 col-md-4">
        <div className="create-floor-form">
          <h3 className="create-floor-title">Create Bed</h3>
          <input
            type="number"
            id="bedNumber"
            placeholder="Enter Bed No."
            value={formData.bedNumber}
            onChange={handleChange}
            required
            style={{ maxWidth: "100%" }}
          />
          <br />
          <div className="custom-select">
            <select
              value={formData.floorNumber}
              onChange={handleChange}
              id="floorNumber"
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
            <select
              value={formData.wardName}
              onChange={handleChange}
              id="wardName"
              className="select-placeholder-margin"
              style={{
                color: "gray",
                marginTop: "20px",
                marginLeft: "0px",
                padding: "20px",
                maxWidth: "100%",
              }}
            >
              <option value="">Select Ward</option>
              <option value="Emergency">Emergency</option>
              <option value="General">General</option>
            </select>
          </div>
          <input
            type="text"
            id="bedUrl"
            autoComplete="off"
            placeholder="Enter Bed Url"
            value={formData.bedUrl}
            onChange={handleChange}
            required
            style={{ marginTop: "20px", maxWidth: "100%" }}
          />
          <button
            type="button"
            onClick={editIndex === -1 ? addBed : updateBed}
            className="floor-button"
          >
            {editIndex === -1 ? "Create" : "Update"}
          </button>
          {formData.error && (
            <p
              style={{
                color: "red",
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
              Available Bed
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
            <table className="floor-table">
              <thead className="sticky-header">
                <tr>
                  <th>Bed No</th>
                  <th>Ward Name</th>
                  <th>Floor No</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {bedData?.length > 0 &&
                  bedData.map((bed, index) => (
                    <tr key={index}>
                      <td>{bed.bedNumber}</td>
                      <td>{bed.wardName}</td>
                      <td>{bed.floorNumber}</td>
                      <td
                        style={{
                          width: "199px",
                          height: "70px",
                          zIndex: -1,
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => editBed(index)}
                          style={{ border: "none", background: "none" }}
                        >
                          <img src={img13} alt="Edit" />
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteBed(index)}
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
  );
};

export default Bed;
