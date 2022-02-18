import React, { useState } from 'react';
import { MdModeEditOutline } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { AiOutlineCaretDown,AiOutlineCaretUp } from 'react-icons/ai'
import { ToggleDisplay } from '../ToggleDisplay';



const ListItem = ({contacts,name,email,phone,id, handleDelete,setContacts,Editform}) => {

    


    const [isEditing,setisEditing]=useState(false);
    const editform="editform";
    const [toggle, setToggle] = useState(false);
    const handletoggle = () => {
        toggle ? setToggle(false) : setToggle(true);
        setisEditing(false);
    };
    const handleEdit=()=>{
        isEditing?setisEditing(false):setisEditing(true);
        console.log(name,email,phone,id);
        setToggle(false);
        editform.scrollintoView();
      }
    return (
        <>
        <li className='item' style={{ listStyle: "none" }} >
            <div className='listItem row'>
                <div className='col-md-10 left-listItem'>
                    {toggle?<AiOutlineCaretUp onClick={handletoggle}/>:<AiOutlineCaretDown onClick={handletoggle} />}
                    <span className='name'>{name}</span>
                </div>
                <div className='col-md-2 right-listItem'>
                    <FaTrash onClick={handleDelete}/>
                    <MdModeEditOutline onClick={handleEdit} />
                </div>
                
            </div>
        </li>
        {toggle ? <ToggleDisplay email={email} phone={phone} /> : null}
        {isEditing?<Editform cname={editform} contacts={contacts} name={name} email={email} phone={phone} id={id} setisEditing={setisEditing} setContacts={setContacts}/>:null}
        </>
    )
}
export default ListItem;