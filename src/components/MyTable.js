import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
// import { deleteUser, updateUser } from '../containers/rsslice';
import { Button } from '@mui/material'
import { setUserSlice } from '../containers/usersSlice';
import { DELETE_USER_BY_ID, GET_USERS } from './sagas/types';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';



export default function MyTable() {
    const rows=useSelector(store=>store.user)
    // console.log(rows)
    const dispatch=useDispatch();
    React.useEffect(()=>{
        dispatch({type:GET_USERS})
    },[])
  return (
    <div>
    <h1>Student Table</h1>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow> 
            <TableCell>Name</TableCell>
            <TableCell align="center">L-Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Stu ID</TableCell>
            <TableCell align="center">Phone No</TableCell>
            <TableCell align="center">Address</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.lname}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.stuId}</TableCell>
              <TableCell align="center">{row.phno}</TableCell>
              <TableCell align="center">{row.address}</TableCell>

              <TableCell align="center">
                <Button  variant='inherit' onClick={()=>{dispatch(setUserSlice(row))}}><EditIcon /></Button>
                <Button  variant='inherit' onClick={()=>{dispatch({type:DELETE_USER_BY_ID,user:row})}}><DeleteForeverIcon /></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}