import React from "react";
import ContactCard from "./ContactCard";

const ContactList =(props)=>{
    console.log(props);
    const rendercontactlist=props.contacts.map((contact)=>{
        return(
              <ContactCard contact={contact}></ContactCard>
        );
       
    })

return (
<div className="ui celled List">{rendercontactlist}</div>
);
};

export default ContactList;