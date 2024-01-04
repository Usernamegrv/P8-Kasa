import React, { useState, useEffect } from "react";
import Collapse from "../../components/collapse/Collapse.jsx";
import "./Logement.scss";
import ImageBanner from "../../components/imageBanner/ImageBanner.jsx";
import AppartementEntete from "../../components/appartementEntete/AppartementEntete.jsx";
import { Link, useLocation } from "react-router-dom";

function Logement() {
  const location = useLocation();
  console.log("location:", location);
  console.log("appartement id:", location.state.appartementId);

  const [selectedFlat, setSelectedFlat] = useState(null);

  useEffect(fetchAppartementData, []);

  function fetchAppartementData() {
    fetch("db.json")
      .then((res) => res.json())
      .then((flats) => {
        const flat = flats.find(
          (flat) => flat.id === location.state.appartementId
        );
        setSelectedFlat(flat);
        console.log("selectedFlat:", selectedFlat);
      })
      .catch(console.error);
  }
  if (selectedFlat == null) return <div>...Loading</div>;

  return (
    <div className="logement-page">
      <ImageBanner imageUrl={selectedFlat.cover} />
      <AppartementEntete selectedFlat={selectedFlat} />
      <div className="conteneur-collapse">
        <Collapse title="Description" content={selectedFlat.description} />
        <Collapse
          title="Equipements"
          content={selectedFlat.equipments.map((eq, index) => (
            <li key={index}>{eq}</li>
          ))}
        />
      </div>
    </div>
  );
}

export default Logement;
