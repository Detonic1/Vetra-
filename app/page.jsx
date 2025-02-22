"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image"; // Importing Image component from Next.js
import "../styles/index.css";
import "../styles/categories.css";
import Nav from "../component/nav";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/Image7.jpg",
      text: "In every journey with innovation, we discover more than we set out to find.",
    },
    {
      image: "/images/Image5.jpg",
      text: "The world offers a symphony for those who embrace innovation.",
    },
    {
      image: "/images/Image.jpg",
      text: "In every journey through innovation, we gain more than we imagined.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length); // Loop through slides
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [slides.length]);

  return (
    <div className="container">
      {/* Navigation Bar */}
      <Nav />
      
      {/* Slideshow */}
      <div className="slideshow">
        <div
          className="slideshow-container"
          style={{
            transform: `translateX(-${currentSlide * 100}vw)`,
            width: `${slides.length * 100}vw`,
          }}
        >
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              <Image src={slide.image} alt={`Slide ${index + 1}`} width={800} height={600} />
              <div className="slide-content">
                <p className="nature-text">{slide.text}</p>
                <button className="nature-button">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Design Section */}
      <section className="nature-section">
        <h2 className="nature-heading">Explore the Future of Mobility</h2>
        <p className="nature-description">
          Innovation is not a destination; it’s a journey. Discover the possibilities of smart transportation and let its transformative power inspire you.
        </p>
        <div className="nature-features">
          <div className="feature-card">
            <h3 className="feature-title">Smart Connectivity</h3>
            <p className="feature-description">
              Explore the seamless connection between technology and transportation, ensuring real-time updates and smoother travel.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Energy Efficiency</h3>
            <p className="feature-description">
              Witness how our smart buses reduce energy consumption while providing comfort and reliability for passengers.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Sustainability</h3>
            <p className="feature-description">
              Learn how we contribute to reducing emissions and enhancing eco-friendly practices in public transportation.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white shadow-lg rounded-2xl p-8 max-w-5xl w-full text-center animate-fadeIn mx-auto my-8">
  <Image 
    src="/images/Image9.jpg" 
    alt="Smart Bus System in a Modern City" 
    width={1200} 
    height={480} 
    className="w-full h-64 object-cover rounded-lg mb-6"
  />
  <h1 className="text-2xl font-bold text-gray-800 mb-4">Revolutionizing Public Transportation</h1>
  <p className="text-gray-600 leading-relaxed mb-6">
    Real-time bus tracking is transforming the public transportation experience, not just for 
    passengers, but also for transit authorities and entire communities. By providing accurate, 
    up-to-the-minute information, these systems help passengers make informed decisions, reducing 
    the stress of waiting times and improving overall satisfaction. For transit authorities, 
    it enables more efficient fleet management and quicker response times in case of delays or 
    emergencies. Additionally, by fostering a connected and tech-savvy community, real-time tracking 
    contributes to a future where transportation is not only more efficient but also more sustainable. 
    As cities continue to evolve, real-time bus tracking stands as a key pillar in the development of 
    smarter, greener, and more accessible urban mobility solutions.
  </p>
</section>

      {/* Why Smart Transportation Matters with Image */}
      <section className="bg-white shadow-lg rounded-2xl p-8 max-w-5xl w-full mx-auto my-8 animate-fadeIn">
  <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
    <div className="text-content w-full md:w-1/2 text-center md:text-left">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Why Smart Transportation Matters
      </h3>
      <p className="text-gray-600 leading-relaxed mb-6">
        Smart transportation systems are transforming how we move, offering convenience, sustainability, and efficiency for communities worldwide.
      </p>
      <ul className="list-disc list-inside text-gray-600">
        <li>Improves accessibility for all citizens.</li>
        <li>Reduces environmental impact through eco-friendly tech.</li>
        <li>Ensures a smarter, more sustainable future for cities.</li>
      </ul>
    </div>
    <div className="image-content w-full md:w-1/2">
      <Image 
        src="/images/Montreal.jpg" 
        alt="Smart Transportation with Real-Time Bus Tracker" 
        width={500} 
        height={350} 
        className="rounded-lg shadow-md object-cover"
      />
    </div>
  </div>
</section>


      {/* The Impact of Real-Time Bus Tracking Section with Image on Left */}
      
    </div>
    
  );
};

export default HomePage;
