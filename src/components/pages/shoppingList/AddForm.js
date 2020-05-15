import React, { useState } from "react";

const AddForm = ({ addShopping }) => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addShopping({ name: name });
    setName("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Add new Item:</label>
        <input type="text" onChange={handleChange} value={name} />
      </form>
    </>
  );
};
export default AddForm;
