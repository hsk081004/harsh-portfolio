import React from 'react';
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Tribal Assistance Portal",
    description: "Developed a speech-based government schemes portal for tribal citizens to submit and monitor scheme applications. Provided bank officials with the capability to check documents, approve/reject applications, and send email notifications with comments.",
    image: "/assets/project1.png",
    link: "#"
  },
  {
    id: 2,
    title: "License Plate Recognition System",
    description: "Engineered a real-time License Plate Recognition (LPR) system using OpenCV and Tesseract OCR. The solution replaced YOLO with a custom lightweight detection pipeline using grayscale conversion, adaptive thresholding, and contour detection. Also developed a Movie Recommendation System using content-based filtering techniques with Pandas and cosine similarity, displaying personalized results via a clean Streamlit-based UI.",
    image: "/assets/project1.png",
    link: "#"
  },
  {
    id: 3,
    title: "Organic Farming Marketplace",
    description: "Developed a full-stack Organic Farming Marketplace to bridge the gap between verified farmers and conscious consumers. The platform featured QR-based product traceability, category filters, search and sort functionalities, cart and “Buy Now” options, reviews, and weight-based pricing. It also included GSAP animations and real-time verification tools to ensure transparency and enhance user experience.",
    image: "/assets/project1.png",
    link: "#"
  },
  {
    id: 4,
    title: "Movie Recommendation System",
    description: "Created a personalized movie recommendation engine using content-based filtering. Users receive suggestions based on genre, preferences, and similarity scoring. Presented results with a clean interface and seamless user interaction.",
    image: "/assets/project1.png",
    link: "#"
  }
];

export default function Projects() {
  return (
    <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="lg:w-1/2 lg:space-y-6 space-y-4">
              <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl lg:text-3xl">{project.title}</p>

              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                {project.description}
              </p>
              <a href={project.link} className="text-white mt-3 block" target="_blank" rel="noopener noreferrer">
                <TbExternalLink size={23} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
