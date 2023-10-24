import React from 'react';
import Header from './components/header/header';
import Button from './components/Button/Button';
import Card from './components/card/Card';


const App = () => {
  return (
    <div>
   <Header></Header>
   <Button>Sort By Date</Button>
   <Card></Card>

    </div>
  );
};

export default App;