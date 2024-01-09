import Collapse from "../../components/collapse/Collapse.jsx";
import BannerAboutPage from "../../layout/banner/BannerAboutPage.jsx";
import Container from "../../layout/container/Container.jsx";

function Apropos() {
  return (
    <>
      <Container>
        <BannerAboutPage />
        <Collapse title="Fiabilité" content="texte de la collapse" />
        <Collapse title="Respect" content="texte de la collapse" />
        <Collapse title="Service" content="texte de la collapse" />
        <Collapse title="Responsabilité" content="texte de la collapse" />
      </Container>
    </>
  );
}

export default Apropos;
