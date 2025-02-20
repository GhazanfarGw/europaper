import React from "react";

const CyberSecuritySection = () => {
  return (
    <section id="about" className="text-white py-12 md:px-10 px-5 md:pt-56 pt-32 bg-white">
      <div className="max-w-7xl mx-auto md:flex md:grid-cols-2 gap-10">
        {/* Image Section */}
        <div className="w-full">
          <img
            src="./Paperabout.jpg" // Replace with your image URL
            alt="Cybersecurity Analyst"
            className="rounded-lg border-4 border-[#201F52]"
          />
        </div>
        {/* Text Section */}
        <div className="max-w-xl pt-10 md:pt-0 text-sm md:text-base">
          <h3 className="text-[#201F52] font-semibold mb-2">
            Who We Are
          </h3>
          <h2 className="md:text-5xl text-3xl font-light mb-4 text-black">
            About Us
          </h2>
          <p className="text-[#444444] pb-5 md:text-base text-sm">
          Euro Papers is young and dynamic company. We convert paper to produce domestic and commercial products.
          <br /><br />
          The products are to be supplied to a variety of consumers ranging from independent retailers to wholesalers, both locally and nationally.
          <br /><br />
          The comprehensive range of products include specialist hygiene rolls, wet wipes, toilet rolls, hand towels, centre feed rolls and a variety of napkins.
          <br /><br />
          Our customer base includes the food service industry, the janitorial, industrial, automotive, healthcare distributors including the NHS and to the general retail trade. We will also supply clearance products to the local traders.
          <br /><br />
          We always put our customers first and our aim is achieve 100% customers satisfaction with our great products. We treat all our orders , small or large with the care and respect they deserve.
          </p>
          {/* Feature List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-[#444444]">
            {[
              "Premium Quality Products",
              "Serving Multiple Industries",
              "Nationwide Distribution",
              "Customer-Centric Approach",
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
          {/* Footer Section */}
          <div className="flex grid-cols-2 items-center gap-5 md:text-base text-xs">
            <button className="bg-[#201F52] text-[#ffffff] md:px-6 px-3 py-3 md:py-3 hover:[#201F52]">
              <a href="./contact">Contact Us
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberSecuritySection;