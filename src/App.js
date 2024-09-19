import React from "react";
import "./App.css";
import { AppHeader } from "../src/components/app-header/index";
import { Carousel } from "../src/components/carousel/index";
import { QuoteFirst, QuoteSecond, QuoteThird } from "./components/quote";
import { Replies } from "./components/replies";
import { MenuCards } from "./components/menu-cards";
import { Faq } from "./components/faq";
import { AppFooter } from "./components/app-footer";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Carousel />
      <QuoteFirst />
      <MenuCards />
      <QuoteSecond />
      <Faq />
      <Replies />
      <QuoteThird />
      <AppFooter />
    </div>
  );
}

export default App;
