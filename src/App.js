import "./css/styles.css";
import "./css/bootstrap.css";
//import "./commonResource/js/bootstrap.js";
import Header from "./functional components/header/Header";
import AppleAlert from "./functional components/appleMain/AppleAlert";
import Footer from "./functional components/footer/Footer.js";
import IpadProSection from "./functional components/appleSectionOne/IpadProSection";
import MacBook from "./functional components/appleSectionTwo/MacBook.js";
import IphonePro from "./functional components/appleSectionThree/IphonePro.js";
import Iphone from "./functional components/appleSectionFour/Iphone.js";
import TvShow from "./functional components/appleSectionFive/TvShow.js";
import LeftSideContainer from "./functional components/appleSectionSix/LeftSideContainer.js";
function App() {
  return (
    <div className="App">
      <Header />
      <AppleAlert />
      <IpadProSection />
      <MacBook />
      <IphonePro />
      <Iphone />
      <TvShow />
      <LeftSideContainer />
      <Footer />
    </div>
  );
}

export default App;
