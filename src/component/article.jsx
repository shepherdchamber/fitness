import next from '../assets/image/Frame (2).png';
import waterMark from '../assets/image/watermark.png';
import dot from '../assets/image/Group (1).png';
import '../styles/article.css';
export function Article({ data }) {
  return (
    <div className='article-root'>
      <h2 className='head'>Check out our latest article</h2>
      <div className='underline'></div>
      <div className='article-cont'>
        {data.map((props) => (
          <div className='article'>
            <img
              src={`../../src/assets/image/Mask Group${props.img}.png`}
              alt='patient'
              className='thumbnail'
            />
            <div className='context'>
              <h2 className='heading'>{props.heading}</h2>
              <p className='body'>{props.body}</p>
              <div className='read-more'>
                <p>Read More</p>
                <img src={next} alt='' />
              </div>
            </div>
          </div>
        ))}
      </div>
      <button>View all</button>
      <img src={waterMark} alt='' className='watermark' />
      <img src={dot} alt='' className='dot' />
    </div>
  );
}
