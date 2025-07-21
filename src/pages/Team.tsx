import React, { useState } from "react";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "John",
    title: "Chief Executive Officer",
    image: "/Jolu-Security-Website/lovable-uploads/team/John.png",
    tier: "executives",
    bio: "John brings over 9 years of experience in security management, corporate leadership, and strategic operations. As the visionary behind Jolu Group Security, he leads with integrity, empowering teams and fostering a culture of accountability. His deep understanding of risk management and client-centered solutions has been instrumental in positioning the company as a trusted name in Kenya’s security industry.",
  },
  {
    name: "Lucy",
    title: "Managing Director",
    image: "/Jolu-Security-Website/lovable-uploads/team/Lucy.png",
    tier: "executives",
    bio: "Lucy is a dynamic leader with a strong background in business operations, client relations, and organizational growth. With over a decade of experience in the security and service sectors, she plays a pivotal role in driving JOLU Group Security’s mission forward. Her hands-on leadership style, strategic mindset, and commitment to excellence have made her a cornerstone of the company’s continued success and expansion.",
  },
  {
    name: "Shem",
    title: "General Manager",
    image: "/Jolu-Security-Website/lovable-uploads/team/Shem.png",
    tier: "gm",
    bio: "Shem brings a wealth of experience in operational leadership, team management, and service excellence. As General Manager, he ensures that day-to-day activities across all departments run smoothly and efficiently. Known for his problem-solving abilities and attention to detail, Shem plays a key role in maintaining high service standards, optimizing internal processes, and delivering on client expectations across the country.",
  },
  {
    name: "Paul",
    title: "Head of Operations & Business Development - Nakuru",
    image: "/Jolu-Security-Website/lovable-uploads/team/Paul.png",
    tier: "ops",
    bio: "Paul leads operations and client engagement in Nakuru. With a hands-on leadership style and strong regional knowledge, he ensures service quality, team coordination, and lasting client relationships. His commitment to operational excellence supports our steady growth in the region.",
  },
  {
    name: "Kelvin",
    title: "Head of Operations & Business Development - Nairobi",
    image: "/Jolu-Security-Website/lovable-uploads/team/Kelvin.png",
    tier: "ops",
    bio: "Kelvin oversees operations and business growth in Nairobi. His experience in client relations and field coordination ensures reliable service delivery. Focused and adaptable, Kelvin drives performance while maintaining strong partnerships in the capital.",
  },
  {
    name: "Jackline",
    title: "Business Development Executive - Nakuru",
    image: "/Jolu-Security-Website/lovable-uploads/team/Jackline.png",
    tier: "bde",
    bio: "Jackline is a key figure in driving client engagement and service outreach in the Nakuru region. Her communication skills, attention to client needs, and commitment to quality ensure client satisfaction and business growth. She plays a crucial role in expanding our client base and strengthening our brand in the region.",
  },
  {
    name: "Leah",
    title: "Business Development Executive - Nairobi",
    image: "/Jolu-Security-Website/lovable-uploads/team/Leah.png",
    tier: "bde",
    bio: "Leah supports business expansion in Nairobi by cultivating strong client relationships and identifying new growth opportunities. With a client-first approach and a proactive mindset, she contributes to service excellence and strategic account development.",
  },
  {
    name: "Fred",
    title: "Business Development Executive - Nakuru",
    image: "/Jolu-Security-Website/lovable-uploads/team/Fred.png",
    tier: "bde",
    bio: "Fred’s expertise in client service and regional market knowledge enhances our business outreach in Nakuru. He’s passionate about security solutions that meet real-world challenges and plays a hands-on role in ensuring client expectations are met and exceeded.",
  },
];

const TeamCard = ({ member, setSelectedMember }) => (
  <motion.div
    onClick={() => setSelectedMember(member)}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
    className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden w-full max-w-xs hover:shadow-xl"
  >
    <div className="w-full h-44 bg-gray-100 flex items-center justify-center overflow-hidden">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-contain p-2"
      />
    </div>
    <div className="p-4 text-center">
      <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
      <p className="mt-1 text-gray-600 text-sm line-clamp-2">{member.title}</p>
    </div>
  </motion.div>
);

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const grouped = {
    executives: teamMembers.filter((m) => m.tier === "executives"),
    gm: teamMembers.filter((m) => m.tier === "gm"),
    ops: teamMembers.filter((m) => m.tier === "ops"),
    bde: teamMembers.filter((m) => m.tier === "bde"),
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 inline-block border-b-4 border-red-700 pb-1">
            Meet Our Team
          </h1>
        </div>

        <div className="space-y-16 max-w-7xl mx-auto">
          {/* Executives */}
          <div className="flex justify-center flex-wrap gap-8">
            {grouped.executives.map((m, i) => (
              <TeamCard key={i} member={m} setSelectedMember={setSelectedMember} />
            ))}
          </div>

          {/* GM */}
          <div className="flex justify-center">
            {grouped.gm.map((m, i) => (
              <TeamCard key={i} member={m} setSelectedMember={setSelectedMember} />
            ))}
          </div>

          {/* Ops */}
          <div className="flex justify-center flex-wrap gap-8">
            {grouped.ops.map((m, i) => (
              <TeamCard key={i} member={m} setSelectedMember={setSelectedMember} />
            ))}
          </div>

          {/* BDE */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {grouped.bde.map((m, i) => (
              <TeamCard key={i} member={m} setSelectedMember={setSelectedMember} />
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl p-6 relative">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-red-600"
                onClick={() => setSelectedMember(null)}
              >
                <X className="w-6 h-6" />
              </button>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full md:w-[40%] h-64 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {selectedMember.name}
                  </h2>
                  <p className="text-base text-gray-500 mb-4">
                    {selectedMember.title}
                  </p>
                  <p className="text-gray-700 text-base text-justify leading-relaxed">
                    {selectedMember.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Team;
