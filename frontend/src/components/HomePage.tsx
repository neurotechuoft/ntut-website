import React from 'react';
import GoldSponsors from './GoldSponsors';
import ThreeDModelViewer from './ThreeDModelViewer';

const HomePage: React.FC = () => (
  <div className="text-[#562c81] bg-[#e7e7e7] min-h-screen font-roboto">
    {/* Hero Section */}
    <section className="flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[80vh]">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#562c81]/5 to-[#562c81]/10 z-0"></div>

      {/* 3D Model Viewer Background */}
      <div className="absolute inset-0">
        <ThreeDModelViewer />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4">
        <div className="animate-fade-in-up">
          <h1 className="text-7xl md:text-8xl font-garamond font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#373683] via-[#5b2c81] to-[#373683] drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)] tracking-tight">
            NeurotechUofT
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-roboto font-light text-[#562c81] leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)] tracking-wide">
            Join the next generation of neurotechnology and neuroscience enthusiasts.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-[#373683] to-[#5b2c81] rounded-xl shadow-lg hover:shadow-[#562c81]/20 hover:scale-105 transition-all duration-300 text-lg font-roboto font-medium border border-[#562c81]/20 tracking-wide text-white">
            Explore
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[#562c81]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>

    {/* About Section */}
    <section className="py-16 px-6 md:px-16 bg-gradient-to-b from-white to-[#e7e7e7] relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-garamond font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#373683] to-[#5b2c81] tracking-tight leading-[1.2] py-2">
          What do we do?
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg md:text-xl leading-relaxed text-[#562c81] tracking-wide font-roboto">
              At Neurotech UofT, we are pioneering innovation in neurotechnology by merging engineering and neuroscience to create meaningful change.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-[#562c81] tracking-wide font-roboto">
              Our flagship project, NeuronMove, is a groundbreaking initiative to combat Parkinson's disease tremors through cutting-edge bioprosthetics and brain-wave technologies.
            </p>
          </div>
          <div className="space-y-6">
            <p className="text-lg md:text-xl leading-relaxed text-[#562c81] tracking-wide font-roboto">
              Through partnerships with top organizations, we spark conversations that make neurotechnology accessible and impactful for undergraduates.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-[#562c81] tracking-wide font-roboto">
              Join us as we shape the future of neurotechnology with passion, collaboration, and innovation at UofT Engineering.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Upcoming Events Section */}
    <section className="py-24 px-6 md:px-16 bg-gradient-to-b from-[#e7e7e7] to-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-garamond font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#373683] to-[#5b2c81] tracking-tight leading-[1.2] py-2">
            Upcoming Events
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((event) => (
            <div key={event}
              className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 
                          hover:scale-[1.02] border border-[#562c81]/20">
              <h3 className="text-2xl font-garamond font-bold mb-4 text-[#562c81] group-hover:text-[#6b4b9c] transition-colors tracking-tight">
                Upcoming Event {event}
              </h3>
              <p className="text-lg text-[#562c81] mb-4 tracking-wide font-roboto">Event description placeholder.</p>
              <a href={`/events/upcoming-${event}`}
                className="inline-flex items-center text-[#562c81] hover:text-[#6b4b9c] transition-colors tracking-wide font-roboto">
                Learn more
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Projects Section */}
    <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-white to-[#e7e7e7] relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-garamond font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#373683] to-[#5b2c81] tracking-tight leading-[1.2] py-2">
            Current Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((project) => (
            <div key={project}
              className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 
                          hover:scale-[1.02] border border-[#562c81]/20">
              <h3 className="text-xl font-garamond font-bold mb-4 text-[#562c81] group-hover:text-[#6b4b9c] transition-colors tracking-tight">
                Projects {project}
              </h3>
              <p className="text-base text-[#562c81] mb-4 tracking-wide font-roboto">Project description placeholder.</p>
              <a href={`/projects/${project}`}
                className="inline-flex items-center text-[#562c81] hover:text-[#6b4b9c] transition-colors tracking-wide font-roboto">
                Learn more
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="/projects"
            className="inline-flex items-center text-lg text-[#562c81] hover:text-[#6b4b9c] transition-colors font-roboto">
            View all Projects
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>

    {/* Gold Sponsors Section */}
    <GoldSponsors />
  </div>
);

export default HomePage;
