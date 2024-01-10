import { useState } from "react";
import "./Collapse.scss";

function Collapse(props) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  const contentClass =
    (isContentVisible ? "visible " : "hidden ") +
    "description-contenu " +
    (props.height ? `height-${props.height}` : "");
  const chevronClass =
    (isContentVisible ? "fa-chevron-up " : "fa-chevron-down ") + "fas";
  return (
    <div className="collapse-description">
      <p className="description-titre" onClick={showContent}>
        <span>{props.title}</span>
        <i className={chevronClass}></i>
      </p>

      <div className={contentClass}>{props.content}</div>
    </div>
  );
}

export default Collapse;
