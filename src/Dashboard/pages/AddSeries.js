import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const baseUrl ="https://depax-blog-backend.herokuapp.com"

const AddSeries = () => {
    const [name, setName] = useState("");
    const [isPending, setIsPending] = useState(false);


    const history = useHistory();

    const handleSubmit = (e) => {
    
        e.preventDefault();
        const blog = { name};
    
        setIsPending(true);
    
        
    
        
        
        fetch(`${baseUrl}/series`, {
          method: "POST",
          body: JSON.stringify(blog) ,
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          
        })
          .then((data) => data.json())
          .then((res) => {
            console.log("res series ", res);
            setIsPending(false);
            history.push("/dashboard");
          });
      };
  return (
    <div className="add-page">
      <form onSubmit={handleSubmit}>
        <div className="datails-content">
          <label>اسم السلسلة</label>
          <input
            type="text"
            placeholder="اسم السلسلة"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        
        
        
        {!isPending && <button className="newButton">حفظ </button>}
        {isPending && <button className="newButton">جارى الحفظ</button>}
      </form>
    </div>
  )
}

export default AddSeries