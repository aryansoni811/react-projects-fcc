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
      <h1 className="text-3xl font-bold text-center underline text-red-700 my-4 ">Accordion</h1>
      <div className="wrapper text-center px-5">
        <div className="accordion-container flex flex-col mx-auto gap-3 max-w-[1000px]">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item border border-black">
                <div
                  onClick={() => handleSingleSelection(dataItem.id)}
                  className="title px-3 border border-black bg-emerald-500 flex space justify-between font-bold"
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {selected === dataItem.id ? (
                  <div className="content bg-emerald-300 p-2">{dataItem.answer}</div>
                ) : null}
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
