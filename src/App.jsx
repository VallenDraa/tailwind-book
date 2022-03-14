import React from 'react';
import ForEveryoneHeader from './ForEveryone/ForEveryoneHeader';
import ForEveryoneFooter from './ForEveryone/ForEveryoneFooter';
import Header from './Header/Header';
import Benefit from './Benefit/Benefit';

export default function App() {
  return (
    <>
      <Header />
      <ForEveryoneHeader />
      <ForEveryoneFooter />
      <Benefit />
    </>
  );
}
