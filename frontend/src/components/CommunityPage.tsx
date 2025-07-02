import React from 'react';

const CommunityPage: React.FC = () => {
  return (
    <div className="text-[#562c81] bg-[#e7e7e7] min-h-screen font-roboto">
      {/* Upcoming Events Section */}
      <section className="py-24 px-6 md:px-16 bg-gradient-to-b from-white to-[#e7e7e7] relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-4 md:text-5xl font-garamond font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#373683] to-[#5b2c81] tracking-tight leading-[1.2] py-2">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 gap-8">
            {[1].map((event) => (
              <div key={event}
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 
                          hover:scale-[1.02] border border-[#562c81]/20">
                <h3 className="text-3xl font-garamond font-bold mb-6 text-[#562c81] group-hover:text-[#6b4b9c] transition-colors tracking-tight">
                  Upcoming Event {event}
                </h3>
                <p className="text-xl text-[#562c81] mb-6 tracking-wide font-roboto">Event description placeholder.</p>
                <a href={`/events/upcoming-${event}`}
                  className="inline-flex items-center text-lg text-[#562c81] hover:text-[#6b4b9c] transition-colors tracking-wide font-roboto">
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

      {/* Podcast Section */}
      <section className="py-16 px-6 md:px-16 bg-gradient-to-b from-[#e7e7e7] to-white relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-4 md:text-5xl font-garamond font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#373683] to-[#5b2c81] tracking-tight leading-[1.2] py-2">
            NeurotechUofT Podcast
          </h2>
          <div className="flex justify-center">
            <div className="w-full max-w-3xl group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 
                          hover:scale-[1.02] border border-[#562c81]/20">
              <h3 className="text-4xl font-garamond font-bold mb-6 text-[#562c81] group-hover:text-[#6b4b9c] transition-colors tracking-tight">
                Latest Podcast Episode
              </h3>
              <p className="text-xl text-[#562c81] mb-6 tracking-wide font-roboto">
                Check out our latest episode, where we dive into the world of neurotechnology and its exciting developments!
              </p>
              <a href="/podcast"
                className="inline-flex items-center text-lg text-[#562c81] hover:text-[#6b4b9c] transition-colors tracking-wide font-roboto">
                Listen Now
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-16 px-6 md:px-16 bg-gradient-to-b from-white to-[#e7e7e7] relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-4 font-garamond font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#373683] to-[#5b2c81] tracking-tight leading-[1.2] py-2">
            Past Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((event) => (
              <div key={event}
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 
                          hover:scale-[1.02] border border-[#562c81]/20">
                <h3 className="text-2xl font-garamond font-bold mb-6 text-[#562c81] group-hover:text-[#6b4b9c] transition-colors tracking-tight">
                  Past Event {event}
                </h3>
                <p className="text-lg text-[#562c81] mb-6 tracking-wide font-roboto">Short description of past event.</p>
                <a href={`/events/past-${event}`}
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
    </div>
  );
};

export default CommunityPage;
