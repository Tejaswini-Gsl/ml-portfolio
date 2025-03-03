"use client";

import React from "react";

export default function MusicRecommendation() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center">Music Recommendation System</h1>
      <p className="text-gray-400 text-center mt-4">
        A collaborative filtering-based AI system that recommends personalized playlists.
      </p>

      <section className="mt-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold">Project Explanation</h2>
        <p className="text-gray-300 mt-2">
          This system analyzes user listening patterns using a hybrid recommendation model, 
          combining content-based filtering with collaborative filtering.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Tech Stack</h2>
        <ul className="text-gray-300 list-disc ml-5 mt-2">
          <li>Python</li>
          <li>Scikit-learn</li>
          <li>Pandas & NumPy</li>
          <li>Flask (for API)</li>
          <li>React (for UI)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">GitHub Repository</h2>
        <a
          href="https://github.com/yourgithub/music-recommendation"
          target="_blank"
          className="text-blue-400 hover:underline mt-2"
        >
          View on GitHub
        </a>

        <h2 className="text-2xl font-semibold mt-6">Sample Output</h2>
        <img src="/music_recommendation_output.png" alt="Music Recommendation Output" className="mt-4 w-full rounded-lg" />
      </section>
    </div>
  );
}
