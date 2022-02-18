import React from 'react'
import ListItem from '../../components/ListItem'
import { Editform } from '../../components/Editform';
import { toast } from 'react-toastify';
/* import Swal from 'sweetalert2/dist/sweetalert2'
import 'sweetalert2/src/sweetalert2.scss' */



export const List = ({contacts,setContacts}) => {


  const handleDelete=(id)=>{
    const newList = contacts.filter((item) => item.id !== id);
    setContacts(newList);

  /*   Swal.fire({
      icon: 'success',
      title: 'Signed in successfully'
    }) */
    
    toast("Contact Deleted Successfully");

  };
 
  return (
    <div id="lecture-list">
        <ul>
          {contacts.map((item) => (
            <ListItem 
            contacts={contacts} 
            setContacts={setContacts}
            name={item.name} 
            email={item.email} 
            phone={item.phone} 
            key={item.id} 
            id={item.id}
            handleDelete={()=>handleDelete(item.id)}
            Editform={Editform}
            />
          ))}
        </ul>
    </div>
  )
}

