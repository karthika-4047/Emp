import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios'; // Import axios
import { Link } from 'react-router-dom';

const Employeelist = () => {
    const [employeeData, setEmployeeData] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                console.log(res.data);
                setEmployeeData(res.data);
            })
            .catch((error) => {
                console.error('Error fetching employee data:', error);
            });
    }, []);

    function warning() {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "This operation doesn't work now",
        });
    }

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow style={{ backgroundColor: "grey" }}>
                            <TableCell style={{fontWeight: "800"}}>Name</TableCell>
                            <TableCell style={{fontWeight: "800"}}>Email</TableCell>
                            <TableCell style={{fontWeight: "800"}}>Company Name</TableCell>
                            <TableCell align="center" style={{fontWeight: "800"}}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employeeData.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell>
                                    {row.email}
                                </TableCell>
                                <TableCell>
                                    {row.company.name}
                                </TableCell>
                                <TableCell align="center">
                                <Link to={`/edit/${row.id}`} style={{ textDecoration: 'none' }}>
                                        <Button variant='contained' sx={{ mr: 1 }}>Edit</Button>
                                        </Link>
                                    <Button variant='contained' color="error" onClick={warning}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Employeelist;

