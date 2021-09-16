import React, { useState } from "react";

const user = {
  name: "Max",
  surname: "Cavalera",
  message: "Hello!",
};

const UseStateObject = () => {
  const [person, setPerson] = useState(user);

  const handleClick = () => {
    setPerson({ ...person, message: "Goodnight!" });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.surname}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={handleClick}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
