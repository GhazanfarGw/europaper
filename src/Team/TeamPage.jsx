import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import './sty.css';

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Abid Khan​",
      role: "Founder & CEO",
      image: "./person-icon-person-icon-17.jpg",
      description: `25+ years of experience in law and manufacturing..\n`,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 2,
      name: "Mohammad Ali​​",
      role: "Director",
      image: "./person-icon-person-icon-17.jpg",
      description: `35+ years of experience in tissue manufacturing and supply chain management.\n`,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 3,
      name: "Rob Smith​",
      role: "Commercial Director",
      image: "./person-icon-person-icon-17.jpg",
      description: `Experience at leading companies like Northwood, Kimberly-Clark, and Lucart.\n`,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 4,
      name: "Steve Foster​",
      role: "National Accounts Controller",
      image: "./person-icon-person-icon-17.jpg",
      description: `Responsible for key client relationships with Tesco, Aldi, and Poundland.\n`,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
  ];

  const [selectedMemberId, setSelectedMemberId] = useState(null);
  const [expandedDescriptionId, setExpandedDescriptionId] = useState(null);

  const handleMemberClick = (id) => {
    setSelectedMemberId(selectedMemberId === id ? null : id);
  };

  const handleLearnMoreClick = (id) => {
    setExpandedDescriptionId(expandedDescriptionId === id ? null : id);
  };
  return (
    <div className="bg-white">
      <div className="md:pt-28 py-24 px-5 md:px-10 justify-center mx-auto max-w-screen-xl md:pb-20">
        <h1 className="second font-light text-3xl text-[#444444] py-3 text-center mx-auto md:pt-28">
          Leadership
        </h1>

        {/* Executive Officers Section */}
        <h2 className="first md:text-3xl font-light text-2xl text-[#444444] py-8 underline pb-5">Meet The Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {teamMembers.map((member) => {
            const isExpanded = expandedDescriptionId === member.id;
            const shortDescription = member.description.split(" ").slice(0, 75).join(" ") + "...";

            return (
              <React.Fragment key={member.id}>
                {/* Member Card */}
                <div
                  className={`team-member mx-3 second border ${
                    selectedMemberId && selectedMemberId !== member.id ? "fade-out" : ""
                  }`}
                  onClick={() => handleMemberClick(member.id)}
                >
                  <img src={member.image} alt={member.name} />
                  <h6 className="font-light text-xl text-[#444444] pl-2">{member.name}</h6>
                  <p className="text-[#777] text-xs pl-2 pt-2">{member.role}</p>
                </div>

                {/* Expanded Profile */}
                {selectedMemberId === member.id && (
                  <div className="expanded-profile">
                    <div className="md:profile-content bg-white mt-16">
                      {/* Left: Image */}
                      <div className="">
                        <img
                          className="mx-auto mt-44"
                          src={member.image}
                          alt={member.name}
                        />
                      </div>

                      {/* Right: Text Content */}
                      <div className="profile-details">
                        <h2 className="font-light text-2xl text-[#444444] py-3">{member.name}</h2>
                        <h4>{member.role}</h4>

                        {/* Description with Learn More */}
                        <p className="text-sm">
                          {isExpanded ? member.description : shortDescription}
                        </p>
                        <button
                          className="text-blue-500 underline text-sm"
                          onClick={() => handleLearnMoreClick(member.id)}
                        >
                          {isExpanded ? "Show Less" : "Learn More"}
                        </button>

                        {/* Social Media Links */}
                        <div className="social-links">
                          <a
                            href={member.social.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaFacebook />
                          </a>
                          <a
                            href={member.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaTwitter />
                          </a>
                          <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaLinkedin />
                          </a>
                        </div>

                        <button className="" onClick={() => setSelectedMemberId(null)}>
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default TeamPage;