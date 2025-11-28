import React from "react";

const tips = [
  {
    id: 1,
    title: "Keep Them Warm",
    description:
      "Make sure your pets have warm bedding and blankets to protect them from cold floors and low temperatures.",
    icon: "❄️",
  },
  {
    id: 2,
    title: "Limit Outdoor Time",
    description:
      "Avoid letting your pets stay outside for long periods. Winter cold can cause hypothermia and frostbite.",
    icon: "🐾",
  },
  {
    id: 3,
    title: "Keep Them Hydrated",
    description:
      "Pets can get dehydrated during winter. Check their water bowl often to ensure it's fresh and not frozen.",
    icon: "💧",
  },
  {
    id: 4,
    title: "Moisturize Skin",
    description:
      "Use pet-safe moisturizers to prevent dry skin during cold weather. Avoid human lotions.",
    icon: "🧴",
  },
];

const WinterCareTips = () => {
  return (
    <div className="mt-12 px-8 lg:px-36">
      <h3 className="font-bold text-3xl text-center mb-6">
        Winter Care Tips for Pets
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="bg-blue-50 p-6 shadow-md rounded-xl hover:shadow-lg transition"
          >
            <div className="text-5xl mb-4 text-center">{tip.icon}</div>
            <h2 className="font-bold text-xl text-center mb-2">
              {tip.title}
            </h2>
            <p className="text-gray-700 text-center">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinterCareTips;
