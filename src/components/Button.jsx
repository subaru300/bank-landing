const Button = ({ styles }) => {
  return (
    <button
      type='button'
      className={`py-4 px-6 bg-blue-gradient ${styles} font-poppins font-medium text-[18px] text-primary outline-none rounded-md hover:scale-[1.05] duration-75 active:scale-[0.95]`}
    >
      Get Started
    </button>
  );
};

export default Button;
