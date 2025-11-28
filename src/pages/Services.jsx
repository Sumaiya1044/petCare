import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-36 mt-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center lg:text-left">
        Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {services.length === 0 ? (
          <p className="col-span-full text-center">Loading services...</p>
        ) : (
          services.map((service) => (
            <motion.div
              key={service.serviceId}
              className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3, delay: service.serviceId * 0.1 }}
            >
              <figure>
                <img
                  src={service.image}
                  alt={service.serviceName}
                  className="w-full h-64 sm:h-72 object-cover rounded-t-lg"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-lg sm:text-xl">
                  {service.serviceName}
                </h2>
                <div className="flex justify-between mt-2 text-sm sm:text-base">
                  <p>Price: ${service.price}</p>
                  <p>Rating: {service.rating}</p>
                </div>
                <div className="card-actions justify-end mt-4">
                  <Link to={`/details/${service.serviceId}`}>
                    <button className="btn btn-primary btn-sm sm:btn-md">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default Services;
