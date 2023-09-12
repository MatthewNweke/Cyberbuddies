import dell from "../images/dell.png";
import key from "../images/keyboard.png";
import watch from "../images/watch.png";
import mouse from "../images/mouse.png";
import useFetch from "../useFetch";

const Nano = () => {
  const { data } = useFetch("https://shop.nanocodes.com.ng/api/");
  console.log(data);
  return (
    <section className=" md:gap-[2%] gap-2 p-[1rem] md:p-auto items-center justify-center my-[9rem]">
      <h2 className="md:text-5xl sm:text-3xl text-lg text-white text-center">
        Nanotech
      </h2>
      <p className="italic mb-[3rem] mt-4 text-white text-center">
        Top Gadgets at Affordable Rates!
      </p>
      <div className="text-white mt-[5rem] place-items-center grid md:grid-cols-3 grid-cols-2">
        {data?.map((info) => {
          console.log(info.image_four);
          return (
            <aside className="md:w-[324px] w-[95%]  md:h-[400px]  bg-gray-300 bg-opacity-10 my-[1rem] backdrop-blur-17 rounded-[7px] p-[1rem]" key={info.id}>
              <img src={info.image_four} alt="" className="w-[95%] m-auto rounded-[7px] object-cover h-[270px]" />
              <div className="flex justify-between gap-[4%] p-[0.5rem]">
                <span className="text-[12px] md:text-2xl font-bold ">
                  {info.name.length > 23 ? `${info.name.slice(0,20)}...`: info.name.slice(0,23)}
                </span>
                <span className="text-[12px]">
                  <p className="text-[12px] md:text-2xl">{info.price}</p>
                  {info.views}0 Units Sold
                </span>
              </div>
            </aside>
          );
        })}

        {/* <aside className="md:w-[324px] w-[95%]  md:h-[400px]  bg-gray-300 bg-opacity-10 my-[1rem] backdrop-blur-17 rounded-[7px] p-[1rem]">
          <img src={mouse} alt="" className="w-[95%] m-auto rounded-[7px]" />
          <div className="flex justify-between gap-[4%] p-[0.5rem]">
            <span className="text-[12px] md:text-2xl font-bold ">
              Logitech Wireless Mouse{" "}
            </span>
            <span className="text-[12px]">
              <p className="text-[12px] md:text-2xl">75,000</p>
              210 Units Sold
            </span>
          </div>
        </aside>
        <aside className="md:w-[324px] w-[95%]  md:h-[400px]  bg-gray-300 bg-opacity-10 my-[1rem] backdrop-blur-17 rounded-[7px] p-[1rem]">
          <img src={mouse} alt="" className="w-[95%] m-auto rounded-[7px]" />
          <div className="flex justify-between gap-[4%] p-[0.5rem]">
            <span className="text-[12px] md:text-2xl font-bold ">
              Logitech Wireless Mouse{" "}
            </span>
            <span className="text-[12px]">
              <p className="text-[12px] md:text-2xl">75,000</p>
              210 Units Sold
            </span>
          </div>
        </aside> */}
      </div>
      {/* <div className="text-white mt-[-5rem] ">
        <aside className="md:w-[324px] w-[95%]  md:h-[400px]  bg-gray-300 bg-opacity-10 my-[1rem] backdrop-blur-17 rounded-[7px] p-[1rem]">
          <img src={key} alt="" className="w-[95%] m-auto rounded-[7px]" />
          <div className="flex justify-between gap-[4%] p-[0.5rem]">
            <span className="text-[12px] md:text-2xl font-bold ">Dell Gaming Keyboard</span>
            <span className="text-[12px]">
              <p className="text-[12px] md:text-2xl">75,000</p>
              210 Units Sold
            </span>
          </div>
        </aside>
        <aside className="md:w-[324px] w-[95%]  md:h-[400px]  bg-gray-300 bg-opacity-10 my-[1rem] backdrop-blur-17 rounded-[7px] p-[1rem]">
          <img src={watch} alt="" className="w-[95%] m-auto rounded-[7px]" />
          <div className="flex justify-between gap-[4%] p-[0.5rem]">
            <span className="text-[12px] md:text-2xl font-bold ">Smart watch GT54 </span>
            <span className="text-[12px]">
              <p className="text-[12px] md:text-2xl">75,000</p>
              210 Units Sold
            </span>
          </div>
        </aside>
        <h2 className="text-xl italic md:hidden block">See All Products</h2>
      </div> */}
      {/* <div className="text-white mt-[-19rem] md:block hidden">
        <aside className="md:w-[324px] w-[95%]  md:h-[400px]  bg-gray-300 bg-opacity-10 my-[1rem] backdrop-blur-17 rounded-[7px] p-[1rem]">
          <img src={key} alt="" className="w-[95%] m-auto rounded-[7px]" />
          <div className="flex justify-between gap-[4%] p-[0.5rem]">
            <span className="text-[12px] md:text-2xl font-bold ">Dell Gaming Keyboard</span>
            <span className="text-[12px]">
              <p className="text-[12px] md:text-2xl">75,000</p>
              210 Units Sold
            </span>
          </div>
        </aside>
        <aside className="md:w-[324px] w-[95%]  md:h-[400px]  bg-gray-300 bg-opacity-10 my-[1rem] backdrop-blur-17 rounded-[7px] p-[1rem]">
          <img src={watch} alt="" className="w-[95%] m-auto rounded-[7px]" />
          <div className="flex justify-between gap-[4%] p-[0.5rem]">
            <span className="text-[12px] md:text-2xl font-bold ">Smart watch GT54 </span>
            <span className="text-[12px]">
              <p className="text-[12px] md:text-2xl">75,000</p>
              210 Units Sold
            </span>
          </div>
        </aside>
        <h2 className="text-xl italic">See All Products</h2>
      </div> */}
    </section>
  );
};

export default Nano;
