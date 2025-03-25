import { useState } from 'react';
import './App.css';
import { Navbar } from './component/hero component/navbar.jsx';
import { Frontpage } from './component/hero component/front-page.jsx';
import { Services } from './component/our-services.jsx';
import { articleData, data } from './assets/data/data.js';
import { Customer } from './component/customer.jsx';
import { Article } from './component/article.jsx';
import { Footer } from './component/footer.jsx';
function App() {
  return (
    <>
      <Navbar />
      <Frontpage
        heaeding={'Virtual healthcare for you'}
        body={
          'Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone'
        }
        btnContent={'Consult today'}
        img={1}
      />
      <Services data={data} />
      <Frontpage
        heaeding={'Leading healthcare providers'}
        body={
          'Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online foreveryone. To us, it s not just work. We take pride in the solutions we deliver'
        }
        btnContent={'Learn more'}
        img={3}
        className={'front-page front-page2'}
      />
      <Frontpage
        heaeding={'Download our mobile apps'}
        body={
          'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely'
        }
        btnContent={'Download'}
        img={2}
      />
      <Customer />
      <Article data={articleData} />
      <Footer />
    </>
  );
}

export default App;
