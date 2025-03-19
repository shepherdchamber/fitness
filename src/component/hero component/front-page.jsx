import '../../styles/front-page.css';
import '../../../src/assets/image/trafalgar-header illustration 1.png';
export function Frontpage() {
  return (
    <div className='front-page'>
      <div className='dot-group'>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
      </div>
      <div className='front-page-text'>
        <h2>Virtual healthcare for you</h2>
        <p>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <button className='btn'>Consult today</button>
      </div>
      <div className='img'>
        <img
          src='../../../src/assets/image/trafalgar-header illustration 1.png'
          alt='utu'
        />
      </div>
    </div>
  );
}
