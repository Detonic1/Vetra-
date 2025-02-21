import React from "react";
import Nav from "../component/nav";
import "../styles/categories.css";
import "../styles/globals.css";
import Image from "next/image"; // Import the Image component from next/image

export default function About() {
  return (
    <>
      <Nav />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        
        {/* Hero Section */}
        <section className="bg-white shadow-lg rounded-2xl p-8 max-w-5xl w-full text-center animate-fadeIn">
          <Image 
            src="/images/smart-bus-system.jpg" 
            alt="Smart Bus System in a Modern City" 
            width={1200} 
            height={480} 
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Revolutionizing Public Transportation</h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our smart bus system enhances urban mobility by integrating real-time tracking, AI-driven scheduling, 
            and a seamless user experience. Whether you're a passenger, operator, or city planner, our technology 
            ensures efficiency, reliability, and sustainability.
          </p>
        </section>

        {/* How It Works */}
        <section className="bg-white shadow-lg rounded-2xl p-8 max-w-5xl w-full mt-8 animate-fadeIn">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">How It Works</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our system leverages IoT sensors, GPS technology, and data analytics to optimize bus routes, 
            reduce wait times, and improve overall transit efficiency.
          </p>
          <Image 
            src="/images/live-tracking.jpg" 
            alt="Real-time bus tracking on a smartphone" 
            width={1200} 
            height={480} 
            className="w-full h-56 object-cover rounded-lg mb-6"
          />
        </section>

        {/* Key Features */}
        <section className="bg-white shadow-lg rounded-2xl p-8 max-w-5xl w-full mt-8 animate-fadeIn">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Key Features</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 text-left">
            <li>🚌 <strong>Live Tracking:</strong> View bus locations in real time through digital ads at bus stops.</li>
            <li>⏳ <strong>Smart Scheduling:</strong> AI-driven schedules to minimize delays.</li>
            <li>📊 <strong>Data Analytics:</strong> Insights to improve transit planning.</li>
            <li>🌱 <strong>Eco-Friendly Transit:</strong> Optimized routes for fuel efficiency.</li>
          </ul>
          <Image
            src="/images/data-insights.jpg" 
            alt="Analytics dashboard showing bus data insights" 
            width={1200} 
            height={480} 
            className="w-full h-56 object-cover rounded-lg mt-6"
          />
        </section>

        {/* Benefits */}
        <section className="bg-white shadow-lg rounded-2xl p-8 max-w-5xl w-full mt-8 animate-fadeIn">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Our System Stands Out</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our smart bus system provides numerous advantages to both passengers and operators:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 text-left">
            <li>🚀 Faster commute times</li>
            <li>🔍 Improved route efficiency</li>
            <li>🔔 Instant notifications on bus arrivals & delays</li>
            <li>📉 Reduced traffic congestion</li>
            <li>💰 Cost-effective transit solutions</li>
          </ul>
          <Image 
            src="/images/smart-scheduling.jpg" 
            alt="Smart scheduling system displaying optimized bus routes" 
            width={1200} 
            height={480} 
            className="w-full h-56 object-cover rounded-lg mt-6"
          />
        </section>

        {/* Future Vision */}
        <section className="bg-white shadow-lg rounded-2xl p-8 max-w-5xl w-full mt-8 animate-fadeIn">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">The Future of Public Transportation</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We are continuously innovating to bring new advancements such as AI-powered autonomous buses, 
            deeper predictive analytics, and expanded transit networks.
          </p>
          <Image 
            src="/images/future-bus.jpg" 
            alt="Futuristic city with autonomous buses and smart transport" 
            width={1200} 
            height={480} 
            className="w-full h-56 object-cover rounded-lg mb-6"
          />
          <p className="text-gray-600">
            Join us in shaping the future of public transportation—smarter, safer, and more connected than ever before!
          </p>
        </section>
        
      </main>
    </>
  );
}
