import React from 'react';
import './App.css';
import {AppHeader} from '../src/components/app-header/index';
import {Carousel} from '../src/components/carousel/index';
import { QuoteFirst, QuoteSecond } from './components/quote';
import { MenuCardsElement } from './components/menu-cards-element';
import { MenuCards } from './components/menu-cards';
import { CarouselElement } from './components/carousel-element';
import { AppFooter } from './components/app-footer';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Carousel />
      <QuoteFirst />
      <MenuCards />
      <MenuCardsElement /> {/* Не должно быть тут */}
      <QuoteSecond />
      <MenuCards />
      <Carousel />
      <AppFooter />
    </div>
  );
}

export default App;