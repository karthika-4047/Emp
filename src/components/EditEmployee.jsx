import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";

const EditEmployee = () => {
  const { id } = useParams();

  function warning() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "This operation doesn't work now",
      footer: "Backend didn't connected yet",
    });
  }

  const [form, setForm] = useState({
    name: "",
    email: "",
    userName: "",
    companyName: "",
  });

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // Convert id to a number since useParams returns a string
        const numericId = parseInt(id);
        const filteredUsers = res.data.filter((user) => user.id === numericId);
        if (filteredUsers.length > 0) {
          setForm({
            name: filteredUsers[0].name,
            email: filteredUsers[0].email,
            userName: filteredUsers[0].username, // Assuming the property is 'username'
            companyName: filteredUsers[0].company.name, // Assuming the property is 'company.name'
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]); // id is a dependency

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
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <TextField
          id="position"
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <TextField
          id="office"
          label="User Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={form.userName}
          onChange={(e) => setForm({ ...form, userName: e.target.value })}
        />
        <TextField
          id="salary"
          label="Company Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={form.companyName}
          onChange={(e) => setForm({ ...form, companyName: e.target.value })}
        />
        <Button onClick={warning} variant="contained" color="primary">
          Update
        </Button>
      </form>
    </div>
  );
};

export default EditEmployee;
