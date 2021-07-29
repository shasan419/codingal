import React, { useState } from "react";
import Radio from "./Radio/Radio";

function ModalContent({ toggleModal }) {
  const classes = {
    divClass:
      "bg-white border-2 rounded-xl border-gray-300 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-gray-300 cursor-pointer",
    divClassActive:
      "bg-red-500 border-2 rounded-xl border-red-500 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-red-500 cursor-pointer",
    svgClass: "fill-current hidden w-3 h-3 text-red-600 cursor-pointer",
    svgClassActive: "fill-current block w-3 h-3 text-red-600 cursor-pointer",
  };
  const [radioItems, setRadioItems] = useState([
    {
      id: "0",
      text: "Class completed",
      active: false,
      child: false,
    },
    {
      id: "1",
      text: "Class interrupted/aborted",
      active: false,
      child: true,
    },
  ]);

  function handleChangeRadio(id) {
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
    <div className="mx-4">
      <span className="font-bold my-6 text-2xl">
        Select a reason to end class
      </span>
      <div>
        {radioItems.map((x, i) => {
          return (
            <Radio
              key={i}
              id={x.id}
              text={x.text}
              active={x.active}
              child={x.child}
              divC={x.active ? classes.divClassActive : classes.divClass}
              svgC={x.active ? classes.svgClassActive : classes.svgClass}
              handleChange={handleChangeRadio}
            />
          );
        })}
      </div>
      <div className="flex items-start mr-4 mb-2">
        <button
          onClick={() => toggleModal("")}
          className="block py-2 px-4 text-sm bg-red-400 hover:bg-red-300 text-white hover:text-white rounded transition duration-300 cursor-pointer"
        >
          End Class
        </button>
        <button
          onClick={() => toggleModal("cancel")}
          className="block py-2 px-4 text-sm bg-white text-red-400 hover:text-red-800 rounded transition duration-300 cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ModalContent;
