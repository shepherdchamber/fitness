import '../styles/services.css';
import '../../src/assets/image/Frame.png';

export function Services({ data }) {
  return (
    <div className='services'>
      <h1 style={{ fontSize: '2.25rem' }} className='h1'>
        Our services
      </h1>
      <div className='underline'></div>
      <div className='about-service'>
        <p>
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </p>
      </div>
      <img
        className='watermark'
        src='../../src/assets/image/watermark.png'
        alt=''
      />
      <div className='navigation'>
        {data.map({ img, title, context }, (i) => (
          <div key={i} className='nav-box'>
            <img className='logo' src={img} alt='' />
            <p className='context'>
              <span>{title}</span>
              {context}
            </p>
          </div>
        ))}
      </div>
      <button>Learn more</button>
    </div>
  );
}
