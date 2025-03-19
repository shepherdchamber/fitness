import '../../styles/navbar.css';

export function Navbar() {
  return (
    <div className='nav-bar'>
      <div className='logo-container'>
        <div className='eclipse'>T</div>
        <p className='trafalgar'>Trafalgar</p>
      </div>
      <div className='top-nav'>
        <ul>
          <li>About us</li>
          <li>testimonials</li>
          <li>apps</li>
          <li>find doctor</li>
          <li>home</li>
        </ul>
      </div>
    </div>
  );
}
