import React, { useState } from "react";
import SubRadio from "./SubRadio/SubRadio";

function Radio({ id, text, active, child, divC, svgC, handleChange }) {
  const classes = {
    divClass:
      "bg-white border-2 rounded-xl border-gray-300 w-4 h-4 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-gray-300 cursor-pointer",
    divClassActive:
      "bg-red-500 border-2 rounded-xl border-red-500 w-4 h-4 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-red-500 cursor-pointer",
    svgClass: "fill-current hidden w-2 h-2 text-red-600 cursor-pointer",
    svgClassActive: "fill-current block w-2 h-2 text-red-600 cursor-pointer",
  };
  const [radioItems, setRadioItems] = useState([
    {
      id: "0",
      text: "Student didn't showup for the class.",
      active: false,
    },
    {
      id: "1",
      text: "Student didn't show any interest.",
      active: false,
    },
    {
      id: "2",
      text: "Student got disconnected.",
      active: false,
    },
    {
      id: "3",
      text: "I got disconnected.",
      active: false,
    },
    {
      id: "4",
      text: "Other reason",
      active: false,
      child: (
        <textarea
          placeholder="Type here"
          className="w-full h-auto text-grey-darkest border p-2 m-1 focus:outline-none bg-white"
          id="tt"
        ></textarea>
      ),
    },
  ]);

  function handleChangeSubRadio(id) {
    const items = [...radioItems];
    for (let i = 0; i < items.length; i++) {
      if (parseInt(id) === i) {
        items[i].active = !items[i].active;
      } else {
        items[i].active = false;
      }
    }
    setRadioItems(items);
  }
  return (
    <>
      <div className="flex items-center my-4">
        <input
          type="radio"
          id={id}
          value={id}
          onClick={() => handleChange(id)}
          className="opacity-0 absolute h-8 w-8"
        />
        <div className={divC}>
          <svg
            className={svgC}
            version="1.1"
            viewBox="0 0 17 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <g transform="translate(-9 -11)" fill="white" fillRule="nonzero">
                <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
              </g>
            </g>
          </svg>
        </div>
        <label htmlFor={id}>{text}</label>
      </div>
      {active && child ? (
        <div className="ml-6">
          {radioItems.map((x, i) => {
            return (
              <SubRadio
                key={i}
                id={x.id}
                text={x.text}
                active={x.active}
                child={x.child || ""}
                divC={x.active ? classes.divClassActive : classes.divClass}
                svgC={x.active ? classes.svgClassActive : classes.svgClass}
                handleChange={handleChangeSubRadio}
              />
            );
          })}
        </div>
      ) : null}
    </>
  );
}

export default Radio;
