import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function ResultRow(props) {
    return (
        <TableRow>
            <TableCell component="th" scope="row">
                <img src={props.thumbnail} alt="thumbnail"></img>
            </TableCell>
            <TableCell align="center">{props.fullname}</TableCell>
            <TableCell align="center">{props.phone}</TableCell>
            <TableCell align="center">{props.email}</TableCell>
        </TableRow>
    );
}

export default ResultRow;