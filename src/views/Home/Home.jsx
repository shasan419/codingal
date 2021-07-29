import React, { useState } from "react";
import Nav from "../../components/Nav/Nav";
import { Link } from "react-router-dom";
import Timer from "../../components/Timer/Timer";
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal";
import styled from "styled-components";
import ModalContent from "./ModalContent/ModalContent";

const EOCModal = Modal.styled`
  width: 90%;
  max-width:720px;
  height: auto;
  border-radius: 10px;
  margin:auto;
  position: relative;
  background-color: white;
  opacity: 100%;
  transition : all 1s ease-in-out;`;
const FadingBackground = styled(BaseModalBackground)`
  opacity: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  overflow-y: scroll;
  transition: all 1s ease-in-out;
`;
export default function Home() {
  const [stopTimer, setStopTimer] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal(x) {
    if (x === "open" || x === "cancel") {
      setIsOpen(!isOpen);
      setStopTimer(false);
    } else {
      setIsOpen(!isOpen);
      setStopTimer(true);
    }
  }
  return (
    <ModalProvider backgroundComponent={FadingBackground}>
      <Nav
        title={"Trail Lesson Grade [1-3]"}
        seperator={
          <div
            className="hidden md:flex items-center ml-1"
            style={{ borderLeft: "1px solid lightgray" }}
          ></div>
        }
        data={
          <div className="hidden md:flex items-center space-x-1">
            <span className="py-5 px-3">
              <Timer stop={stopTimer} />
            </span>
            <Link
              to="/passengers"
              className="py-5 px-3 text-gray-700 hover:text-gray-900 cursor-pointer"
            >
              Passengers
            </Link>
            <button
              onClick={() => toggleModal("open")}
              className="py-2 px-3 bg-red-400 hover:bg-red-300 text-white hover:text-white rounded transition duration-300 cursor-pointer"
            >
              End Class
            </button>
          </div>
        }
        dataMB={
          <>
            <Link
              to="/passengers"
              className="block py-2 px-4 text-sm hover:bg-gray-200 place-self-center cursor-pointer w-3/4"
            >
              Passengers
            </Link>
            <span className="block py-2 px-4 text-sm place-self-center w-3/4">
              Trail Lesson Grade [1-3]
            </span>
            <span className="block py-2 px-4 text-sm place-self-center w-3/4">
              <Timer stop={stopTimer} />
            </span>
            <hr className="py-2 place-self-center w-3/4" />
            <button
              onClick={() => toggleModal("open")}
              className="block py-2 px-4 text-sm bg-red-400 hover:bg-red-300 text-white hover:text-white rounded transition duration-300 place-self-center cursor-pointer w-3/4"
            >
              End Class
            </button>
          </>
        }
      />
      <EOCModal
        isOpen={isOpen}
        onBackgroundClick={() => toggleModal("cancel")}
        onEscapeKeydown={() => toggleModal("cancel")}
        className="py-4 px-5"
      >
        <div className="pb-5">
          <svg
            x-show="showMenu"
            className="w-6 h-6 float-right cursor-pointer"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => toggleModal("cancel")}
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </div>
        <ModalContent toggleModal={toggleModal} />
      </EOCModal>
    </ModalProvider>
  );
}
