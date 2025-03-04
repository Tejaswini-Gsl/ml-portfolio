"use client";

import React from "react";

export default function MusicPlayer() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center">Music Streaming App</h1>
      <p className="text-gray-400 text-center mt-4">
        A subscription-based music streaming application for managing user accounts and playlists.
      </p>
      
      <section className="mt-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold">Project Explanation</h2>
        <p className="text-gray-300 mt-2">
          This project is a feature-rich music streaming platform built using Flask and MongoDB. Users can create accounts, 
          manage playlists, and stream their favorite music seamlessly. The application supports authentication, song recommendations, 
          and playlist customization.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Tech Stack</h2>
        <ul className="text-gray-300 list-disc ml-5 mt-2">
          <li>Flask</li>
          <li>MongoDB</li>
          <li>Python</li>
          <li>React.js</li>
          <li>REST API</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">GitHub Repository</h2>
        <a
          href="https://github.com/Tejaswini-Gsl/music_player"
          target="_blank"
          className="text-blue-400 hover:underline mt-2"
        >
          View on GitHub
        </a>
{/* 
        <h2 className="text-2xl font-semibold mt-6">Sample Output</h2>
        <p className="text-gray-300 mt-2">
          A user-friendly music player interface allowing seamless streaming and playlist management.
        </p>
        <img
          src="https://raw.githubusercontent.com/Tejaswini-Gsl/music_player/main/sample%20output.png"
          alt="Sample Output"
          className="mt-4 w-full rounded-lg"
        /> */}
      </section>
    </div>
  );
}
