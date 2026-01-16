import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "John",
    title: "Chief Executive Officer",
    image: "team/John.png",
    tier: "executives",
    bio: "John brings over 9 years of experience in security management, corporate leadership, and strategic operations. As the visionary behind Jolu Group Security, he leads with integrity, empowering teams and fostering a culture of accountability. His deep understanding of risk management and client-centered solutions has been instrumental in positioning the company as a trusted name in Kenya’s security industry.",
  },
  {
    name: "Lucy",
    title: "Managing Director",
    image: "team/Lucy.png",
    tier: "executives",
    bio: "Lucy is a dynamic leader with a strong background in business operations, client relations, and organizational growth. With over a decade of experience in the security and service sectors, she plays a pivotal role in driving Jolu Group Security’s mission forward. Her hands-on leadership style, strategic mindset, and commitment to excellence have made her a cornerstone of the company’s continued success and expansion.",
  },

  // ---- DOO (Shem) ----
  {
    name: "Shem",
    title: "Director of Operations",
    image: "team/Shem.png",
    tier: "gm",
    bio: "Shem oversees operational strategy and execution, ensuring efficiency and consistency in service delivery. His leadership drives smooth coordination across departments and enhances customer satisfaction. He also manages Overall Operations, After Sales Services and Customer Relations, In-charge of all Documentation and Contracts, Digital Marketing and Graphic Design.",
  },

  // ---- GM (Kelvin) ----
  {
    name: "Kelvin",
    title: "General Manager",
    image: "team/Kelvin.png",
    tier: "ops",
    bio: "Kelvin provides overall leadership and direction for Jolu Security. He oversees Finance, HR, IT and Sales Management. His vision for growth and commitment to excellence continues to strengthen the company’s position as a trusted security partner across Kenya.",
  },

  // ---- BDR Paul ----
  {
    name: "Paul",
    title: "Business Development Representative - Nakuru",
    image: "team/Paul.png",
    tier: "bde",
    bio: "Paul oversees client engagement and business growth in the Nakuru region. With practical field experience and a strong understanding of client needs, he plays a key role in driving regional expansion, building strong relationships, and ensuring service satisfaction.",
  },

  // ---- BDR Catherine ----
  {
    name: "Cate",
    title: "Business Development Representative - Nairobi",
    image: "team/Catherine.png",
    tier: "bde",
    bio: "Catherine leads business development efforts in Nairobi, focusing on client acquisition, relationship management, and service continuity. Her professionalism, communication skills, and strategic approach make her an important contributor to the company’s growth in the capital.",
  },
];

const TeamCard = ({ member, setSelectedMember }) => (
  <motion.div
    onClick={() => setSelectedMember(member)}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
    className="cursor-pointer bg-white dark:bg-zinc-800 rounded-xl shadow-md overflow-hidden w-full max-w-xs"
  >
    <div className="w-full h-36 sm:h-40 bg-white dark:bg-zinc-900 flex items-center justify-center overflow-hidden">
      <img
        src={`${import.meta.env.BASE_URL}lovable-uploads/${member.image}`}
        alt={member.name}
        className="w-full h-full object-contain p-2"
      />
    </div>
    <div className="p-4 text-center">
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
        {member.name}
      </h3>
      <p className="mt-1 text-gray-600 dark:text-gray-300 text-xs sm:text-sm line-clamp-2">
        {member.title}
      </p>
    </div>
  </motion.div>
);

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedMember ? "hidden" : "auto";
  }, [selectedMember]);

  const grouped = {
    executives: teamMembers.filter((m) => m.tier === "executives"),
    gm: teamMembers.filter((m) => m.tier === "gm"),
    ops: teamMembers.filter((m) => m.tier === "ops"),
    bde: teamMembers.filter((m) => m.tier === "bde"),
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-zinc-900 transition-colors">
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="relative mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-2">
            Meet Our Team
          </h1>
          <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between">
            <div className="w-1/5 h-1 bg-red-700" />
            <div another className="w-1/5 h-1 bg-red-700" />
          </div>
        </div>

        <div className="space-y-16 max-w-7xl mx-auto">
          {/* Executives */}
          <div className="flex justify-center flex-wrap gap-6 sm:gap-8">
            {grouped.executives.map((m, i) => (
              <TeamCard key={i} member={m} setSelectedMember={setSelectedMember} />
            ))}
          </div>

          {/* DOO (center) */}
          <div className="flex justify-center">
            {grouped.gm.map((m, i) => (
              <TeamCard key={i} member={m} setSelectedMember={setSelectedMember} />
            ))}
          </div>

          {/* GM (center) */}
          <div className="flex justify-center flex-wrap gap-6 sm:gap-8">
            {grouped.ops.map((m, i) => (
              <TeamCard key={i} member={m} setSelectedMember={setSelectedMember} />
            ))}
          </div>

          {/* BDR — now side-by-side AND centered */}
          <div className="flex justify-center flex-wrap gap-6 sm:gap-8">
            {grouped.bde.map((m, i) => (
              <TeamCard key={i} member={m} setSelectedMember={setSelectedMember} />
            ))}
          </div>
        </div>

        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-2 sm:px-4 overflow-y-auto">
            <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-xl w-full max-w-xl sm:max-w-2xl max-h-screen overflow-y-auto p-4 sm:p-6 relative">
              <button
                className="absolute top-3 right-3 text-gray-500 dark:text-gray-300 hover:text-red-600"
                onClick={() => setSelectedMember(null)}
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-center">
                <div className="w-full md:w-[40%] h-48 sm:h-60 bg-gray-100 dark:bg-zinc-700 rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    src={`${import.meta.env.BASE_URL}lovable-uploads/${selectedMember.image}`}
                    alt={selectedMember.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-full md:w-[60%]">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                    {selectedMember.name}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-500 dark:text-gray-300 mb-3">
                    {selectedMember.title}
                  </p>
                  <p className="text-gray-700 dark:text-gray-200 text-sm sm:text-base text-justify leading-relaxed">
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
