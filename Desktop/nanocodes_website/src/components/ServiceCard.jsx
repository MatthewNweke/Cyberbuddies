import coding from "../images/coding.png";
import courses from "../images/courses.png";
import nanotech from "../images/techlap.png";

const ServiceCard = () => {
  const services = [
    {
      img: coding,
      title: "Services",
      text: "We build websites,  Apps, branding,etc",
      btnText: "Get in Touch",
    },
    {
      img: courses,
      title: "Courses",
      text: "Learn web design, AI,  UI Design,  Java, etc",
      btnText: "Learn More",
    },
    {
      img: nanotech,
      title: "NanoTech",
      text: "Shop for Computer and Accesories",
      btnText: "Shop Now",
    },
  ];
  return (
    <div className="flex items-center flex-wrap justify-around p-[1rem] ">
      {services.map((service) => {
        return (
          <aside
            className="min-h-[350px] w-[270px] text-center text-white rounded-[10px] bg-gradient-to-r-yellow-blue-white
                my-[1rem] mx-[0.5rem] border-2 p-[1rem] flex flex-col justify-center items-center bg-white/30 backdrop-blur-sm hover:scale-[1.1] cursor-pointer hover:border-[#030C4B] hover:border-4 card_content"
          >
            <img src={service.img} alt="" className="w-[70px]" />
            <h2 className="text-3xl font-bold my-[1rem]">{service.title}</h2>
            <p>{service.text}</p>
            <button className="my-[1rem] px-[3rem] rounded-lg py-[0.5rem] bg-gradient-to-br from-blue-600 to-red-500">
              {service.btnText}
            </button>
          </aside>
        );
      })}
    </div>
  );
};

export default ServiceCard;
