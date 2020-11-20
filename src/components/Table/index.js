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
import TextField from '../TextField';
import ResultRow from '../ResultRow';

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
            }))
            setUsers(cleanData)
        });
    };

    function sortName() {
        this.setState({
            users: users.sort((a, b) =>
                a.fullname > b.fullname ? 1 : -1
            )
        })
    }

    function sortPhone() {
        this.setState({
            users: users.sort((a, b) =>
                a.phone > b.phone ? 1 : -1
            )
        })
    }

    function sortEmail() {
        this.setState({
            users: users.sort((a, b) =>
                a.email > b.email ? 1 : -1
            )
        })
    }

    return (
        <TableContainer component={Paper}>
            <TextField/>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Image</TableCell>
                        <TableCell 
                            align="center"
                            onClick={() => {sortName()}}>Name</TableCell>
                        <TableCell 
                            align="center"
                            onClick={() => {sortPhone()}}>Phone</TableCell>
                        <TableCell 
                            align="center"
                            onClick={() => {sortEmail()}}>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user, i) => (
                        <ResultRow
                            key={i}
                            thumbnail={user.picture.thumbnail} 
                            fullname={user.fullname}
                            phone={user.phone}
                            email={user.email}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

// creating sorting and searching functions
// search handleInputChange
// sort 

// const useStyles = makeStyles({
//     table: {
//         minWidth: 650,
//     },
// });

// class Users extends Component {
//     state = {
//         search: "",
//         employees: []
//     }

//     componentDidMount() {
//         API.getUsers().then(response => {
//             const cleanData = response.data.results.map(user => ({
//                 ...user,
//                 thumbnail: user.picture.thumbnail,
//                 fullname: user.name.first + " " + user.name.last,
//                 phone: user.phone,
//                 email: user.email,
//             }))
//             this.setState({ users: cleanData })
//         });
//     }

//     handleInputChange = event => {
//         let value = event.target.value;
//         const name = event.target.name;

//         this.setState({ [name]: value, });
//     }

//     sortName = () => {
//         const sortUsers = this.state.users.sort((a, b) => a.fullname > b.fullname ? 1 : -1);
//         this.setState(sortUsers);
//     }

//     sortPhone = () => {
//         const sortUsers = this.state.users.sort((a, b) => a.phone > b.phone ? 1 : -1);
//         this.setState(sortUsers);
//     }

//     sortEmail = () => {
//         const sortUsers = this.state.users.sort((a, b) => a.email > b.email ? 1 : -1);
//         this.setState(sortUsers);
//     }

//     render () {
//         const {classes} = this.props;

//         return (
//             <TableContainer component={Paper}>
//                 <TextField
//                     search={this.state.search}
//                     handleInputChange={this.handleInputChange}
//                 />
//                 <Table className={classes.table} aria-label="simple table">
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>Image</TableCell>
//                             <TableCell
//                                 align="center"
//                                 onClick={() => {this.sortName()}}>Name</TableCell>
//                             <TableCell
//                                 align="center"
//                                 onClick={() => {this.sortPhone()}}>Phone</TableCell>
//                             <TableCell
//                                 align="center"
//                                 onClick={() => {this.sortEmail()}}>Email</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {this.state.users.filter((user) =>
//                             user.fullname.toLowerCase().includes(this.state.search.toLowerCase()) ||
//                             user.phone.toLowerCase().includes(this.state.search.toLowerCase()) ||
//                             user.email.toLowerCase().includes(this.state.search.toLowerCase())
//                         ).map((user, i) => (
//                             <ResultRow
//                                 key={i}
//                                 thumbnail={user.picture.thumbnail}
//                                 fullname={user.fullname}
//                                 phone={user.phone}
//                                 email={user.email}
//                             />
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         );
//     }
// }

// export default withStyles(useStyles)(Users);