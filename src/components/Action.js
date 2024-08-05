import React, { useState } from "react";
import "../App.css";
import img13 from "../assets/image/img13.png";
import img14 from "../assets/image/img14.png";
import img16 from "../assets/image/img16.png";

const Action = () => {
  const [formData, setFormData] = useState({
    floorNumber: "",
    floorName: "",
    selectedImage: null,
    selectedImageName: "",
  });
  const [floorData, setFloorData] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [isFileDialogOpen, setIsFileDialogOpen] = useState(false);
  const [error, setError] = useState("");

  const toggleFileDialog = () => {
    setIsFileDialogOpen(!isFileDialogOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        selectedImage: file,
        selectedImageName: file.name,
      });
    }
  };

  const addFloor = () => {
    const { floorName, floorNumber, selectedImage } = formData;
    if (floorName !== "" && floorNumber !== "" && selectedImage) {
      const newFloor = {
        id: floorData.length + 1,
        floorNumber,
        floorName,
        image: URL.createObjectURL(selectedImage),
        imageName: formData.selectedImageName,
      };
      setFloorData([...floorData, newFloor]);
      setFormData({
        floorNumber: "",
        floorName: "",
        selectedImage: null,
        selectedImageName: "",
      });
      toggleFileDialog();
      setError("");
    } else {
      setError("Please enter all details.");
    }
  };

  const editFloor = (index) => {
    const selectedFloor = floorData[index];
    setFormData({
      floorNumber: selectedFloor.floorNumber,
      floorName: selectedFloor.floorName,
      selectedImageName: selectedFloor.imageName,
    });
    setEditIndex(index);
    toggleFileDialog();
  };

  const updateFloor = () => {
    const { floorName, floorNumber, selectedImage } = formData;
    if (floorName !== "" && floorNumber !== "" && selectedImage) {
      const updatedFloorData = floorData.map((floor, index) =>
        index === editIndex
          ? {
              ...floor,
              floorNumber,
              floorName,
              image: URL.createObjectURL(selectedImage),
              imageName: formData.selectedImageName,
            }
          : floor
      );
      setFloorData(updatedFloorData);
      setEditIndex(-1);
      setFormData({
        floorNumber: "",
        floorName: "",
        selectedImage: null,
        selectedImageName: "",
      });
      toggleFileDialog();
      setError("");
    } else {
      setError("Please enter all details.");
    }
  };

  const deleteFloor = (index) => {
    const updatedFloorData = floorData.filter((floor, i) => i !== index);
    setFloorData(updatedFloorData);
  };

  return (
    <>
      <div className="row">
        <div className=" col-lg-4 col-md-4">
          <div className="create-floor-form">
            <h3 className="create-floor-title">Create Action</h3>
            <div className="select-icon" onClick={toggleFileDialog}>
              <img src={img16} alt="Select File" />
            </div>
            {isFileDialogOpen && (
              <div className="file-dialog">
                <input type="file" onChange={handleFileSelect} />
                {formData.selectedImageName && (
                  <p>{formData.selectedImageName}</p>
                )}
                {formData.selectedImage && (
                  <div>
                    <img
                      src={URL.createObjectURL(formData.selectedImage)}
                      alt="Selected Image"
                      style={{ width: "50px", height: "50px" }}
                    />
                  </div>
                )}
                <button onClick={toggleFileDialog}>Cancel</button>
              </div>
            )}
            <br />
            <input
              type="text"
              id="wardName"
              autoComplete="off"
              placeholder="Action Name"
              name="floorName"
              value={formData.floorName}
              onChange={handleInputChange}
              required
              style={{
                marginTop: "20px",
                maxWidth: "100%",
              }}
            />
            <div className="custom-select">
              <select
                value={formData.floorNumber}
                onChange={handleInputChange}
                name="floorNumber"
                className="select-box" // changed 'class' to 'className'
                style={{
                  color: "gray",
                  marginTop: "20px",
                  marginLeft: "0px",
                  padding: "20px",
                  maxWidth: "100%",
                }}
              >
                <option value="" disabled hidden>
                  Select Color for Action
                </option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
                <option value="Yellow">Yellow</option>
              </select>
            </div>
            <div
              className="boxing-size"
              style={{
                width: "25px",
                height: "25px",
                position: "relative",
                top: "-45px",
                left: "29px",
                backgroundColor: formData.floorNumber,
              }}
            ></div>

            <button
              type="button"
              onClick={editIndex === -1 ? addFloor : updateFloor}
              className="floor-button"
            >
              {editIndex === -1 ? "Create" : "Update"}
            </button>
            {error && ( // changed 'formData.error' to 'error'
              <p
                className="error-message"
                style={{ marginTop: "-34px", marginLeft: "20px" }}
              >
                {error} {/* Changed 'formData.error' to 'error' */}
              </p>
            )}
          </div>
        </div>
        <div className="col-lg-8 col-md-8">
          <div className="Ava-floor">
            <div className="flex-container">
              <h3 style={{ margin: "0px", padding: "9px 10px" }}>
                Available Action
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
                    <th>Action No</th>
                    <th>Action Icon</th>
                    <th>Action Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {floorData?.length > 0 &&
                    floorData.map((floor, index) => (
                      <tr key={index}>
                        <td>{floor.id}</td>
                        <td>
                          <img
                            src={floor.image}
                            alt="Action Icon"
                            style={{ width: "50px", height: "50px" }}
                          />
                        </td>
                        <td>{floor.floorName}</td>
                        <td
                          style={{
                            width: "199px",
                            height: "70px",
                            zIndex: -1,
                          }}
                        >
                          <button
                            type="button"
                            onClick={() => editFloor(index)}
                            style={{ border: "none", background: "none" }}
                          >
                            <img src={img13} alt="Edit" />
                          </button>
                          <button
                            type="button"
                            onClick={() => deleteFloor(index)}
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

export default Action;
