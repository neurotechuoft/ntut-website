import React from 'react';

const ProjectsPage: React.FC = () => {
  return (
    <div className="text-[#562c81] bg-[#e7e7e7] min-h-screen font-roboto">
      {/* Hero Section */}
      <section className="py-24 px-6 md:px-16 bg-gradient-to-b from-white to-[#e7e7e7] relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-4">
            <h1 className="text-5xl md:text-6xl font-garamond font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#373683] to-[#5b2c81] tracking-tight leading-[1.2] py-2">
              Our Projects
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-[#562c81] tracking-wide">
            We work on one Flagship Project every year. For this year, we are working on:
            <br></br>
            <br></br>
            {[1].map((project) => (
              <div key={project}
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 
                          hover:scale-[1.02] border border-[#562c81]/20 mb-12">
                <h3 className="text-2xl font-garamond font-bold mb-4 text-[#562c81] group-hover:text-[#6b4b9c] transition-colors tracking-tight">
                  NeuroMove: Solving Parkinson's (2024-25 Flagship Project)
                </h3>
                <p className="text-lg text-[#562c81] mb-6 tracking-wide font-roboto">
                  NeuronMove is a groundbreaking initiative and the first-ever project at the University of Toronto Engineering Society aimed at developing a solution for patients suffering from Parkinson's disease. This pioneering project seeks to address the debilitating tremors and movement initiation difficulties experienced by Parkinson's patients by leveraging neural implant data and cortex-level information.
                </p>
                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                  <span className="px-3 py-1 bg-[#562c81]/10 text-[#562c81] rounded-full text-sm font-roboto">
                    EEG
                  </span>
                  <span className="px-3 py-1 bg-[#562c81]/10 text-[#562c81] rounded-full text-sm font-roboto">
                    Machine Learning
                  </span>
                  <span className="px-3 py-1 bg-[#562c81]/10 text-[#562c81] rounded-full text-sm font-roboto">
                    Neuroscience
                  </span>
                  <span className="px-3 py-1 bg-[#562c81]/10 text-[#562c81] rounded-full text-sm font-roboto">
                    Rehabilitation
                  </span>
                </div>
                <a href="/projects/neuromove"
                  className="inline-flex items-center text-[#562c81] hover:text-[#6b4b9c] transition-colors tracking-wide font-roboto">
                  Learn more
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-0 px-6 md:px-16 bg-gradient-to-b from-[#e7e7e7] to-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h2 className="text-4xl md:text-5xl font-garamond font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#373683] to-[#5b2c81] tracking-tight">
              Featured Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "NeuroMove - Solving Parkinson's",
                description: "Our 2024-25 Flagship Project developing a solution for Parkinson's patients using neural implant data and cortex-level information.",
                tags: ["EEG", "Machine Learning", "Neuroscience"],
                link: "/projects/neuromove"
              },
              {
                id: 2,
                title: "NTUT Bioprosthetic Arm",
                description: "2023-24 Flagship Project: A robotic prosthetic arm controlled by EEG brain signals for intuitive movement control.",
                tags: ["EEG", "Robotics", "Rehabilitation"],
                link: "/projects/bioprosthetic"
              },
              {
                id: 3,
                title: "MindType",
                description: "A mind-controlled keyboard using imagined sign language gestures for efficient character selection.",
                tags: ["EEG", "Accessibility", "Communication"],
                link: "/projects/mindtype"
              },
              {
                id: 4,
                title: "WallEEG",
                description: "A mind-controlled quidditch robot developed as part of Neurotech UofT's interdisciplinary approach to neurotechnology.",
                tags: ["EEG", "Robotics", "Gaming"],
                link: "/projects/walleeg"
              },
              {
                id: 5,
                title: "Headset",
                description: "A comfortable, easy-to-use EEG headset tailored for researchers and users.",
                tags: ["EEG", "Hardware", "Research"],
                link: "/projects/headset"
              },
              {
                id: 6,
                title: "Neurostack",
                description: "An open-source, real-time EEG processing service hosted on the cloud.",
                tags: ["EEG", "Cloud Computing", "Open Source"],
                link: "/projects/neurostack"
              }
            ].map((project) => (
              <div key={project.id}
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 
                          hover:scale-[1.02] border border-[#562c81]/20 mb-12">
                <h3 className="text-2xl font-garamond font-bold mb-4 text-[#562c81] group-hover:text-[#6b4b9c] transition-colors tracking-tight">
                  {project.title}
                </h3>
                <p className="text-lg text-[#562c81] mb-6 tracking-wide font-roboto">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-[#562c81]/10 text-[#562c81] rounded-full text-sm font-roboto">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link}
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

      {/* Research Areas */}
      <section className="py-16 px-6 md:px-16 bg-gradient-to-b from-white to-[#e7e7e7] relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h2 className="text-4xl md:text-5xl font-garamond font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#373683] to-[#5b2c81] tracking-tight">
              Research Areas
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Brain-Computer Interfaces',
                description: 'Developing innovative interfaces between the brain and external devices.'
              },
              {
                title: 'Neural Signal Processing',
                description: 'Advanced algorithms for processing and analyzing neural data.'
              },
              {
                title: 'Neuroprosthetics',
                description: 'Creating prosthetic devices controlled by neural signals.'
              },
              {
                title: 'Cognitive Enhancement',
                description: 'Research on technologies to enhance cognitive abilities.'
              }
            ].map((area, index) => (
              <div key={index}
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 
                          hover:scale-[1.02] border border-[#562c81]/20">
                <h3 className="text-2xl font-garamond font-bold mb-4 text-[#562c81] group-hover:text-[#6b4b9c] transition-colors tracking-tight">
                  {area.title}
                </h3>
                <p className="text-lg text-[#562c81] tracking-wide font-roboto">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-16 bg-gradient-to-b from-[#e7e7e7] to-white relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-24">
            <h2 className="text-4xl md:text-5xl font-garamond font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#373683] to-[#5b2c81] tracking-tight">
              Join Our Research
            </h2>
          </div>
          <p className="text-xl text-[#562c81] mb-8 tracking-wide font-roboto">
            Interested in contributing to our projects? We're always looking for passionate researchers and developers.
          </p>
          <a href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#373683] to-[#5b2c81] text-white rounded-xl font-medium hover:shadow-lg hover:shadow-[#562c81]/20 transition-all duration-300">
            Get Involved
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
