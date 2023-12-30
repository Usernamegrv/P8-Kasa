import Collapse from "../../components/collapse/Collapse.jsx";
import "./Logement.scss";
import ImageBanner from "../../components/imageBanner/ImageBanner.jsx";
import AppartementEntete from "../../components/appartementEntete/AppartementEntete.jsx";


function Logement() {
  return (
   
    <div className="logement-page">
      <ImageBanner/>
      <AppartementEntete/>
      <div className="conteneur-collapse">
        <Collapse />
        <Collapse />
      </div>
    </div>
    
  );
}

export default Logement;
