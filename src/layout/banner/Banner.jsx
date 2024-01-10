import "./Banner.scss";

function Banner({ isHomePage }) {
  const bannerText = isHomePage ? "Chez vous, partout et ailleurs" : null;
  const imageUrl = isHomePage ? "accueil.png" : "image-about.png";

  return (
    <div className="banner">
      <img src={imageUrl} alt="image de couverture" />
      {bannerText && <h1>{bannerText}</h1>}
    </div>
  );
}

export default Banner;
