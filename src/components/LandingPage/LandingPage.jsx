import landingPageImage from "./assets/images/landing-page.png";

const LandingPage = () => {
  const styles = {
    backgroundImage: `url(${landingPageImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={styles}>
      <h1>this is the landing page</h1>
    </div>
  );
};

export default LandingPage;
