import { MdDeleteForever } from "react-icons/md";
import { useSelector } from "react-redux"
import styled from "styled-components";
import { removeUser } from "../store/slices/UserSlice";
import { useDispatch } from "react-redux";
const DisplayUsers = () => {
    const dispatch = useDispatch()
    const data = useSelector((state)=>{
        return state.users
    })
    const deleteUser=(user)=>{
        dispatch(removeUser(user))
    }
  return <Wrapper> {data.map((user,key)=>{    
    return <li key={key} className="">
         {user}
         <button className=" delete-btn" onClick={()=>deleteUser(key)}><MdDeleteForever className="delete-icon"/> </button>
       </li>
}) 
}
</Wrapper>
}
const Wrapper = styled.section`
li{
white-space:nowrap;
text-align:left;
height:40px;
border-bottom:1px solid #ddd;
margin-top: 2%;
font-family: sans-serif;
font-size: 18px;
font-stretch: normal;
font-style: normal;
-webkit-font-smoothing: antialiased;
display :flex;
justify-content: space-between;

}
`;
export default DisplayUsers
