import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Home = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        <div>
          <Sidebar />
          <div className="full-container">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Home;
