import React from "react";
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
<div className="ui celled List">{rendercontactlist}</div>
);
};

export default ContactList;