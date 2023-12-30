import "./AppartementEntete.scss";

function AppartementEntete() {
  return (
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
  )
}

export default AppartementEntete