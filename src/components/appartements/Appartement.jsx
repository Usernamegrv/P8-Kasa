
import './Appartement.scss';
import {Link} from "react-router-dom";


function Appartement() {
  return (
    <Link to="/logement" className="appartement">
        <div className="appartement-titre">Titre de la location</div>
        </Link>
  )
}

export default Appartement