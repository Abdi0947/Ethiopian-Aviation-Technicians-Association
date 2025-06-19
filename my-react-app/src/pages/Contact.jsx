import React from 'react';

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-16 px-4">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
        {/* Plane illustration */}
        <div className="text-6xl mb-4">✈️</div>
        <h1 className="text-3xl font-bold text-blue-700 mb-2">Contact Us</h1>
        <p className="text-gray-600 mb-6 text-center">Have a question or want to get in touch? Fill out the form below and our team will get back to you soon.</p>
        <form className="w-full space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
} 