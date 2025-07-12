import React, { useState, useEffect, useRef } from 'react';
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Tribal Assistance Portal",
    description: "Developed a speech-based government schemes portal for tribal citizens to submit and monitor scheme applications. Provided bank officials with the capability to check documents, approve/reject applications, and send email notifications with comments.",
    images: ["/assets/T1.jpg", "/assets/T2.jpg", "/assets/T3.jpg", "/assets/T4.jpg", "/assets/T5.jpg"],
    link: "https://github.com/hsk081004/Tribal-Assistance-Portal"
  },
  {
    id: 2,
    title: "License Plate Recognition System",
    description: "License Plate Recognition System",
    description: "Engineered a real-time License Plate Recognition (LPR) system using OpenCV and Tesseract OCR. The solution replaced YOLO with a custom lightweight detection pipeline using grayscale conversion, adaptive thresholding, and contour detection.",
    images: ["/assets/L1.png", "/assets/L2.png", "/assets/L3.png", "/assets/L4.png", "/assets/L5.png", "/assets/L6.png"],
    link: "https://github.com/hsk081004/License-Plate-Recognition-System"
  },
  {
    id: 3,
    title: "My Portfolio",
    description: "A fully responsive, interactive personal portfolio website inspired by ning-h.com, built to showcase my skills, projects, and achievements with a focus on design and user experience. The site features fluid GSAP-based animations, smooth scroll transitions, and a modern dark theme.",
    images: ["/assets/P1.png"],
    link: "https://github.com/hsk081004/harsh-portfolio"
  },
  {
    id: 4,
    title: "Movie Recommendation System",
    description: "Created a personalized movie recommendation engine using content-based filtering. Users receive suggestions based on genre, preferences, and similarity scoring. Presented results with a clean interface and seamless user interaction.",
    images: ["/assets/M1.png", "/assets/M2.png"],
    link: "https://github.com/hsk081004/movie-recommender"
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
          <ProjectCard project={project} index={index} key={project.id} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const intervalRef = useRef(null);

  const startLoop = () => {
    if (project.images.length <= 1) return;
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setFlipped(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % project.images.length);
        setFlipped(false);
      }, 400); // match flip animation
    }, 2500);
  };

  const stopLoop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setFlipped(false);
  };

  return (
    <motion.div
      className={`flex justify-between items-center flex-col ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 10,
        delay: index * 0.2
      }}
      viewport={{ once: true }}
    >
      {/* 3D Flip Box */}
      <div
        onMouseEnter={startLoop}
        onMouseLeave={stopLoop}
        className="lg:w-[600px] w-full max-w-full rounded-2xl overflow-hidden flex justify-center items-center perspective-1000"
        style={{ perspective: "1200px" }}
      >
        <motion.img
          src={project.images[currentImage]}
          alt={`${project.title} image ${currentImage + 1}`}
          className="w-full h-auto object-contain rounded-2xl"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden"
          }}
        />
      </div>

      {/* Project Info */}
      <div className="lg:w-1/2 lg:space-y-6 space-y-4 mt-5 lg:mt-0">
        <h2 className="font-extrabold text-white text-3xl lg:text-5xl">
          {String(project.id).padStart(2, "0")}
        </h2>
        <p className="font-bold text-white text-xl lg:text-3xl">{project.title}</p>
        <p className="font-light text-sm lg:text-base text-[#71717A]">
          {project.description}
        </p>
        <a
          href={project.link}
          className="text-white mt-3 block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TbExternalLink size={23} />
        </a>
      </div>
    </motion.div>
  );
}
