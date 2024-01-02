
import './AppartementCard.scss';
import {Link} from "react-router-dom";


function AppartementCard(props) {
  console.log("props dans appt card", props);
  return (
    <Link to="/logement" className="appartement">
      <img src={props.imageurl} alt={props.title}/>
        <div className="appartement-titre">{props.title}</div>
        </Link>
  )
}

export default AppartementCard