import React from 'react';

const AboutPage: React.FC = () => (
  <div className="text-[#562c81] bg-[#e7e7e7] min-h-screen font-roboto">
    <section
      className="flex flex-col items-center py-48 text-center relative overflow-hidden"
    >
      <div className="relative z-10">
        <p className="text-2xl md:text-3xl mb-6 max-w-3xl text-[#562c81] font-light leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)] tracking-wide">
          Innovating the Future - one neuron at a time 🧠
        </p>
      </div>
    </section>

    <section className="py-16 px-6 md:px-16 bg-gradient-to-b from-white to-[#e7e7e7] relative">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-garamond font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#373683] to-[#5b2c81] tracking-tight leading-[1.2] py-2">
          Mission & Vision
        </h2>
        <br></br>
        <p className="text-xl md:text-2xl leading-relaxed mb-8 text-[#562c81] tracking-wide">
          <strong className="text-[#562c81]">Our Mission: </strong>
          Drive neurotechnology innovation at the University of Toronto.
          Develop impactful, interdisciplinary solutions, such as NeuroMove, addressing real-world challenges like Parkinson's disease.
          Foster collaboration with leading research institutions and organizations across Toronto.
          Participate in global competitions, including the NeurotechX competition.
          Inspire and educate undergraduates through hands-on projects and initiatives.
        </p>
        <p className="text-xl md:text-2xl leading-relaxed text-[#562c81] tracking-wide">
          <strong className="text-[#562c81]">Our Vision: </strong>
          Mentor and support students passionate about neurotechnology.
          Host workshops on topics like EEG, EMG, bioprosthetics, and biomechanics to develop essential skills.
          Organize speaker events, podcasts, and conferences to connect students with industry and academic leaders.
          Act as a bridge between students and experts in neurotechnology.
          Promote cross-disciplinary collaboration through integrated hardware, software, and neuroscience subsystems.
        </p>
      </div>
    </section>

    <section className="py-16 px-6 md:px-16 bg-gradient-to-b from-[#e7e7e7] to-white relative">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-garamond font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#373683] to-[#5b2c81] tracking-tight leading-[1.2] py-2">
          Our Team
        </h2>
        <br />
        <div className="text-xl md:text-2xl mb-12 text-[#562c81] font-light leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)] tracking-wide">
          <iframe
            title="Our Team"
            className="airtable-embed"
            src="https://airtable.com/embed/appKtg9aGiMXKcCTU/shrxInUaJpN8XuPM2?viewControls=on"
            frameBorder="0"
            width="100%"
            height="800"
            style={{ background: 'transparent', border: '1px solid #ccc' }}
          />
        </div>
      </div>
    </section>
    <section className="py-16 px-6 md:px-16 bg-gradient-to-b from-[#e7e7e7] to-white relative">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-garamond font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#373683] to-[#5b2c81] tracking-tight leading-[1.2] py-2">
          Group Memories
        </h2>
        <br></br>
        <p className="text-xl md:text-2xl mb-12 text-[#562c81] font-light leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)] tracking-wide">
          A glimpse into our journey together—explore our group moments captured in pictures.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-[#562c81]/20">
            <img
              src="/pics/Group Photo 1-min.JPG"
              alt="Group Photo 1"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-[#562c81]/20">
            <img
              src="/pics/Group Photo 2-min.JPG"
              alt="Group Photo 2"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-[#562c81]/20">
            <img
              src="/pics/Software Subsystem-min.JPG"
              alt="Software Subsystem"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-[#562c81]/20">
            <img
              src="/pics/Neuroscience Subsystem-min.JPG"
              alt="Neuroscience Subsystem"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-[#562c81]/20">
            <img
              src="/pics/Hardware Subsystem-min.JPG"
              alt="Hardware Subsystem"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
