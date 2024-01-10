import Banner from "../../layout/banner/Banner.jsx";
import GalleryAppartement from "../../components/galleryAppartement/GalleryAppartement.jsx";
import Container from "../../layout/container/Container.jsx";

function Home() {
  return (
    <div>
      <Container>
        <Banner isHomePage={true} />
        <GalleryAppartement />
      </Container>
    </div>
  );
}

export default Home;
