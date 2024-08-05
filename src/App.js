import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Forget from "./components/Forget";
import Dashboard from "./components/Dashboard";
import Reset from "./components/Reset";
import Task from "./components/Tasks";
import Floor from "./components/Floor";
import Sidebar from "./components/Sidebar";
import Ward from "./components/Ward";
import Bed from "./components/Bed";
import Action from "./components/Action";
import Audit from "./components/Audit";
import Activity from "./components/Activity";
import Settings from "./components/Settting";
import Home from "./components/Home";

function App() {

 return (
    <>
   <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/" element={<Login />} />
   <Route
          path="/dashboard"
          element={
            <Home>
              <Dashboard />
            </Home>
          }
        />

        <Route
          path="/tasks"
          element={
            <Home>
              <Task />
            </Home>
          }
        />

        <Route
          path="/floor"
          element={
            <Home>
              <Floor />
            </Home>
          }
        />

        <Route
          path="/ward"
          element={
            <Home>
              <Ward />
            </Home>
          }
        />

        <Route
          path="/bed"
          element={
            <Home>
              <Bed />
            </Home>
          }
        />

        <Route
          path="/action"
          element={
            <Home>
              <Action />
            </Home>
          }
        />

        <Route
          path="/audit"
          element={
            <Home>
              <Audit />
            </Home>
          }
        />

        <Route
          path="/activity"
          element={
            <Home>
              <Activity />
            </Home>
          }
        />
        <Route
          path="/settings"
          element={
            <Home>
              <Settings />
            </Home>
          }
        />
      </Routes>
    </>
  );
}

export default App;

