import '../../styles/navbar.css';
import icon from '../../../src/assets/image/menu.png';
import { useState } from 'react';

export function Navbar() {
  const [show, setShow] = useState(true);
  const toggleShow = () => {
    setShow(!show);
  };
  return (
    <div className='nav-bar'>
      <div className='logo-container'>
        <div className='eclipse'>T</div>
        <p className='trafalgar'>Trafalgar</p>
      </div>
      <div className='top-nav'>
        <ul className={show ? 'hide-menu' : 'show-menu'}>
          <li>About us</li>
          <li>testimonials</li>
          <li>apps</li>
          <li>find doctor</li>
          <li>home</li>
        </ul>
      </div>
      <div className='icon'>
        <img onClick={toggleShow} src={icon} alt='' />
      </div>
    </div>
  );
}
