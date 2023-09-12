import laptop from "../images/laptop.png";

const Who = () => {
  return (
    <div className="flex flex-wrap items-center flex-wrap justify-around py-[3rem] px-[1rem] gap-[2%]">
      <aside className="md:basis-[40%] basis-auto text-white md:p-[2rem] p-[1rem]">
        <h2 className="text-4xl font-bold">Who We Are</h2>
        <p className="my-[1rem]">
          At nanocodes we have a passionate team of programming experts who are
          committed to transforming the digital world.
        </p>
        <p className="my-[1rem]">
          Our mission is to create cutting-edge software solutions and
          applications that redefine innovation and drive businesses forward.
        </p>
        <div className="bg-gradient-to-br from-blue-600 via-blue-600 to-red-500 rounded-sm w-full h-[10px]"></div>
      </aside>
      <aside className="md:basis-[40%] basis-auto">
        <img src={laptop} alt="" />
      </aside>
    </div>
  );
};

export default Who;
