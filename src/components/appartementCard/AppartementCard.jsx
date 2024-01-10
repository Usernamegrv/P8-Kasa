import "./AppartementCard.scss";
import { Link } from "react-router-dom";

function AppartementCard(props) {
  return (
    <Link
      to={`/logement/${props.id}`}
      state={{
        appartementId: props.id,
      }}
      className="appartement"
    >
      <img src={props.imageurl} alt={props.title} />
      <div className="appartement-titre">{props.title}</div>
    </Link>
  );
}

export default AppartementCard;
