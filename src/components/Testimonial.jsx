import React from "react";
import sashaPic from "../assets/sasha.jpg";
import katrinPic from "../assets/katrin.jpg";
import tonyPic from "../assets/tony.jpg";

const testimonialData = [
  {
    name: "Sasha",
    image: sashaPic,
    description: "I was amazed by the level of professionalism and attention to detail.",
    aosDelay: "0",
  },
  {
    name: "Katrin",
    image: katrinPic,
    description: "The service exceeded my expectations in every way possible.",
    aosDelay: "300",
  },
  {
    name: "Tony",
    image: tonyPic,
    description: "Highly recommend to anyone seeking a reliable and trustworthy laptop provider.",
    aosDelay: "1000",
  },
];
const Testimonial = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              What Our Clients Say About Us
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44">
            Read what our satisfied customers have to say about their experiences with us.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
            {testimonialData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300  rounded-lg "
              >
                <div className="grid place-items-center ">
                  <img
                    src={skill.image}
                    alt=""
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{skill.description}</p>
                <p className="text-center font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
