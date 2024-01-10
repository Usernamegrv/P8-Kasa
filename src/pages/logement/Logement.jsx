import { useState, useEffect } from "react";
import Collapse from "../../components/collapse/Collapse.jsx";
import "./Logement.scss";
import ImageBanner from "../../components/imageBanner/ImageBanner.jsx";
import AppartementEntete from "../../components/appartementEntete/AppartementEntete.jsx";
import { useParams, Navigate } from "react-router-dom";

function Logement() {
  const Params = useParams();
  const [selectedFlat, setSelectedFlat] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch("../db.json")
      .then((res) => res.json())
      .then((flats) => {
        const flat = flats.find((flat) => flat.id === Params.id);
        setSelectedFlat(flat);
        setLoading(false);
      })
      .catch(console.error);
  }, [Params.id]);

  if (loading) {
    return <div>...Loading</div>;
  }

  if (!selectedFlat) {
    return <Navigate to="/Error" />;
  }

  const renderContent = (isList) => {
    if (isList) {
      return (
        <ul>
          {selectedFlat.equipments.map((eq, index) => (
            <li key={index}>{eq}</li>
          ))}
        </ul>
      );
    } else {
      return selectedFlat.equipment.map((eq, index) => (
        <div key={index}>{eq}</div>
      ));
    }
  };

  return (
    <div className="logement-page">
      <ImageBanner pictures={selectedFlat.pictures} />
      <AppartementEntete selectedFlat={selectedFlat} />
      <div className="conteneur-collapse">
        <Collapse title="Description" content={selectedFlat.description} />
        <Collapse title="Equipements" content={renderContent(true)} />
      </div>
    </div>
  );
}

export default Logement;
