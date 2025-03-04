"use client";

import React from "react";

export default function MusicRecommendation() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center">Music Recommendation System</h1>
      <p className="text-gray-400 text-center mt-4">
        An interactive Tableau-based music recommendation system built using Spotify dataset, SQL, and Tableau.
      </p>
      
      <section className="mt-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold">Project Explanation</h2>
        <p className="text-gray-300 mt-2">
          This project utilizes SQL for data preprocessing and Tableau for visualization to create an interactive music 
          recommendation dashboard. Users can explore track metrics, select songs to analyze attributes like danceability, energy, 
          and acousticness, and get personalized song recommendations.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Tech Stack</h2>
        <ul className="text-gray-300 list-disc ml-5 mt-2">
          <li>SQL</li>
          <li>Tableau</li>
          <li>Spotify Dataset</li>
          <li>Data Cleaning & Preprocessing</li>
          <li>Interactive Dashboard</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">GitHub Repository</h2>
        <a
          href="https://github.com/Tejaswini-Gsl/music_player/tree/master/music_visual"
          target="_blank"
          className="text-blue-400 hover:underline mt-2"
        >
          View on GitHub
        </a>

        <h2 className="text-2xl font-semibold mt-6">Sample Output</h2>
        <p className="text-gray-300 mt-2">
          Below is the interactive Tableau dashboard created for music recommendations based on user preferences.
        </p>
        <img
          src="https://raw.githubusercontent.com/Tejaswini-Gsl/music_player/master/music_visual/output.png"
          alt="Music Recommendation Dashboard"
          className="mt-4 w-full rounded-lg"
        />
      </section>
    </div>
  );
}
