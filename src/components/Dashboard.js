import React, { useState } from "react";
import "../App.css";
import Chart from "react-apexcharts";
import box1 from "../assets/svg/box1.svg";
import box2 from "../assets/svg/box2.svg";
import box3 from "../assets/svg/box3.svg";
import box4 from "../assets/svg/box4.svg";

const Dashboard = () => {
  const [chartData, setChartData] = useState({
    barChartOptions: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [9, 11, 13, 15, 17, 19, 21, 23],
      },
    },
    barChartSeries: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
    pieChartOptions: {
      labels: ["A", "B", "C", "D", "E"],
    },
    pieChartSeries: [30, 40, 20, 10, 50],
  });

  return (
    <>
      {/* Bar Chart */}
      <div className="box">
        <div className="chart-container">
          <h2>Activity Chart</h2>
          <div className="chart" style={{ width: "100%" }}>
            <Chart
              options={chartData.barChartOptions}
              series={chartData.barChartSeries}
              type="bar"
            />
          </div>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="pie-container">
              <h2>Today’s Report</h2>
              <Chart
                options={chartData.pieChartOptions}
                series={chartData.pieChartSeries}
                type="pie"
                width="400"
                height="200"
              />
            </div>
          </div>

          {/* Image Boxes */}
          <div className="col-md-6">
            <div className="stroke">
              <div className="main-stroke">
                <div className="box-size">
                  <img src={box1} alt="Box 1" />
                </div>
                <div className="second-box">
                  <img src={box2} alt="Box 2" />
                </div>
              </div>
              <div className="stroke-div">
                <div className="third-box">
                  <img src={box3} alt="Box 3" />
                </div>
                <div className="fourth-box">
                  <img src={box4} alt="Box 4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
