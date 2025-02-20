import React from "react";

const SecurityStatsSection = () => {
  return (
    <section className="monitoring text-white md:py-48 py-8">
      <div className="md:max-w-7xl md:mx-auto md:text-center px-5 md:px-10">
        {/* Header Section */}
        <h2 className="md:text-5xl text-3xl font-light py-5">
            Investment Opportunity <br /> in Euro Paper​
        </h2>
        {/* Stats Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-5 py-8">
            <div>
                <p className="bg-[#59A93D] text-3xl font-semibold">
                    1
                </p>
                <h1 className="text-3xl mt-10 font-semibold">
                    Scaling Production​
                </h1>
                <p>
                    Raising £X to increase production capacity from 10,000 to 42,000 tonnes.
                </p>
            </div>
            <div>
                <p className="bg-[#59A93D] text-3xl font-semibold">
                    2
                </p>
                <h1 className="text-3xl mt-10 font-semibold">
                    Revenue Growth​
                </h1>
                <p>
                    Targeting 4x revenue growth by 2029.​
                </p>
            </div>
            <div>
                <p className="bg-[#59A93D] text-3xl font-semibold">
                    3
                </p>
                <h1 className="text-3xl mt-10 font-semibold">
                    Key Strengths​
                </h1>
                <p>
                    Leveraging AI for cost efficiencies and sustainability leadership.
                </p>
            </div>
            <div>
                <p className="bg-[#59A93D] text-3xl font-semibold">
                    4
                </p>
                <h1 className="text-3xl mt-10 font-semibold">
                    Exit Strategy​
                </h1>
                <p>
                    Potential for IPO or strategic exit within 5 years.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityStatsSection;
