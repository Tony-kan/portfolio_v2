"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "about me",
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Cras et ante lectus. In hac habitasse platea dictumst. Donec id fringilla justo. Nam nec feugiat mi.`,
  info: [
    {
      fieldName: "Name",
      fieldValue: "Tony Kanyamuka",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+265) 996008328",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Malawi",
    },
    {
      fieldName: "Email",
      fieldValue: "tonykanyamuka@gmail.com",
    },

    {
      fieldName: "Experience",
      fieldValue: "3+ years",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English",
    },
  ],
};

const Resume = () => {
  return <div>Resume Page</div>;
};

export default Resume;
