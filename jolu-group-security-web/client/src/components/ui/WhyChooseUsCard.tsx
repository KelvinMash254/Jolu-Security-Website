// components/ui/WhyChooseUsCard.tsx
import React from 'react';

interface WhyChooseUsCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const WhyChooseUsCard = ({ icon, title, description }: WhyChooseUsCardProps) => {
  return (
    <div className="bg-red-700 p-6 rounded-lg hover:scale-105 transition transform duration-300 ease-in-out">
      <div className="flex items-center mb-4">
        <div className="p-3 bg-white/10 text-white rounded-lg">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white ml-4">{title}</h3>
      </div>
      <p className="text-red-100">{description}</p>
    </div>
  );
};
