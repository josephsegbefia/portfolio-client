import React from "react";
import Section from "./common/Section";
import avatar from "../assets/avatar.png";

const Testimonials = () => {
  const TESTIMONIALS = [
    {
      id: 1,
      image: avatar,
      name: "John Doe 1",
      comment: "This is the first testimonial 1"
    },
    {
      id: 2,
      image: avatar,
      name: "John Doe 2",
      comment: "This is the first testimonial 2"
    },
    {
      id: 3,
      image: avatar,
      name: "John Doe 3",
      comment: "This is the first testimonial 3"
    }
  ];
  return (
    <Section title="Testimonials" subtitle="What they say about me">
      <div className="grid gap-8 lg:gap-14 lg:grid-cols-3">
        {TESTIMONIALS.map(({ id, image, name, comment }) => (
          <div className="flex p-4 justify-center items-center rounded-xl shadow-md dark:shadow-gray-300">
            <div className="w-1/3">
              <img
                src={avatar}
                alt={name}
                className="w-20 h-20 object-cover object-top pt-2"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-center items-center gap-3 p-2">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-sm font-extralight">{comment}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
