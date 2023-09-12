import laptop from '../images/webdev.png';

const WhatWeDo = () => {
  return (
    <div className="flex items-center flex-wrap justify-around py-[3rem] px-[1rem] gap-[2%]">
      <aside className="md:basis-[40%] basis-auto">
        <img src={laptop} alt="" />
      </aside>
      <aside className="md:basis-[40%] basis-auto text-white p-[2rem]">
        <h2 className="text-4xl font-bold">What We Do</h2>
        <p className="my-[1rem]">
          we guide you through gaining the knowledge in website development,
          digital marketing, app development, graphics designs, Django and lots
          more
        </p>
        <p className="my-[1rem]">
          Expertise: Our team comprises top-tier programmers who bring
          unparalleled skills and knowledge to the table. ✅ Customer-Centric
          Approach: We believe in understanding your unique needs and delivering
          solutions that exceed your expectations. ✅ Innovation at Heart: We
          stay on the cutting edge of technology trends, harnessing them to
          create solutions that give you a competitive advantage. ✅
          Reliability: With a proven track record of successful projects, we've
          earned the trust of numerous clients.
        </p>
        <div className="bg-gradient-to-br from-blue-600 via-blue-600 to-red-500 rounded-sm w-full h-[10px]"></div>
      </aside>
    </div>
  );
};

export default WhatWeDo;
