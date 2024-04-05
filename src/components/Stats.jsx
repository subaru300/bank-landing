import { stats } from '../constants';
import styles from '../styles';

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((item, index) => (
      <div
        key={item.id}
        className={`flex-1 flex justify-start items-center flex-row m-3`}
      >
        <h4 className='font-poppins font-semibold sx:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>
          {item.value}
        </h4>
        <p className='font-poppins font-normal sx:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>
          {item.title}
        </p>
        {index !== stats.length - 1 && (
          <div className='bg-white h-[10px] w-[1px] border-solid border-1 border-white mt-3 mb-3 mx-auto hidden sm:block' />
        )}
      </div>
    ))}
  </section>
);

export default Stats;
