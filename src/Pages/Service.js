import React, { useState } from 'react'

const Service = () => {
    const [check, setCheck] = useState("");
    const [checkMsg, setCheckMsg] = useState("");

    const updateSearch = (e) => {
        setCheck(e.target.value);
        
      };
     
      const updateMsg = (e) => {
        setCheckMsg(e.target.value);
        
      };
    
    return (
        
            <div className="contact-right">
            <form className="form-all" >
              <label>Let's discuss your project!</label>
              <input type="text" placeholder="Your Name" name="user_name" onChange={updateSearch}/>
              {/* <label>Email</label> */}
              <input type="email" placeholder="Your Email" name="user_email" onChange={updateMsg} />
              {/* <label>Phone</label> */}
              <input type="text" placeholder="Your Phone" name="user_phone" />
              {/* <label>Message</label> */}
              <textarea placeholder="Your Message Here" name="message"  />

              {check === "" || checkMsg === "" ? <button className="first-btn" disabled>Send</button>:<button className="first-btn" >Send</button>}
              
            </form>
          </div>
        
        
        
    )
}

export default Service
