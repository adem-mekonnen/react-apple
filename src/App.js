import "./css/styles.css";
import "./css/bootstrap.css";
//import "./commonResource/js/bootstrap.js";
import Header from "./components/Header/Header.js";

import Footer from "./components/Footer/Footer.js";
import Main from "./components/Main/Main.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
