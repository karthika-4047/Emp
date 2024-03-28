import React from "react";
import { TextField, Button } from "@mui/material";
import Swal from "sweetalert2";

const EmployeeForm = () => {

  function warning() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "This operation doesn't work now",
      footer: "Backend didn't connected yet",
    });
  }
   // Styles for the container
   const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <div style={containerStyle}>
      <form noValidate autoComplete="off">
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          id="position"
          label="Designation"
          variant="outlined"
          fullWidth
          margin="normal"
          />
        <TextField
          label="Location"
          variant="outlined"
          fullWidth
          margin="normal"
          />
        <TextField
          label="Salary"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button onClick={warning} variant="contained" color="primary">
          Add
        </Button>
      </form>
    </div>
  );
};

export default EmployeeForm;
