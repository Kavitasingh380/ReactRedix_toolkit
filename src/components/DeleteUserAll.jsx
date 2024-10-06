// import React from 'react'
import styled from "styled-components"
import { clearAllUsers } from "../store/actions";
import { useDispatch } from "react-redux";
function DeleteUserAll() {
    const dispatch= useDispatch();
    const deleteUser =()=>{
        dispatch(clearAllUsers())
    }
  return (
    <Wrapper>
        <button className="btn clear-btn" onClick={deleteUser} > Clear users</button>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.clear-btn{
text-transform:capitalize;
background-color:#db338a;
margin-top:2rem;
}
`

export default DeleteUserAll
