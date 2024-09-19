import React from 'react';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Content text="This is my first React Application!🚧" />
      <Content text="Wish me luck...🎢" />
      <Content text="I think I've got it!👨🏻‍🎓" />
      <Footer />
    </div>
  );
}

export default App;