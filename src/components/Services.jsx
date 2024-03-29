import React from "react";
import Section from "./common/Section";
import commerce from "../assets/commerce.png";
import web from "../assets/web.png";
import mobile from "../assets/mobile.png";
const Services = () => {
  const services = [
    {
      id: 1,
      image: web,
      title: "Web Development"
    },
    {
      id: 2,
      image: commerce,
      title: "Data Science"
    },
    {
      id: 3,
      image: mobile,
      title: "Mobile Development"
    }
  ];
  return (
    <Section
      title="What I can do ⚒️"
      subtitle="Here are a list of my super powers."
    >
      <div className="grid gap-10 lg:grid-cols-3">
        {services.map(({ id, image, title }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110"
          >
            <img
              src={image}
              alt={title}
              className="w-36 h-36 md:w-44 md:h-44 object-contain"
            />
            <h3 className="mt-5 text-base">{title}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
