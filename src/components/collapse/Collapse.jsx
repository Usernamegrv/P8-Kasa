import "./Collapse.scss";

function Collapse(props) {
  return (
    <div className="collapse-description">
      <p className="description-titre">
        <span>{props.title}</span>
        <i className="fa-solid fa-chevron-up"></i>
      </p>
      <p className="description-contenu">{props.content}</p>
    </div>
  );
}

export default Collapse;
