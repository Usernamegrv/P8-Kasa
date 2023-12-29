import './GalleryAppartement.scss';
import Appartement from '../Appartements/Appartement.jsx';

function GalleryAppartement() {
  return (
    <div className="gallery">
        <Appartement/>
        <Appartement/>
        <Appartement/>
        <Appartement/>
        <Appartement/>
        <Appartement/>
    </div>
  )
}

export default GalleryAppartement