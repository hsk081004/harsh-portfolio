import React from 'react';
import { motion } from 'framer-motion';
import { TbExternalLink } from 'react-icons/tb';

const certifications = [
  {
    id: 1,
    title: "SSIP HACKATHON-2023",
    description: "Finalist 🎉 - SSIP New India Vibrant Hackathon, 2023",
    image: "/assets/HACK.png",
    link: "#"
  },
];

export default function Certifications() {
  return (
    <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="certifications">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Certifications</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            className={`flex justify-between items-center flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-[600px] w-full rounded-2xl overflow-hidden">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>

            <div className="lg:w-1/2 lg:space-y-6 space-y-4 mt-5 lg:mt-0">
              <h2 className="font-extrabold text-white text-3xl lg:text-5xl">
                {String(cert.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl lg:text-3xl">{cert.title}</p>
              <p className="font-light text-sm lg:text-base text-[#71717A]">
                {cert.description}
              </p>
              {cert.link && (
                <a
                  href={cert.link}
                  className="text-white mt-3 block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbExternalLink size={23} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
