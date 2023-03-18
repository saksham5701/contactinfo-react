import React, { useState,useEffect} from "react";
import './App.css';
import { BrowserRouter as Router,Switch,Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
function App() {

  const getlocalitems=()=>{
    let list=localStorage.getItem('lists');

    if(list)
    {
      return JSON.parse(localStorage.getItem('lists'));
    }
    else{
      return [];
    }
  }
  
  const [contacts,setContacts]=useState(getlocalitems()); 
  const addContactHandler=(contact)=>
  {
   console.log(contact);
   setContacts([...contacts,{id: uuidv4(),...contact}]); 
  };
  
  // useEffect(()=>
  // {
  //     const retrieveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //     if(retrieveContacts) setContacts(retrieveContacts);
  // },[]);
  const removeContactHandler=(id)=>{
    const newcontactlist=contacts.filter((contact)=>{
      return contact.id !== id;
    });
  setContacts(newcontactlist);
};
  useEffect(()=>
  {
      localStorage.setItem('lists',JSON.stringify(contacts));
  },[contacts]);
  // const AddContact=NewHOC(contacts);
  return (
    
    <div className="ui container">
    <Router>
    <Header/>
    
    <Routes>
    <Route path="/add" exact Component={()=> <AddContact addContactHandler={addContactHandler}/>} />
    <Route path="/" Component={ ()=> <ContactList contacts={contacts} getelementid={removeContactHandler} />} />
    </Routes>
    {/* <AddContact addContactHandler={addContactHandler} />
    <ContactList contacts={contacts} getelementid={removeContactHandler}/>  */}
    {/* passing props contacts property, contacts array */}
    </Router>
    
    </div> 
   
  );
}

export default App;
