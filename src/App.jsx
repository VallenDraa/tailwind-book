import React from 'react';
import ForEveryoneHeader from './Pages/ForEveryone/ForEveryoneHeader';
import ForEveryoneFooter from './Pages/ForEveryone/ForEveryoneFooter';
import Header from './Pages/Header/Header';
import Benefit from './Pages/Benefit/Benefit';
import Price from './Pages/Price/Price';
import Writer from './Pages/Writer/Writer';
import Testimonials from './Pages/Testimonials/Testimonials';

export default function App() {
  return (
    <>
      <Header />
      <ForEveryoneHeader />
      <ForEveryoneFooter />
      <Benefit />
      <Price />
      <Writer />
      <Testimonials />
    </>
  );
}
