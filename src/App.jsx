import { useState } from 'react';
import './App.css';
import { Navbar } from './component/hero component/navbar.jsx';
import { Frontpage } from './component/hero component/front-page.jsx';
import { Services } from './component/our-services.jsx';
import { data } from './assets/data/data.js';
function App() {
  return (
    <>
      <Navbar />
      <Frontpage />
      <Services data={data} />
    </>
  );
}

export default App;
