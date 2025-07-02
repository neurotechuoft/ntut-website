import React from 'react';

const HomePage = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-space-grotesk font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Welcome to NeuroTechUofT
        </h1>
        <p className="mt-3 text-base text-gray-300 sm:mx-auto sm:mt-4 sm:max-w-xl sm:text-lg md:mt-4 md:text-xl">
          Bridging the gap between neuroscience and technology
        </p>
      </section>

      {/* Events Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-space-grotesk font-bold text-white">Events</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Event Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6 hover:border-blue-500/50 transition-colors duration-200">
            <h3 className="text-lg font-space-grotesk font-semibold text-white">Workshop: Intro to BCI</h3>
            <p className="mt-2 text-gray-300">Join us for an introduction to BrainComputer Interfaces</p>
            <p className="mt-2 text-sm text-gray-400">Date: December 15, 2024</p>
          </div>
          {/* Add more event cards as needed */}
        </div>
      </section>

      {/* Projects Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-space-grotesk font-bold text-white mb-6">Projects</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Current Project */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6 hover:border-blue-500/50 transition-colors duration-200">
            <h3 className="text-lg font-space-grotesk font-semibold text-white">NeuroMove: Solving Parkinson's</h3>
            <p className="mt-2 text-gray-300">Our 2024-25 Flagship Project developing a solution for Parkinson's patients using neural implant data and cortex-level information.</p>
          </div>

          {/* Past Project 1 */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6 hover:border-blue-500/50 transition-colors duration-200">
            <h3 className="text-lg font-space-grotesk font-semibold text-white">NTUT Bioprosthetic Arm</h3>
            <p className="mt-2 text-gray-300">2023-24 Flagship Project: A robotic prosthetic arm controlled by EEG brain signals for intuitive movement control.</p>
          </div>

          {/* Past Project 2 */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6 hover:border-blue-500/50 transition-colors duration-200">
            <h3 className="text-lg font-space-grotesk font-semibold text-white">MindType</h3>
            <p className="mt-2 text-gray-300">A mind-controlled keyboard using imagined sign language gestures for efficient character selection.</p>
          </div>
        </div>
      </section>

      {/* Group Memories Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-space-grotesk font-bold text-white mb-6">Group Memories</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <img
              src="/pics/Group Photo 1-min.JPG"
              alt="Group Photo 1"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <img
              src="/pics/Group Photo 2-min.JPG"
              alt="Group Photo 2"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <img
              src="/pics/Software Subsystem-min.JPG"
              alt="Software Subsystem"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <img
              src="/pics/Neuroscience Subsystem-min.JPG"
              alt="Neuroscience Subsystem"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <img
              src="/pics/Hardware Subsystem-min.JPG"
              alt="Hardware Subsystem"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-space-grotesk font-bold text-white">Sponsors</h2>
        <div className="mt-4 grid gap-8 grid-cols-2 lg:grid-cols-4">
          {/* Sponsor Logo */}
          <div className="flex justify-center items-center">
            <img
              src="/api/placeholder/160/80"
              alt="Sponsor"
              className="max-h-12 grayscale hover:grayscale-0 transition-all duration-200"
            />
          </div>
          {/* Add more sponsor logos as needed */}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
