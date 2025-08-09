import React, { useState } from "react";
import { API } from "../APIs/fetchdata";

const Create = () => {
  const [name, setName] = useState("");
  const { addData } = API(); 

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Name cannot be empty");
      return;
    }

    const result = await addData(name); 
    if (result) {
      console.log("Inserted:", result);
      alert("Account created successfully!");
      setName(""); 
    }
  };

  return (
    <div className="page create">
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={handleChange}
        />
        <br /><br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;
