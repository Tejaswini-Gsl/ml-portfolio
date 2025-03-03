"use client";

import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Portfolio() {
  const [showNav, setShowNav] = useState(true);
  const [activeTab, setActiveTab] = useState("skills");
  const router = useRouter();
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false); // Hide navbar on scroll down
      } else {
        setShowNav(true); // Show navbar on scroll up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Scroll-Responsive Navigation Menu */}
      <nav className={`fixed top-0 left-0 w-full bg-black text-white py-4 flex justify-center space-x-8 text-lg font-semibold shadow-md z-50 transition-transform duration-300 ${showNav ? "translate-y-0" : "-translate-y-full"}`}>
        <a href="#home" className="hover:text-gray-400">Home</a>
        <a href="#about" className="hover:text-gray-400">About</a>
        <a href="#projects" className="hover:text-gray-400">Projects</a>
      </nav>

      <div className="pt-20">
        {/* Home Section with Background Video */}
        <section id="home" className="relative min-h-screen flex flex-col justify-center items-center p-8 text-center bg-black">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-50">
              <source src="/bgv.mov" type="video/mp4" />
            </video>
          </div>
          <div className="relative z-10">
            <h1 className="text-5xl font-bold">Tejaswini Gunnapaneni</h1>
            <p className="text-xl text-gray-400 mt-3">ML Engineer | Data Scientist | AI Enthusiast</p>
            <div className="flex justify-center gap-4 mt-4">
              <a href="https://github.com/yourgithub" target="_blank">
                <FaGithub size={30} />
              </a>
              <a href="https://linkedin.com/in/yourlinkedin" target="_blank">
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="min-h-screen flex flex-col  p-8 bg-black">
          <h2 className="text-4xl font-bold text-center">About Me</h2>
          <p className="text-md text-gray-300 mt-4 max-w-3xl mx-auto text-center">
            Passionate ML Engineer and Data Scientist with expertise in developing and deploying machine learning models.
            Strong background in deep learning, cloud computing, and AI-driven applications.
          </p>
          
          <div className="mt-6 flex justify-center space-x-6  pb-2">
            <button onClick={() => setActiveTab("skills")} className={`text-lg font-semibold px-4 py-2 ${activeTab === "skills" ? "text-white border-b-2 border-red-500" : "text-gray-400"}`}>Skills</button>
            <button onClick={() => setActiveTab("experience")} className={`text-lg font-semibold px-4 py-2 ${activeTab === "experience" ? "text-white border-b-2 border-red-500" : "text-gray-400"}`}>Experience</button>
            <button onClick={() => setActiveTab("education")} className={`text-lg font-semibold px-4 py-2 ${activeTab === "education" ? "text-white border-b-2 border-red-500" : "text-gray-400"}`}>Education</button>
          </div>
          
          <div className="mt-6 text-center">
            {activeTab === "skills" && (
              <p className="text-gray-400">Python, SQL, TensorFlow, PyTorch, Scikit-learn, AWS, GCP</p>
            )}
            {activeTab === "experience" && (
              <p className="text-gray-400">Worked on multiple AI projects, including emotion detection and recommendation systems.</p>
            )}
            {activeTab === "education" && (
              <p className="text-gray-400">Bachelor's in Data Science & AI from XYZ University</p>
            )}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex flex-col items-center p-8 text-center bg-black">
          <h2 className="text-3xl font-semibold">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold">Emotion Detection System</h3>
              <p className="text-gray-400">Real-time ML model detecting emotions using facial recognition.</p>
              <button onClick={() => router.push("/projects/emotion-detection")} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Details</button>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold">Music Recommendation</h3>
              <p className="text-gray-400">AI-based music recommendation engine using collaborative filtering.</p>
              <button onClick={() => router.push("/projects/music-recommendation")} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Details</button>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Section */}
      <footer className="mt-16 text-center text-gray-400 p-8 bg-black">
        <p>© 2025 Tejaswini Gunnapaneni | ML & Data Science Portfolio</p>
      </footer>
    </div>
  );
}