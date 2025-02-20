import React from "react";

const CyberSecuritySection = () => {
  return (
    <section id="about" className="text-white py-12 md:px-10 px-5 md:pt-56 pt-32 bg-white">
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:gap-10 justify-center border-b border-[#59A93D] pb-20">
        {/* Image Section */}
        <div className="w-full">
          <img
            src="./investorimg.jpg" // Replace with your image URL
            alt="Cybersecurity Analyst"
            className="rounded-lg border-4 border-[#201F52]"
          />
        </div>
        {/* Text Section */}
        <div className="max-w-xl pt-10 md:pt-0 text-sm md:text-base">
          <h3 className="text-[#201F52] font-semibold mb-2">
            Investor Confidence
          </h3>
          <h2 className="md:text-5xl text-3xl font-light mb-4 text-black">
            A Secure Investment Opportunity
          </h2>
          <p className="text-[#444444] pb-5 md:text-base text-sm">
            EP implements a robust dual-layer audit system, ensuring rigorous internal compliance and independent external financial audits to maintain transparency and accountability.
          <br /><br />
            Investment funds will be released in phases based on pre-defined milestones, ensuring that funds are aligned with EP's progress and performance.
          <br /><br />
            An Investor Oversight Board will be established, providing regular reporting and governance to maintain investor confidence and ensure transparent communication about EP's operations.
          </p>
          {/* Feature List */}
          <div className="grid grid-cols-1 gap-4 mb-8 text-[#444444]">
            {[
              "Robust Audit System",
              "Milestone-Based Funding",
              "Investor Oversight Board",
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
      </div>
    </section>
  );
};

export default CyberSecuritySection;
