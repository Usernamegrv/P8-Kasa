import "./ImageBanner.scss";
import { useState } from "react";

function ImageBanner(props) {
  const pictures = props.pictures;

  const [currentPicture, setCurrentPicture] = useState(0);

  const getClassName = (i) => {
    if (i === currentPicture) return "show";
    return "";
  };

  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };

  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1;
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1);
      return;
    }
    setCurrentPicture(currentPicture - 1);
  };
  return (
    <div className="image-banner">
      <div className="image-container">
        {pictures.map((pic, i) => (
          <img key={pic} src={pic} alt="" className={getClassName(i)} />
        ))}
      </div>
      {pictures.length > 1 && (
        <>
          <button className="btn btn-next" onClick={moveToNext}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          <button className="btn btn-previous" onClick={moveToPrevious}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
        </>
      )}
      {pictures.length > 1 && (
        <span className="slide-counter">
          {currentPicture + 1} / {pictures.length}
        </span>
      )}
    </div>
  );
}

export default ImageBanner;
