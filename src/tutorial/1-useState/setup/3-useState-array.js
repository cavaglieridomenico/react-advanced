import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [peaple, setPeaple] = React.useState(data);

  const removeItem = (item) => {
    const newPeaple = peaple.filter((el) => el.id !== item);
    setPeaple(newPeaple);
  };

  return (
    <div>
      {peaple.map((person) => {
        const { id, name } = person;

        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeItem(id)}>
              X
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeaple([])}>
        Clear all
      </button>
    </div>
  );
  // return peaple.map((el) => <p>{el}</p>);
};

export default UseStateArray;
