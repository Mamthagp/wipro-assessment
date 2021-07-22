import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

const List = (props) => {
    const classes = useStyles();
    const [ users, setUsers ] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                const res = response.data
                setUsers(res)
            })
            .catch((err) => {
                alert(err.message)
            })
    }, [])

    return (
        <div>
            <h2>Users List - {users.length}</h2>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Id</StyledTableCell>
                        <StyledTableCell align="center">Title</StyledTableCell>
                        <StyledTableCell align="center">Body</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map((user) => {
                            return (
                                <StyledTableRow key={user.id}>
                                    <StyledTableCell>{user.id}</StyledTableCell>
                                    <StyledTableCell >{user.title}</StyledTableCell>
                                    <StyledTableCell>{user.body}</StyledTableCell>
                                </StyledTableRow>
                            )
                        })
                    }
                </TableBody>
                
            </Table>
            </TableContainer>
            
        </div>
    )
}

export default List