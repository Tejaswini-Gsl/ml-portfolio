"use client";

import React from "react";

export default function EmotionDetection() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center">Emotion Detection System</h1>
      <p className="text-gray-400 text-center mt-4">
        A real-time ML model that detects emotions using facial recognition and deep learning.
      </p>
      
      <section className="mt-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold">Project Explanation</h2>
        <p className="text-gray-300 mt-2">
          This project leverages OpenCV and TensorFlow to analyze facial expressions in real-time.
          The system is capable of classifying emotions such as Happy, Sad, Angry, and Neutral.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Tech Stack</h2>
        <ul className="text-gray-300 list-disc ml-5 mt-2">
          <li>Python</li>
          <li>TensorFlow</li>
          <li>OpenCV</li>
          <li>Keras</li>
          <li>Streamlit (for UI)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">GitHub Repository</h2>
        <a
          href="https://github.com/yourgithub/emotion-detection"
          target="_blank"
          className="text-blue-400 hover:underline mt-2"
        >
          View on GitHub
        </a>

        <h2 className="text-2xl font-semibold mt-6">Sample Output</h2>
        <img src="/emotion_output.png" alt="Emotion Detection Output" className="mt-4 w-full rounded-lg" />
      </section>
    </div>
  );
}
