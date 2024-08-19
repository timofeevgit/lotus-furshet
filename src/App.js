import React from 'react';
import './App.css';
import {AppHeader} from '../src/components/app-header/index';
import {Carousel} from '../src/components/carousel/index';
import { Quote } from './components/quote';
import { MenuCardsElement } from './components/menu-cards-element';
import { MenuCards } from './components/menu-cards';
import { CarouselElement } from './components/carousel-element';
import { AppFooter } from './components/app-footer';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Carousel />
      <CarouselElement /> {/* Не должно быть тут */}
      <Quote />
      <MenuCards />
      <MenuCardsElement /> {/* Не должно быть тут */}
      <Quote />
      <MenuCards />
      <Carousel />
      <AppFooter />
    </div>
  );
}

export default App;