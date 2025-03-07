"use client";

import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

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
              <source src="/bgv.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="relative z-10">
            <h1 className="text-5xl font-bold">Tejaswini Gunnapaneni</h1>
            <p className="text-xl text-gray-400 mt-3">ML Engineer | Data Scientist | AI Enthusiast</p>
            <div className="flex justify-center gap-4 mt-4">
              <a href="https://github.com/Tejaswini-Gsl" target="_blank">
                <FaGithub size={30} />
              </a>
              <a href="https://www.linkedin.com/in/tejaswini-gunnapaneni" target="_blank">
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        
        <section id="about" className="min-h-screen flex flex-col md:flex-row items-center justify-between p-16 bg-black">
          <div className="w-full md:w-1/2 text-left pr-8">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-gray-300 leading-relaxed text-justify">
              I am an enthusiastic and dedicated <span className="font-semibold">Machine Learning Engineer & Data Scientist</span> with a strong background in
              <span className="font-semibold"> AI, Data Science, and Cloud Technologies</span>. I specialize in designing, developing, and deploying machine learning
              models that drive meaningful impact. My passion lies in utilizing data-driven strategies to solve real-world
              problems through <span className="font-semibold">cutting-edge AI and automation</span>.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed text-justify mt-4">
              I have hands-on experience with <span className="font-semibold">Big Data technologies, AI frameworks, and cloud platforms</span> to ensure scalable
              and optimized AI solutions. I thrive in fast-paced environments where innovation meets data-driven decision-making.
            </p>
          </div>
          <div className="w-full md:w-1/2 bg-gray-800 p-8 rounded-lg">
            <div className="flex space-x-6 border-b border-gray-600 pb-2">
              <button onClick={() => setActiveTab("skills")} className={`text-lg font-semibold px-4 py-2 ${activeTab === "skills" ? "text-white border-b-2 border-pink-500" : "text-gray-400"}`}>Skills</button>
              <button onClick={() => setActiveTab("experience")} className={`text-lg font-semibold px-4 py-2 ${activeTab === "experience" ? "text-white border-b-2 border-pink-500" : "text-gray-400"}`}>Experience</button>
              <button onClick={() => setActiveTab("education")} className={`text-lg font-semibold px-4 py-2 ${activeTab === "education" ? "text-white border-b-2 border-pink-500" : "text-gray-400"}`}>Education</button>
            </div>
            <div className="mt-6 text-left">
            {activeTab === "skills" && (
              <div className="grid grid-cols-2 gap-4 text-white-400">
                <div>
                  <h3 className="text-lg font-semibold text-pink-400">Programming</h3>
                  <p>Python, SQL, R, JavaScript, Golang</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-pink-400">AI & Data Science</h3>
                  <p>TensorFlow, PyTorch, SparkML, Keras, Scikit-learn, spaCy, NLTK</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-pink-400">Generative AI</h3>
                  <p>Langchain, GPT-4, BERT, Hugging Face, Gemini, Llama, Whisper</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-pink-400">Cloud & Big Data</h3>
                  <p>GCP, AWS, Azure, Apache Airflow, Databricks</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-pink-400">Databases</h3>
                  <p>MySQL, PostgreSQL, SQL Server, MongoDB, Chroma DB, Pinecone</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-pink-400">DevOps & Deployment</h3>
                  <p>Terraform, Docker, Kubernetes, Tekton, GitHub, MLflow</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-pink-400">Visualization</h3>
                  <p>Tableau, Power BI, Looker, Matplotlib, Seaborn, Plotly</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-pink-400">Web Development</h3>
                  <p>Flask, Django, Streamlit, JavaScript, HTML, CSS</p>
                </div>
              </div>
            )}
              {activeTab === "experience" && (
                <div className="text-white-400 text-justify  ">
                  <p className="text-pink-400 text-lg"><strong>2021 - 2023</strong></p>
                  <p className="text-lg">Data Scientist/Software Engineer at Ford Motor Company</p>
                  <p className="mt-8 text-pink-400 text-lg"><strong>2020 - 2021</strong></p>
                  <p className="text-lg">Data Engineer at CloudEarl Solutions</p>
                </div>
              )}
              {activeTab === "education" && (
                <div className="text-white-400 text-justify">
                  <p className="text-pink-400 text-lg"><strong>2023 - 2024</strong></p>
                  <p className="text-lg ">Master's in Computer Science</p>
                  <p >University of Central Missouri</p>
                  <p className="mt-8 text-pink-400 text-lg"><strong>2017 - 2021</strong></p>
                  <p className="text-lg">Bachelor's in Computer Science</p>
                  <p>Centurion University of Technology and Management</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        {/* <section id="projects" className="min-h-screen flex flex-col items-center px-16 py-8 text-center bg-black">
          <h2 className="text-3xl font-semibold">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {[{
              title: "LLM Text Summarizer & Q/A",
              description: "Developed a powerful summarization and Q&A system using Large Language Models (LLMs).",
              link: "/projects/llm-summarizer"
            }, {
              title: "Music Streaming App",
              description: "Developed a subscription-based music streaming application using Flask & MongoDB.",
              link: "/projects/music-streaming"
            }, {
              title: "Song Recommendation",
              description: "Visualized Spotify dataset with Tableau to recommend top 10 songs based on user preferences.",
              link: "/projects/song-recommendation"
            }, {
              title: "IEEE Research Paper",
              description: "Hyperparameter Tuning for Hyperspectral Images – Published @ IEEE (2021).",
              link: "/projects/ieee-paper"
            }].map((project, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-800 p-4 rounded-lg"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
                <button onClick={() => router.push(project.link)} className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">View Details</button>
              </motion.div>
            ))}
          </div>
        </section> */}

<section id="projects" className="min-h-screen flex flex-col items-center px-16 py-8 text-center bg-black">
          <h2 className="text-3xl font-semibold mb-10">Projects</h2>
          <div className="relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-6">
            {[{
              title: "LLM Text Summarizer & Q/A",
              description: "Developed a powerful summarization and Q&A system using Large Language Models (LLMs).",
              link: "/projects/llm-summarizer"
            }, {
              title: "Music Streaming App",
              description: "Developed a subscription-based music streaming application using Flask & MongoDB.",
              link: "/projects/music-streaming"
            }, {
              title: "Song Recommendation",
              description: "Visualized Spotify dataset with Tableau to recommend top 10 songs based on user preferences.",
              link: "/projects/song-recommendation"
            }, {
              title: "IEEE Research Paper",
              description: "Hyperparameter Tuning for Hyperspectral Images – Published @ IEEE (2021).",
              link: "/projects/ieee-paper"
            }].map((project, index) => (
              <motion.div 
                key={index} 
                className="relative bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  {index + 1}
                </motion.div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <button onClick={() => router.push(project.link)} className="mt-4 bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-700">View Details</button>
              </motion.div>
            ))}

                {/* <motion.div 
                key={index} 
                className="relative bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <button onClick={() => router.push(project.link)} className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">View Details</button>
              </motion.div> */}
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