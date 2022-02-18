import React ,{useState} from 'react'
import Header from './Header';
import Form from './Form';
import { List } from './List';


const Body = () => {
    const initialContact=[{
        name:"Sanjaya",
        email:"Sanju@gmail.com",
        phone:"981283734",
        id: Math.random()*1000,
    },
    {
        name:"SanjuBABA",
        email:"Baba@gmail.com",
        phone:"2340891280",
        id:Math.random()*1000,
    }]
    const [contacts,setContacts]=useState(initialContact);
    return (
        <div className="body row">
            <div className="col-lg-5 main-body">
                <Header />
                <Form contacts={contacts} setContacts={setContacts}/>
                <List contacts={contacts} setContacts={setContacts}/>
            </div></div>
    )
}
export default Body;