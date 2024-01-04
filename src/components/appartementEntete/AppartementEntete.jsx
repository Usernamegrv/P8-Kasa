import "./AppartementEntete.scss";

function AppartementEntete(props) {
  const flat = props.selectedFlat;
  const { name } = flat.host;
  const [firstName, lastName] = name.split(" ");

  return (
    <div className="logement-entete">
      <div className="logement-titre">
        <h1>{flat.title}</h1>
        <h2>{flat.location}</h2>
        <div className="logement-tags">
          {flat.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="logement-owner-details">
        <div className="logement-owner">
          <h3>
            <span>{firstName}</span>
            <span>{lastName}</span>
          </h3>
          <div className="logement-owner-badge">
            <img src={flat.host.picture} alt="" />
          </div>
        </div>
        <div className="owner-rate">
          {[1, 2, 3, 4, 5].map((num, index) => (
            <span
              key={index}
              className={flat?.rating && flat.rating >= num ? "on" : ""}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AppartementEntete;
