import React, { useState } from "react";
import "./Newsletter.css";
const Newsletter = () => {
const [valued,setValue] = useState({
  name:"",
  email:"",
  message:""
})

const hadleChange = (e)=>{


 setValue({...valued,[e.target.name]:e.target.value})
}


  return (
    <div >
     <div className="newsletter">
        
      <div className="newsletter-title">
        <h2>Newslleter</h2>
        <p>Get news about articles and updates in your inbox.</p>
      </div>
      <div className="form">
        <form>
            <input onChange={hadleChange} value={valued.name} type="text" name="name" placeholder="Name"/>
            <hr />
            <input onChange={hadleChange} value={valued.email} type="email" name="email" placeholder="Email"/>
            <hr />
            <input onChange={hadleChange} value={valued.meassage} name="message" type="text" placeholder="Message"/>
            <hr />

        </form>
      </div>
    
    </div>
    <div className="get">
        <h1 className="h1-1">Get</h1>
        <h1 className="h1-2">In Touch</h1>
      </div>
     </div>
  );
};

export default Newsletter;
