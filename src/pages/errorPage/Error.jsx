import "./Error.scss";
import { Link } from "react-router-dom";



function Error() {
  return (
    <div className="error-page">
      <h1>404</h1>
      <h2>Oops! La page que vous demandez n'existe pas</h2>
      <Link to="/Home">Retourner sur la page d'accueil</Link>
    </div>
    
  )
}

export default Error