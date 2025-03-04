"use client";

import React from "react";

export default function ResearchPublication() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center">IEEE Research Publication</h1>
      <p className="text-gray-400 text-center mt-4">
        Published research on Hyperparameter Tuning for Hyperspectral Images in IEEE.
      </p>
      
      <section className="mt-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold">Research Paper Explanation</h2>
        <p className="text-gray-300 mt-2">
          This research explores optimization techniques for deep learning models applied to hyperspectral imaging. The work 
          improves model accuracy in remote sensing applications by fine-tuning hyperparameters for better classification and detection.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Tech Stack Used</h2>
        <ul className="text-gray-300 list-disc ml-5 mt-2">
          <li><strong>Machine Learning Algorithms:</strong> Random Forest, Support Vector Machines (SVM), Neural Networks</li>
          <li><strong>Dimensionality Reduction:</strong> Principal Component Analysis (PCA)</li>
          <li><strong>Hyperparameter Tuning:</strong> Grid Search Cross-Validation (Grid Search CV)</li>
          <li><strong>Visualization & Analysis:</strong> Matplotlib, Patches</li>
          <li><strong>Development & Experimentation:</strong> Google Colab</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">Publication Details</h2>
        <ul className="text-gray-300 list-disc ml-5 mt-2">
          <li><strong>Title:</strong> Hyperparameter Tuning for Hyperspectral Images</li>
          <li><strong>Conference:</strong> IEEE 2021</li>
          <li><strong>Research Area:</strong> Deep Learning, Hyperspectral Imaging, Optimization</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">Read the Full Paper</h2>
        <a
          href="https://ieeexplore.ieee.org/document/9609398"
          target="_blank"
          className="text-blue-400 hover:underline mt-2"
        >
          View on IEEE Xplore
        </a>
      </section>
    </div>
  );
}
