import React from "react";
import user from "../images/Hair.jpg"
const ContactCard=(props)=>{
    const {id,name,email }=props.contact;
    console.log(props.conatact);
return(
<div className="item">
<img className="ui avatar image" src={user} />
<div className="content">
    <div className="header">{name}</div>
    <div>{email}</div>
</div>
<i className="trash alternate outline icon" style={{color:"red",marginTop:"7px"}}></i>
</div>);
};

export default  ContactCard;