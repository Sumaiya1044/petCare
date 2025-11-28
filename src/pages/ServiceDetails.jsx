import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);

  useEffect(() => {
    fetch("/services.json")
      .then(res => res.json())
      .then(data => {
        const found = data.find(s => s.serviceId === Number(id));
        setService(found);
      })
      .catch(err => console.log(err));
  }, [id]);

  if (!service) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <button 
        className="btn btn-sm mb-4" 
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>
      <h1 className="text-3xl font-bold mb-4">{service.serviceName}</h1>
      <img
        src={service.image}
        alt={service.serviceName}
        className="w-full h-96 object-cover rounded-md mb-4"
      />
      <p className="text-gray-700 mb-2">
        <strong>Provider:</strong> {service.providerName} ({service.providerEmail})
      </p>
      <p className="text-gray-700 mb-2"><strong>Price:</strong> ${service.price}</p>
      <p className="text-gray-700 mb-2"><strong>Rating:</strong> {service.rating}</p>
      <p className="text-gray-700 mb-2"><strong>Slots Available:</strong> {service.slotsAvailable}</p>
      <p className="text-gray-700 mb-4"><strong>Description:</strong> {service.description}</p>

      {/* Booking Form */}
      <form className="flex flex-col gap-2 max-w-md">
        <input type="text" placeholder="Your Name" className="input input-bordered" required />
        <input type="email" placeholder="Your Email" className="input input-bordered" required />
        <button type="submit" className="btn btn-primary mt-2">Book Now</button>
      </form>
    </div>
  );
};

export default ServiceDetails;
