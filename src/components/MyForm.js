import { Button, Container, Input } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserSlice } from '../containers/usersSlice'
// import { addUser, updateUser } from '../containers/rsslice'
import { nanoid } from '@reduxjs/toolkit'
import { CREATE_USER, UPDATE_USER_BY_ID } from './sagas/types'

const MyForm = () => {
   
    const user=useSelector(store=>store.users);
    const dispatch=useDispatch();
    const handlechnage=(prop)=>(event)=>{
           dispatch(setUserSlice({...user,[prop]:event.target.value}))
    }
    const handlesubmit=()=>{
        // console.log("YES")
        //user.id===0? dispatch(addUser({...user,id:nanoid(8)})):dispatch(updateUser(user))
        user.id===0? dispatch({type:CREATE_USER,user:{...user,id:nanoid(8)}}):dispatch({type:UPDATE_USER_BY_ID,user})
        dispatch(setUserSlice({
            id:0,
            name:'',
            lname:'',
            stuId:'',
            email:'',
            phno:'',
            address:'',
        }))

    }
    // console.log(user)
  return (
    <div>
          <h1>Add Student</h1>

      <Container className='container'  style={{display:"grid",auto:0,border:"1px solid black", width:"fit-content",alignItems: "center"}}>
        
      {/* <Input style={{height:"30px",width:"400px",marginTop:"5px",border:"2px"}} value={user.id} fullWidth disabled ></Input> */}
        <Input style={{height:"30px",width:"400px",marginTop:"20px"}}  onChange={handlechnage('name')} placeholder='First Name' value={user.name} fullWidth></Input>
        <Input style={{height:"30px",width:"400px",marginTop:"20px"}} className='llname' onChange={handlechnage('lname')} placeholder='Last Name' value={user.lname} fullWidth></Input>
        <Input style={{height:"30px",width:"400px",marginTop:"20px"}} className='stuid' onChange={handlechnage('stuId')} placeholder='Student Id' value={user.stuId} fullWidth></Input>
        <Input style={{height:"30px",width:"400px",marginTop:"20px"}} className='eemail' onChange={handlechnage('email')} placeholder='E-mail Id' value={user.email} fullWidth></Input>
        <Input style={{height:"30px",width:"400px",marginTop:"20px"}} className='phno' onChange={handlechnage('phno')} placeholder='Phone no' value={user.phno} fullWidth></Input>
        <Input style={{height:"30px",width:"400px",marginTop:"20px"}} className='address' onChange={handlechnage('address')} placeholder='Address' value={user.address} fullWidth></Input>


        <Button style={{height:"30px",width:"80px",margin:"20px 0px 20px 150px"}} className='btn' fullWidth variant='contained' onClick={()=>{
            handlesubmit()
        }}>Submit</Button>
      </Container>
    </div>
  )
}

export default MyForm
