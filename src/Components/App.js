import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import ContactDetail from "./ContactDetail";

function App() {
  const getlocalitems=()=>{
    let list=localStorage.getItem('lists');

    if(list) {
      return JSON.parse(localStorage.getItem('lists'));
    }
    else {
      return [];
    }
  }

  const [contacts, setContacts] = useState(getlocalitems()); 

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]); 
  };

  const removeContactHandler = (id) => {
    const newcontactlist = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newcontactlist);
  };

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path="/" element={<ContactList contacts={contacts} getelementid={removeContactHandler} />} />
          <Route path="/contact/:id" component={ContactDetail} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div> 
  );
}

export default App;