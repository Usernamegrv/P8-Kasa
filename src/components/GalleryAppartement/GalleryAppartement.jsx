import "./GalleryAppartement.scss";
import AppartementCard from "../appartementCard/AppartementCard.jsx";
import { useState, useEffect } from "react";

function GalleryAppartement() {
  const [appartements, setAppartements] = useState([]);

  useEffect(fetchAppartements, []);

  function fetchAppartements() {
    fetch("db.json")
      .then((res) => res.json())
      .then((res) => setAppartements(res))
      .catch(console.error);
  }

  return (
    <div className="gallery">
      {appartements.map((appartement) => (
        <AppartementCard
          key={appartement.title}
          title={appartement.title}
          imageurl={appartement.cover}
          id={appartement.id}
        />
      ))}
    </div>
  );
}

export default GalleryAppartement;
