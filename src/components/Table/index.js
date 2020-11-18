import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import API from '../../util/API';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function BasicTable() {
    const classes = useStyles();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getResult();
    }, []);

    const getResult = () => {
        API.getUsers().then(response => {
            const cleanData = response.data.results.map(user => ({
                ...user,
                fullname: user.name.first + " " + user.name.last,
                dob: user.dob.date,
            }))
            setUsers(cleanData)
        });
    };

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Image</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Phone</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">DOB</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user, i) => (
                        <TableRow key={i}>
                            <TableCell component="th" scope="row">
                                <img src={user.picture.thumbnail} alt="thumbnail"></img>
                            </TableCell>
                            <TableCell align="right">{user.fullname}</TableCell>
                            <TableCell align="right">{user.phone}</TableCell>
                            <TableCell align="right">{user.email}</TableCell>
                            <TableCell align="right">{user.dob
                            }
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

// creating sorting and searching functions
// search handleInputChange
// sort 