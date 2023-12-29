import "./Logement.scss";

function Logement() {
  return (
    <div className="logement-page">
      <div>
        <img src="../cover-appartementCosy.jpg" alt="image de couverture" />
      </div>
      <div className="logement-entete">
        <div className="logement-titre">
          <h1>Crazy loft on canal Saint Martin</h1>
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
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
          </div>
        </div>
      </div>
      <div className="logement-description">
        <p>Description</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          autem delectus facilis ab ut fugiat recusandae quidem, assumenda
          veritatis temporibus, placeat libero. Accusamus corrupti at magni
          exercitationem totam. Voluptatum minus quam cumque repellendus
          dignissimos sed, aspernatur dicta ratione delectus! Ullam repellat
          excepturi nulla. Magnam fuga, voluptas optio perspiciatis quasi ullam!
        </p>
      </div>
      <div className="logement-description">
        <p>Description</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          autem delectus facilis ab ut fugiat recusandae quidem, assumenda
          veritatis temporibus, placeat libero. Accusamus corrupti at magni
          exercitationem totam. Voluptatum minus quam cumque repellendus
          dignissimos sed, aspernatur dicta ratione delectus! Ullam repellat
          excepturi nulla. Magnam fuga, voluptas optio perspiciatis quasi ullam!
        </p>
      </div>
    </div>
  );
}

export default Logement;
