import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

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

  const handleMemberClick = (id) => {
    setSelectedMemberId(selectedMemberId === id ? null : id);
  };

  return (
    <div className="bg-white">
      <div className="md:pt-28 pt-24 px-5 md:px-10 justify-center mx-auto max-w-screen-xl md:pb-20">
        <h1 className="first md:text-5xl font-light text-2xl text-[#444444] py-3 text-center mx-auto md:pt-28">
          Leadership
        </h1>

        {/* Executive Officers Section */}
        <h2 className="text-3xl pt-10 underline pb-8 second font-light text-[#444444]">Meet the Team</h2>
        <div className="grid grid-cols-4 gap-4 pb-16 border-b-2">
          {teamMembers.map((member) => (
            <React.Fragment key={member.id}>
              {/* Member Card */}
              <div
                className={`team-member third hover:translate-x-0.5 border ${
                  selectedMemberId && selectedMemberId !== member.id ? "fade-out" : ""
                }`}
                onClick={() => handleMemberClick(member.id)}
              >
                <img className="hover:scale-105 duration-200" src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>

              {/* Expanded Profile */}
              {selectedMemberId === member.id && (
                <div className="expanded-profile w-full mx-auto">
                  <div className="profile-content mx-auto">
                    {/* Left: Image */}
                    <div className="mt-8 px-8 py-10 max-w-sm">
                      <img src={member.image} alt={member.name} />
                    </div>

                    {/* Right: Text Content */}
                    <div className="profile-details mt-10 mr-16 mx-auto">
                      <h2>{member.name}</h2>
                      <h4>{member.role}</h4>
                      <p className="text-sm max-w-screen-lg">{member.description}</p>

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

                      <button onClick={() => setSelectedMemberId(null)}>Close</button>
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

    </div>

  );
};

export default TeamPage;