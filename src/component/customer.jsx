import userPicture from '../assets/image/Mask Group.png';
import back from '../assets/image/Vector.png';
import dot from '../assets/image/Group (1).png';
import '../styles/customer.css';
import slider from '../assets/image/slider.png';
export function Customer() {
  return (
    <div className='customer'>
      <div className='review-root'>
        <img src={dot} alt='' className='dot-group' />
        <h2>What our customer are saying</h2>
        <div className='underline'></div>
        <div className='review'>
          <div className='profile'>
            <img src={userPicture} alt='picture' />
            <div>
              <p className='name'>Edward Newgate</p>
              <p className='role'>Founder Circle</p>
            </div>
          </div>
          <div className='comment'>
            “Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely”
          </div>
        </div>
      </div>
      <div className='navigator'>
        <img src={back} alt='back' />
        <img src={slider} alt='' className='slider' />
        <img src='../../../src/assets/image/Frame (2).png' alt='back' />
      </div>
    </div>
  );
}
