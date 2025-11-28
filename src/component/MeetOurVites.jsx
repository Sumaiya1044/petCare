import React from 'react';

const experts = [
  {
    id: 1,
    name: "Dr. Sarah Khan",
    specialization: "Small Animals Specialist",
    image: "https://i.ibb.co/tTRWP601/9e8e0ba48ddb32722b2122ac8e82137e.jpg", // put image in public/experts/
  },
  {
    id: 2,
    name: "Dr. Imran Hossain",
    specialization: "Surgery Expert",
    image: "https://i.ibb.co/HDYbvGxw/7181f17254c9a0ddfa17f35a94098bde.jpg",
  },
  {
    id: 3,
    name: "Dr. Nadia Rahman",
    specialization: "Dermatology Specialist",
    image: "https://i.ibb.co/qFj6sxQx/edf269d89114cafc001c53d30bcf61af.jpg",
  },
  {
    id: 4,
    name: "Dr. Arif Chowdhury",
    specialization: "Exotic Pets Specialist",
    image: "https://i.ibb.co/Tx28V9gT/2c4d1c3f9a400e04e3712c6f4728a6dd.jpgg",
  },
];

const ExpertSection = () => {
  return (
    <div className="mt-12 px-8 lg:px-36">
      <div className="mb-6 text-center">
        <h3 className="font-bold text-3xl">Meet Our Expert Vets</h3>
        <p className="text-gray-600 mt-2">
          Our professional veterinarians are ready to provide the best care for your pets.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {experts.map(expert => (
          <div key={expert.id} className="card bg-base-100 shadow-md text-center">
            <figure>
              <img
                src={expert.image}
                alt={expert.name}
                className="w-full h-72 object-cover rounded-t-md"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">{expert.name}</h2>
              <p className="text-gray-600">{expert.specialization}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertSection;
