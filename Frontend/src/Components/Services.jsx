import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const serviceList = [
    {
      title: "Emergency Buddy Rush",
      description: "Urgent charging when you're stranded",
      features: ["24/7 Available", "GPS Tracking", "Emergency Support"],
      icon: "fa-triangle-exclamation",
    },
    {
      title: "Home Charging Setup",
      description: "Professional installation at your doorstep",
      features: ["Certified Installers", "Affordable Plans", "Warranty Covered"],
      icon: "fa-house-chimney",
    },
    {
      title: "Battery Health Check",
      description: "Keep your EV battery in top shape",
      features: ["Detailed Report", "AI-Based Monitoring", "Free Recommendations"],
      icon: "fa-car-battery",
    },
    {
      title: "On-Demand Maintenance",
      description: "Quick fixes and scheduled care",
      features: ["Multi-Point Inspection", "Doorstep Support", "Genuine Parts"],
      icon: "fa-tools",
    },
  ];

  return (
    <section
      id="services"
      className="mt-20 px-4 sm:px-8 py-16 bg-gradient-to-br from-[#f7fbff] to-[#f9fff9]"
    >
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
          🔧 Our Premium Services
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
          Complete EV Care with{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Rajasthani Touch
          </span>
        </h2>

        <p className="text-gray-600 mt-4 text-sm sm:text-base">
          From emergency charging to regular maintenance, VoltCare ensures
          dependable service with warmth and reliability.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {serviceList.map((service, idx) => (
          <div
            key={idx}
            className="
              relative group bg-white/80 backdrop-blur
              rounded-3xl p-6 shadow-md
              border border-gray-100
              transition-all duration-300
              hover:shadow-2xl hover:-translate-y-2
            "
          >
            {/* ICON */}
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-red-500 text-white text-2xl shadow-lg mb-6 mx-auto">
              <i className={`fa-solid ${service.icon}`} />
            </div>

            {/* CONTENT */}
            <h3 className="text-lg font-bold text-gray-900 text-center mb-1">
              {service.title}
            </h3>
            <p className="text-gray-500 text-sm text-center mb-4">
              {service.description}
            </p>

            {/* FEATURES */}
            <div className="space-y-2 text-sm text-gray-600 mb-6">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <i className="fa-solid fa-circle-check text-green-500 text-sm"></i>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link to="/book">
              <button
                className="
                  w-full py-2.5 rounded-xl font-semibold text-white
                  bg-gradient-to-r from-green-500 to-emerald-600
                  hover:from-emerald-600 hover:to-green-600
                  transition shadow-md hover:shadow-lg
                "
              >
                Book Now
              </button>
            </Link>

            {/* HOVER GLOW */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-400/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
