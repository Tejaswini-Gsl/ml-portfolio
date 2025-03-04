"use client";

import React from "react";

export default function LLMSummarizer() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center">LLM Text Summarizer & Q/A</h1>
      <p className="text-gray-400 text-center mt-4">
        A powerful summarization and Q&A system using Large Language Models (LLMs).
      </p>
      
      <section className="mt-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold">Project Explanation</h2>
        <p className="text-gray-300 mt-2">
          This project enables users to upload a PDF and ask questions based on the document content using an advanced AI model. 
          It integrates LangChain, Gemini AI, and Streamlit for an interactive experience, providing accurate and concise answers from 
          the document's content.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Tech Stack</h2>
        <ul className="text-gray-300 list-disc ml-5 mt-2">
          <li>Streamlit</li>
          <li>Python</li>
          <li>LangChain</li>
          <li>Gemini AI</li>
          <li>ChromaDB</li>
          <li>HuggingFace Embeddings</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">GitHub Repository</h2>
        <a
          href="https://github.com/Tejaswini-Gsl/chatbot"
          target="_blank"
          className="text-blue-400 hover:underline mt-2"
        >
          View on GitHub
        </a>

        <h2 className="text-2xl font-semibold mt-6">Sample Output</h2>
        <p className="text-gray-300 mt-2">
          Generates AI-powered summaries and intelligent responses to user queries from uploaded PDFs.
        </p>
        <img
          src="https://raw.githubusercontent.com/Tejaswini-Gsl/chatbot/main/sample%20output.png"
          alt="Sample Output"
          className="mt-4 w-full rounded-lg"
        />
      </section>
    </div>
  );
}
