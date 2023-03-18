import React from "react";
import ContactCard from "./ContactCard";


const ContactList =(props)=>{
    console.log(props);
    const deletecontact=(id)=>{
        props.getelementid(id);
        };
    const rendercontactlist=props.contacts.map((contact)=>{
        return(
              <ContactCard contact={contact} clickHandler={deletecontact} key={contact.id}></ContactCard>
        );
       
    })

return (
<div className="ui celled List">{rendercontactlist}</div>
);
};

export default ContactList;