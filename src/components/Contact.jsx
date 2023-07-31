import React from "react";
import Section from "./common/Section";
import { FaTwitter, FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import contact from "../assets/mobile.png";

const Contact = () => {
  const SOCIAL = [
    {
      id: 1,
      link: "https://twitter.com/jelorm",
      icon: <FaTwitter />
    },
    {
      id: 2,
      link: "https://github.com/josephsegbefia",
      icon: <FaGithub />
    },
    {
      id: 3,
      link: "https://www.linkedin.com/in/joseph-segbefia",
      icon: <FaLinkedin />
    }
  ];

  return (
    <Section title="Contact ☎️" subtitle="Get In Touch">
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        {/* <div>
          <img src={contact} alt="contact info" className="w-32 h-32" />
        </div> */}
        <div>
          <p className="max-w-xs md:max-w-lg font-extralight">
            I am open to talk about full-time and freelancing opportunities
          </p>
        </div>
        <div className="flex w-full items-center justify-evenly text-3xl">
          {SOCIAL.map(({ id, link, icon }) => (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="duration-200 ease-in-out hover:text-rose-600"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* FORM */}
        <div className="p-8 text-left w-full">
          <form>
            <div className="gap-4 w-full">
              <div className="flex flex-col my-2">
                <label className="capitalize text-sm py-2 font-extralight">
                  name
                </label>
                <input
                  type="text"
                  name="name"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-col my-2">
                <label className="capitalize text-sm py-2 font-extralight">
                  phone
                </label>
                <input
                  type="text"
                  name="phone"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-col my-2">
                <label className="capitalize text-sm py-2 font-extralight">
                  email
                </label>
                <input
                  type="text"
                  name="email"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-col my-2">
                <label className="capitalize text-sm py-2 font-extralight">
                  message
                </label>
                <textarea
                  name="message"
                  rows="10"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none"
                ></textarea>
              </div>
            </div>
            <div className="flex itesm-center justify-center">
              <button className="my-8 bg-gradient-to-r from-rose-600 to-teal-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">
                send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
