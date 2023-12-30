import Collapse from "../../components/collapse/Collapse.jsx";
import BannerAboutPage from "../../layout/banner/BannerAboutPage.jsx";
import Container from "../../layout/container/Container.jsx";

function Apropos() {
  return (
    <>
    <Container> 
    <BannerAboutPage/>
    <Collapse/>
    <Collapse/>
    <Collapse/>
    <Collapse/>
    </Container>
    </>
  )
}

export default Apropos