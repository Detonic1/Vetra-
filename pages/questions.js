import React from 'react';
import Link from 'next/link';
import Nav from "../component/nav";
import "../styles/categories.css";

export default function Questions() {
  return (
    <>
      <Nav />
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-6">
        
        {/* Vision Image */}
        <image 
          src="/images/future-transportation.jpg" 
          alt="Futuristic city with smart transportation" 
          className="w-full h-80 object-cover rounded-lg mb-6"
        />

        <h1 className="text-4xl font-extrabold text-white mb-6 text-center">
          Our Vision: The Future of Public Transportation
        </h1>

        <p className="text-lg text-white leading-relaxed mb-6 text-center max-w-3xl">
          At Vetra, we are not just transforming how buses move—we are shaping the future of urban mobility. Our vision goes beyond the traditional bus ride. We’re building an interconnected, intelligent transportation ecosystem where technology and innovation drive smarter, more sustainable cities. We see a world where every bus ride is not only a step toward reaching your destination but also a leap toward a better, more efficient, and greener future.
        </p>

        <p className="text-lg text-white leading-relaxed mb-6 text-center max-w-3xl">
          Imagine a public transportation system that anticipates your every need, optimizes your journey in real-time, and makes your commute more enjoyable. That’s what we’re creating. With real-time tracking, AI-driven scheduling, and data-powered insights, our smart bus system ensures that every passenger enjoys a reliable, efficient, and eco-friendly ride. No more waiting in the rain for late buses. No more guessing when your next ride will arrive. Just seamless, stress-free travel every time you hop on board.
        </p>

        <p className="text-lg text-white leading-relaxed mb-6 text-center max-w-3xl">
          We’re not just optimizing bus routes—we’re reimagining them. Through cutting-edge IoT sensors and GPS technology, we are crafting a dynamic and adaptive network that evolves with the needs of each city. Whether you're a commuter trying to catch a bus or a city planner looking to optimize traffic flow, our system empowers everyone with real-time data and intelligent route planning. Our goal? To make every journey faster, smoother, and more sustainable.
        </p>

        <p className="text-lg text-white leading-relaxed mb-6 text-center max-w-3xl">
          And this is just the beginning. As we look toward the horizon, we see a future filled with autonomous buses that operate without human drivers, powered by AI that ensures safety, efficiency, and environmental responsibility. We’re building a bridge to the future, where public transportation isn’t just a means to get from point A to point B, but a seamless part of a smart, connected city that anticipates and responds to the needs of its citizens.
        </p>

        <p className="text-lg text-white leading-relaxed mb-6 text-center max-w-3xl">
          Our vision is clear: to lead the charge in the evolution of public transport. We want to create cities where traffic congestion is a thing of the past, where buses are fully integrated into the city’s smart infrastructure, and where the very air we breathe is cleaner because of the eco-friendly transit solutions we provide. We’re thinking big, and we’re taking action now.
        </p>

        <p className="text-lg text-white leading-relaxed mb-6 text-center max-w-3xl">
          At the heart of our vision is a commitment to sustainability. Our system is designed to optimize fuel efficiency, reduce emissions, and create a greener future for generations to come. As we expand and innovate, we aim to bring electric buses, energy-efficient solutions, and smart traffic management to every corner of the world, ensuring that our planet’s future is as bright as the cities we serve.
        </p>

        <p className="text-lg text-white leading-relaxed mb-6 text-center max-w-3xl">
          We know that the future of public transportation is one of collaboration, innovation, and continuous growth. That’s why we’re always looking ahead, anticipating what’s next, and finding new ways to improve. Our growth strategy is focused on expanding our technology, enhancing our features, and building a robust network of partners and cities to bring our vision to life. From advanced analytics to personalized passenger services, we’re committed to constantly pushing the envelope and shaping the future of urban mobility.
        </p>

        <p className="text-lg text-white leading-relaxed text-center max-w-3xl">
          Join us as we pave the way to a smarter, more connected world. With Vetra, you’re not just taking the bus—you’re stepping into the future of transportation. Together, we can create cities that are more efficient, more sustainable, and more enjoyable for everyone. The journey has just begun, and we want you to be part of it.
        </p>
      </section>
    </>
  );
}
