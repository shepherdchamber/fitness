import '../../styles/front-page.css';
import '../../../src/assets/image/trafalgar-header illustration 1.png';
export function Frontpage({
  heaeding,
  body,
  btnContent,
  img,
  flexDirection,
  margin,
  className = 'front-page',
}) {
  return (
    <div className={className} style={{ flexDirection }}>
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
        <h2>{heaeding}</h2>
        <div className='underline'></div>
        <p>{body}</p>
        <button className='btn'>{btnContent}</button>
      </div>
      <div style={{ marginLeft: margin }} className='img'>
        <img
          src={`../../../src/assets/image/trafalgar-header illustration ${img}.png`}
          alt='utu'
        />
      </div>
    </div>
  );
}
