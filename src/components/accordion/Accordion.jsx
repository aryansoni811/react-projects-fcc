import React, { useState } from "react";
import data from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const handleSingleSelection = (currentID) => {
    console.log(currentID);
    setSelected(currentID === selected ? null : currentID);
  };
  console.log(selected);
  return (
    <>
      <h1>Accordion</h1>
      <h1>Selected = {selected}</h1>
      <div className="wrapper text-center ">
        <div className="accordion-container flex flex-col gap-3">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item border border-black">
                <div
                  onClick={() => handleSingleSelection(dataItem.id)}
                  className="title border border-black flex space justify-between font-bold"
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {selected === dataItem.id ? <div className="content">{dataItem.answer}</div> : null}
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
