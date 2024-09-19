import React, {useRef} from "react";
import {ReactComponent as ArrowIcon} from "../../../images/arrow-down.svg"

export const AccordionItem = ({item, onClick, isOpen}) => {
  const itemRef = useRef(null);
  return (
    <li className="item">
      <button className="header" 
      onClick={() => onClick()}>{item.question}
      <ArrowIcon className={`accordion-arrow ${isOpen ? "active" : ""}`} />
      </button>
      <div className="collapse"
      style={
        isOpen ? {height: itemRef.current.scrollHeight} : {height: "0px"}
      }>
        <div className="body" ref={itemRef}>{item.answer}</div>
      </div>
    </li>
  );
}