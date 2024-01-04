import "./ImageBanner.scss";

function ImageBanner(props) {
  return (
    <div className="image-banner">
      <img src={props.imageUrl} alt="image de couverture" />
    </div>
  );
}

export default ImageBanner;
