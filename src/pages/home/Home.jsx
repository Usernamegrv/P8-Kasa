
import Banner from '../../components/banner/Banner.jsx';
import GalleryAppartement from '../../components/galleryAppartement/GalleryAppartement.jsx';
import Container from '../../components/container/Container.jsx';

function Home() {
  return (
    <div>
      <Container> 
      <Banner/>
      <GalleryAppartement/>
      </Container>
    </div>
  )
}

export default Home