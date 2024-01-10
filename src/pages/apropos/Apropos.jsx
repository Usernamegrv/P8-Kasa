import { useEffect, useState } from "react";
import Collapse from "../../components/collapse/Collapse.jsx";
import Banner from "../../layout/banner/Banner.jsx";
import Container from "../../layout/container/Container.jsx";
import { fetchAboutData } from "../../utils/api";

function Apropos() {
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchAboutData();
        setAboutData(data);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Container>
        <Banner isHomePage={false} />
        {aboutData.map((item) => (
          <Collapse
            key={item.id}
            title={item.title}
            content={item.description}
            height={item.height}
          />
        ))}
      </Container>
    </>
  );
}

export default Apropos;
