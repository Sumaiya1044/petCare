import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PopularSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/services.json') 
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="mt-8 px-8 lg:px-36">
      <div className="mb-6">
        <h3 className="font-bold text-3xl text-center">
          Popular Winter Care Services
        </h3>
      </div>

      {/* Cards container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {services.map(service => (
          <div key={service.serviceId} className="card bg-base-100 shadow-md">
            <figure>
              <img
                src={service.image}
                alt={service.serviceName}
                className="w-full h-72 object-cover" 
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service.serviceName}</h2>
              <div className='flex justify-between'>
                <p>Price: {service?.price}</p>
                <p>Rating: {service?.rating}</p>
              </div>
              <div className="card-actions justify-end">
                <Link 
                  to={`/details/${service.serviceId}`} 
                  className="btn btn-primary"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSection;
