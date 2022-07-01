import React from 'react';
import data from './data';
import Card from './components/card';
import Navbar from './components/navbar';


export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div>
      <Navbar />
      {cards}
    </div>
  )
}

