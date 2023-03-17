import React, { useState,useEffect} from "react";
import './App.css';
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
   setContacts([...contacts,contact]); 
  };
  
  // useEffect(()=>
  // {
  //     const retrieveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //     if(retrieveContacts) setContacts(retrieveContacts);
  // },[]);
  useEffect(()=>
  {
      localStorage.setItem('lists',JSON.stringify(contacts));
  },[contacts]);
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
