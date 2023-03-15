import React from "react";
import './App.css';
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
function App() {
  const contacts=[{
id:"1",name:"Saksham",email:"saksham5701@gmail.com"
  },{
    id:"2",name:"akj",email:"aashiqbanaya@gmail.com"
      }]; 
  return (
    
    <div className="ui container">
    <Header/>
    <AddContact/>
    <ContactList contacts={contacts}/> 
    {/* passing props contacts property, contacts array */}
    </div> 
   
  );
}

export default App;
