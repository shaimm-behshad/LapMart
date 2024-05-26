import React from "react";
import asus from "../assets/asus.png";
import hp from "../assets/hp.png";
import macbook from "../assets/macbook.png";


const laptopList = [
  {
    id: 1,
    name: "ASUS Vivobook S 14",
    price: 79,
    image: asus,
    aosDelay: "0",
  },
  {
    id: 2,
    name: "HP Pavilion",
    price: 180,
    image: hp,
    aosDelay: "500",
  },
  {
    id: 3,
    name: "MacBook Air",
    price: 230,
    image: macbook,
    aosDelay: "1000",
  },
];

const LaptopList = () => {
  return (
    <>
    <span id="laptops"></span>
    <div className="pb-24">
      <div className="container">

        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Explore Our Pricing
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
        Explore our diverse range of laptops and discover the perfect match for your requirements and budget.        </p>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {laptopList.map((data) => (
              <div
                key={data.id}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-[120px] object-contain sm:translate-x-20 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{data.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>${data.price}</p>
                    <a href="#">Details</a>
                  </div>
                </div>
                <p className="text-xl font-semibold absolute top-0 left-3">
                  15in
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid place-items-center mt-8">
          <button data-aos="fade-up" className="rounded-md bg-primary-gradient hover:bg-primary-gradient/80 transition duration-500 py-2 px-6 text-black">
            Get Started
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default LaptopList;
