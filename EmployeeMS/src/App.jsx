import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import Departments from "./Components/Departments"; 
import Employee from "./Components/Employee";
import Assets from "./Components/Assets";
import Attendance from "./Components/Attendance";
import AddDepartment from "./Components/AddDepartment"; 
import AddEmployee from "./Components/AddEmployee";
import EditEmployee from "./Components/EditEmployee";
import AddAsset from "./Components/AddAsset";
import EditAsset from "./Components/EditAsset";
import ViewEmployee from "./Components/ViewEmployee";
import AssetLog from "./Components/AssetLog"; 
import Tasks from "./Components/Tasks"; 

// ✅ New Components for View More Functionality
import ViewDepartmentEmployees from "./Components/ViewDepartmentEmployees";
import ViewInterns from "./Components/ViewInterns";
import ViewEmployeeDetails from "./Components/ViewEmployeeDetails";
import ViewInternDetails from "./Components/ViewInternDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ Default Home should redirect to Admin Login */}
        <Route path="/" element={<Login />} /> 
        <Route path="/adminlogin" element={<Login />} />

        {/* ✅ Dashboard Section with Nested Routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="departments" element={<Departments />} />
          <Route path="employee" element={<Employee />} />
          <Route path="assets" element={<Assets />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="assetlogs" element={<AssetLog />} /> 
          <Route path="add_department" element={<AddDepartment />} />
          <Route path="add_employee" element={<AddEmployee />} />
          <Route path="edit_employee/:id" element={<EditEmployee />} />
          <Route path="add_asset" element={<AddAsset />} />
          <Route path="edit_asset/:id" element={<EditAsset />} />
          <Route path="employee/:id" element={<ViewEmployee />} />
          <Route path="tasks" element={<Tasks />} /> 

          {/* ✅ New Routes for View More Functionality */}
          <Route path="view_department/:id" element={<ViewDepartmentEmployees />} /> 
          <Route path="view_interns" element={<ViewInterns />} /> 
          <Route path="view_employee/:id" element={<ViewEmployeeDetails />} /> 
          <Route path="view_intern/:id" element={<ViewInternDetails />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
