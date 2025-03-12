import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";

const images = [
  { src: "/images/image1.jpg", title: "Vivienda unifamiliar", description: "Estudio de temperatura operativa en invierno" },
  { src: "/images/image2.jpg", title: "Terminal Buquebus", description: "Estudio de temperatura operativa en verano" },
  { src: "/images/image3.jpg", title: "Torres Udaondo y Libertador", description: "Estudio de asoleamiento mínimo" },
];

const Portfolio = () => {
  useEffect(() => {
    document.title = "Arq. Guillermo Tiscornia";
  }, []);

  return (
    <div className="portfolio-wrapper">
      <header className="header">
        <div className="title-container">
          <h1 className="title">Arq. Guillermo Tiscornia</h1>
        </div>
      </header>
      <div className="content">
        <div className="gallery">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="image-card"
            >
              <h2 className="image-title">{image.title}</h2>
              <img src={image.src} alt={image.title} className="image" />
              <p className="image-description">{image.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
