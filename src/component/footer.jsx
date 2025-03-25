import logo from '../assets/image/Ellipse 8.png';
import '../styles/footer.css';
export const Footer = () => {
  return (
    <div className='footer'>
      <div className='section1'>
        <div className='logo-container'>
          <div
            className='eclipse'
            style={{ color: 'rgb(0, 162, 255)', backgroundColor: 'white' }}
          >
            T
          </div>
          <p style={{ fontSize: '1.5rem' }} className='trafalgar'>
            Trafalgar
          </p>
        </div>
        <p className='mission'>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <p className='copyright'>
          ©Trafalgar PTY LTD 2020. All rights reserved
        </p>
      </div>
      <div className='company-sect'>
        <h2>Comany</h2>
        <ul>
          <li>About</li>
          <li>Testimonials</li>
          <li>Find a doctor</li>
          <li>Apps</li>
        </ul>
      </div>
      <div className='region-sect'>
        <h2>Region</h2>
        <ul>
          <li>Indonesia</li>
          <li>Singapore</li>
          <li>Hongkong</li>
          <li>Canada</li>
        </ul>
      </div>
      <div className='help-sect'>
        <h2>Help</h2>
        <ul>
          <li>Help center</li>
          <li>Contact support</li>
          <li>Instructions</li>
          <li>How it works</li>
        </ul>
      </div>
    </div>
  );
};
