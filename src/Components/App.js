import React, { useState } from "react";
import './App.css';
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
function App() {
  const [contacts,setContacts]=useState([]); 
  const addContactHandler=(contact)=>
  {
   console.log(contact);
   setContacts([...contacts,contact]); 
  };
  return (
    
    <div className="ui container">
    <Header/>
    <AddContact addContactHandler={addContactHandler}/>
    <ContactList contacts={contacts}/> 
    {/* passing props contacts property, contacts array */}
    </div> 
   
  );
}

export default App;
