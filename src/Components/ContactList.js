import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";


const ContactList =(props)=>{
    console.log(props);
    const deletecontact=(id)=>{
        props.getelementid(id);
        };
        const contacts=[{id:"1",name:"Saksham",email:"saksham5701@gmail.com",},{id:"2",name:"Saksham",email:"saksham5701@gmail.com",},{id:"3",name:"Saksham",email:"saksham5701@gmail.com",}];
    const rendercontactlist=contacts.map((contact)=>{
        return(
              <ContactCard contact={contact} clickHandler={deletecontact} key={contact.id}></ContactCard>
        );
       
    })

return (
    <div className="main">
    <h2 style={{margin:50}}>
        Contact List
        <Link to="/add"><button className="ui button blue right">Add Contact</button></Link>
        
    </h2>
<div className="ui celled List">{rendercontactlist}</div>
</div>);
};

export default ContactList;