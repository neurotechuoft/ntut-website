import React from 'react';

const GoldSponsors: React.FC = () => {
  return (
    <section className="py-12 px-6 md:px-16 bg-gradient-to-b from-white to-[#e7e7e7]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-garamond font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#373683] to-[#5b2c81] tracking-tight leading-[1.2] py-2">
            Our Gold Sponsors
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {[1, 2, 3].map((sponsor) => (
            <div key={sponsor} className="group p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 
                        hover:scale-[1.02] border border-[#562c81]/20">
              <div className="w-48 h-24 bg-gradient-to-r from-[#373683]/10 to-[#5b2c81]/10 rounded-lg flex items-center justify-center">
                <span className="text-[#562c81]/40 font-roboto">Sponsor {sponsor}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoldSponsors;