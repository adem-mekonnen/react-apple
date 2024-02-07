import "./css/styles.css";
import "./css/bootstrap.css";
import Main from "./components/Main/Main.js";
import Mac from "./components/Pages/Mac/Mac.js";
import Ipad from "./components/Pages/Ipad/Ipad.js";
import Iphone from "./components/Pages/Iphone/Iphone.js";
import Tv from "./components/Pages/Tv/Tv.js";
import Watch from "./components/Pages/Watch/Watch.js";
import Support from "./components/Pages/Support/Support.js";
import Product from "./components/Pages/Product/Product.js";
//import User from "./components/Pages/User/User.js";
import Four04 from "./components/Pages/Four404/Four04.js";
import Music from "./components/Pages/Music/Music.js";
import Cart from "./components/Pages/Cart/Cart.js";

import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/Pages/SharedLayout/SharedLayout.js";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Main />} />
          {/* <Main />
        {/* <Youtube /> */}
          <Route path="mac" element={<Mac />} />
          <Route path="iphone" element={<Iphone />} />
          <Route path="iphone/:productID" element={<Product />} />
          <Route path="ipad" element={<Ipad />} />
          <Route path="watch" element={<Watch />} />
          <Route path="tv" element={<Tv />} />
          <Route path="music" element={<Music />} />
          <Route path="support" element={<Support />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<Four04 />} />
        </Route>

        {/*
        <Mac />
        <Iphone />
        <Ipad />
        <Watch />
        <Tv />
        <Music />
        <Support /> */}
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
