import React from "react";

const CyberSecuritySection = () => {
  return (
    <section id="about" className="text-white md:py-12 pt-10 md:px-10 px-5 md:pt-32 bg-white">
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 gap-10 justify-center border-b border-[#003180] border-opacity-20 md:pb-20">
        {/* Image Section */}
        <div className="w-full hidden md:block lg:block">
          <img
            src="./investorimg.jpg" // Replace with your image URL
            alt="Cybersecurity Analyst"
            className="rounded-lg border-4 border-[#201F52]"
          />
        </div>
        <div className="w-full block md:hidden lg:hidden">
          <img
            src="./investorimgm.jpg" // Replace with your image URL
            alt="Cybersecurity Analyst"
            className="rounded-lg border-4 border-[#201F52]"
          />
        </div>

        {/* Text Section */}
        <div className="md:max-w-xl md:pt-0 pt-5 text-sm md:text-base">
          <h3 className="text-[#201F52] font-semibold mb-2">
            Investor confidence
          </h3>
          <h2 className="md:text-4xl text-3xl mb-4 text-[#202630] font-semibold">
            A secure investment <br />opportunity
          </h2>
          <p className="text-[#474D57] md:text-base text-sm leading-normal pb-5">
            EP implements a robust dual-layer audit system, ensuring rigorous internal compliance and independent external financial audits to maintain transparency and accountability.
          <br /><br />
            Investment funds will be released in phases based on pre-defined milestones, ensuring that funds are aligned with EP's progress and performance.
          <br /><br />
            An Investor Oversight Board will be established, providing regular reporting and governance to maintain investor confidence and ensure transparent communication about EP's operations.
          </p>
          {/* Feature List */}
          <div className="grid grid-cols-1 gap-4 mb-8 text-[#201F52]">
            {[
              "Robust Audit System",
              "Milestone-Based Funding",
              "Investor Oversight Board",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center md:p-4 p-2 border border-[#003180] border-opacity-20 font-semibold"
              >
                <span className="text-[#003180] text-lg mr-2">✔</span>
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