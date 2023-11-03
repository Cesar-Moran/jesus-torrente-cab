import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About.tsx";
import DefaultNavbar from "./components/Navbar.tsx";
import Designs from "./pages/Designs.tsx";
import Contact from "./pages/Contact.tsx";
import MyAccount from "./pages/MyAccount.tsx";
import Shop from "./pages/Shop.tsx";
import BCA from "./pages/BCA.tsx";
import Footer from "./components/Footer.tsx";
import PageNotFound from "./components/PageNotFound.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <DefaultNavbar />
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/torrentekcb/designs" element={<Designs />}></Route>
        <Route path="/torrentekcb/about" element={<About />}></Route>
        <Route path="/torrentekcb/contact" element={<Contact />}></Route>
        <Route path="/torrentekcb/myaccount" element={<MyAccount />}></Route>
        <Route path="/torrentekcb/shop" element={<Shop />}></Route>
        <Route path="/torrentekcb/becomeadealer" element={<BCA />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
