import React from "react";

const Data = () => {
  const stats = [
    {
      value: "2500+",
      label: "Total Bookings",
      growth: "+15% this month",
      icon: "fa-calendar-check",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      value: "1800+",
      label: "Happy Customers",
      growth: "+15% this month",
      icon: "fa-face-smile",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      value: "45+",
      label: "Active Buddies",
      growth: "+15% this month",
      icon: "fa-user-group",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      value: "4.8 ★",
      label: "Average Rating",
      growth: "+15% this month",
      icon: "fa-star",
      gradient: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-[#f7fbff] to-[#f9fff9]">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Trusted by Thousands Across{" "}
            <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
              Jaipur
            </span>
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            Numbers that reflect our commitment to quality EV care
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="
                relative bg-white/80 backdrop-blur
                rounded-3xl p-6 text-center
                border border-gray-100
                shadow-md transition-all duration-300
                hover:shadow-2xl hover:-translate-y-2
              "
            >
              {/* ICON */}
              <div
                className={`mx-auto mb-4 w-14 h-14 rounded-2xl flex items-center justify-center
                bg-gradient-to-br ${item.gradient} text-white text-xl shadow-lg`}
              >
                <i className={`fa-solid ${item.icon}`} />
              </div>

              {/* VALUE */}
              <h3 className="text-3xl font-extrabold text-gray-900">
                {item.value}
              </h3>

              {/* LABEL */}
              <p className="text-gray-600 text-sm mt-1">
                {item.label}
              </p>

              {/* GROWTH */}
              <p className="mt-3 text-sm font-semibold text-green-600 flex items-center justify-center gap-1">
                <i className="fa-solid fa-arrow-trend-up"></i>
                {item.growth}
              </p>

              {/* GLOW */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-400/10 to-emerald-400/10 opacity-0 hover:opacity-100 transition pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Data;
