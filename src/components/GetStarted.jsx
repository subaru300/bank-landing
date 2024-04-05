import styles from '../styles';
import { arrowUp } from '../assets';

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer hover:scale-[1.1] duration-75 hover:rotate-[5deg] active:scale-[0.9]`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
          <span className='text-gradient'>Get</span>
        </p>
        <img
          src={arrowUp}
          alt='arrow'
          className='w-[32px] h-[32px] object-contain'
        />
      </div>
      <p className='font-poppins font-medium text-[18px] leading-[23px]'>
        <span className='text-gradient'>Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
