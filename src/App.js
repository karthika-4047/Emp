import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Employeelist from "./components/Employeelist";
import EmployeeForm from "./components/EmployeeForm";
import EditEmployee from "./components/EditEmployee";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home child={<Employeelist />} />} />
        <Route path="/add" element={<Home child={<EmployeeForm />} />} />
        <Route path="/edit/:id" element={<Home child={<EditEmployee />} />} />
      </Routes>
    </div>
  );
}

export default App;
