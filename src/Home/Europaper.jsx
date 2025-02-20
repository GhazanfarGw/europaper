import React from "react";

const CyberSecuritySection = () => {
  return (
    <section id="about" className="text-white py-12 md:px-10 px-5 pt-32 bg-white">
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:gap-10 justify-center">
        {/* Text Section */}
        <div className="w-full block md:hidden lg:hidden">
          <img
            src="./Euroai.png" // Replace with your image URL
            alt="Cybersecurity Analyst"
            className="rounded-lg border-4 border-[#201F52]"
          />
        </div>
        <div className="max-w-xl pt-10 md:pt-0 text-sm md:text-base">
          <h3 className="text-[#201F52] font-semibold mb-2">
            Euro Paper Limited
          </h3>
          <h2 className="md:text-5xl text-3xl font-light mb-4 text-black">
            A Business Model Built for Growth​
          </h2>
          <p className="text-[#444444] pb-5 md:text-base text-sm">
            EP's core business operations are focused on AI-powered production and manufacturing. EP is the first fully automated tissue manufacturer in the UK, leveraging the latest technology to increase efficiency and reduce costs.
          <br /><br />
            EP has established distribution channels through major retailers like Tesco, Asda, Lidl, Aldi, Home Bargains as well as corporate and institutional buyers such as the NHS and the Ministry of Defence.​
          <br /><br />
            EP also generates revenue through white-label production, institutional contracts, and the development of new ESG and premium product lines.​
          </p>
          {/* Feature List */}
          <div className="grid grid-cols-1 gap-4 mb-8 text-[#444444]">
            {[
              "AI-Powered Manufacturing",
              "Strategic Retail & Institutional Partnerships",
              "Diverse Revenue Streams",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center bg-[#ebe7e7] md:p-4 p-2 border border-[#59A93D] font-semibold"
              >
                <span className="text-[#59A93D] text-lg mr-2">✔</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Image Section */}
        <div className="w-full hidden md:block lg:block">
          <img
            src="./Euroai.png" // Replace with your image URL
            alt="Cybersecurity Analyst"
            className="rounded-lg border-4 border-[#201F52]"
          />
        </div>
      </div>
    </section>
  );
};

export default CyberSecuritySection;
