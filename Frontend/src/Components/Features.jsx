import React from "react";

const Features = () => {
  const features = [
    {
      icon: "fa-shield-halved",
      title: "100% Safe & Secure",
      desc: "Certified technicians with full insurance coverage",
    },
    {
      icon: "fa-clock",
      title: "Quick Response",
      desc: "Average response time within 30–60 minutes",
    },
    {
      icon: "fa-location-dot",
      title: "Wide Coverage",
      desc: "Service available across all major areas of Jaipur",
    },
    {
      icon: "fa-user-group",
      title: "Expert Team",
      desc: "Experienced and background-verified professionals",
    },
    {
      icon: "fa-medal",
      title: "Quality Assured",
      desc: "Premium-quality service with warranty support",
    },
    {
      icon: "fa-headphones",
      title: "24/7 Support",
      desc: "Round-the-clock assistance whenever you need help",
    },
  ];

  return (
    <section className="mt-20 px-4 sm:px-8">

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-4">
          🚀 Why Choose VoltCare?
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
          Advanced Features for{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Modern EVs
          </span>
        </h2>

        <p className="text-gray-600 mt-4 text-sm sm:text-base">
          Designed to give EV owners peace of mind, speed, and premium service
          quality.
        </p>
      </div>

      {/* FEATURES GRID */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="
              relative group bg-white/80 backdrop-blur
              rounded-3xl p-8 shadow-md
              hover:shadow-2xl transition-all duration-300
              hover:-translate-y-2
              border border-gray-100
            "
          >
            {/* Icon */}
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 text-white text-2xl shadow-lg mb-6">
              <i className={`fa-solid ${item.icon}`} />
            </div>

            {/* Content */}
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>

            {/* Hover glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
