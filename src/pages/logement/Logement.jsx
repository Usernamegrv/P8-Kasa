import ApptDescription from "../../components/apptDescription/ApptDescription.jsx";
import "./Logement.scss";

function Logement() {
  return (
    <div className="logement-page">
      <div>
        <img src="../cover-appartementCosy.jpg" alt="image de couverture" />
      </div>
      <div className="logement-entete">
        <div className="logement-titre">
          <h1>Cozy loft on canal Saint Martin</h1>
          <h2>Paris ile de france</h2>
          <div className="logement-tags">
            <span>Cozy</span>
            <span>Canal</span>
            <span>Paris 10</span>
          </div>
        </div>
        <div className="logement-owner-details">
          <div className="logement-owner">
            <h3>
              <span>Alexandre</span>
              <span>Dumas</span>
            </h3>
            <div className="logement-owner-badge"></div>
          </div>
          <div className="owner-rate">
            <span className="on">★</span>
            <span className="on">★</span>
            <span className="on">★</span>
            <span className="off">★</span>
            <span className="off">★</span>
          </div>
        </div>
      </div>
      <div className="conteneur-apptDescription">
        <ApptDescription />
        <ApptDescription />
      </div>
    </div>
  );
}

export default Logement;
