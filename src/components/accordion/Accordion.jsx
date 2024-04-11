import React, { useState } from "react";
import data from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const handleSingleSelection = (currentID) => {
    console.log(currentID);
    setSelected(currentID);
  };

  return (
    <>
      <h1>Accordion</h1>
      <h1>Selected = {selected}</h1>
      <div className="wrapper">
        <div className="accordion-container">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item">
                <div onClick={() => handleSingleSelection(dataItem.id)} className="title">
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
              </div>
            ))
          ) : (
            <div>NO data found </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordion;
