import React from "react";

const Steps = () => {
  const stepData = [
    {
      id: 1,
      icon: "fa-phone",
      title: "Book Your Buddy",
      desc: "Call, WhatsApp, or use our app to book your EV buddy. Share your location and issue — we handle the rest.",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      id: 2,
      icon: "fa-truck",
      title: "Buddy On The Way",
      desc: "A certified EV buddy is dispatched instantly. Track live location and get real-time arrival updates.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      icon: "fa-circle-check",
      title: "Problem Solved",
      desc: "Your buddy arrives fully equipped, fixes the issue, and gets you safely back on the road.",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      id="HIW"
      className="py-20 px-4 bg-gradient-to-br from-[#f7fbff] to-[#f9fff9]"
    >
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
          📱 Simple 3-Step Process
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          How Your{" "}
          <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
            EV Buddy
          </span>{" "}
          Works
        </h2>

        <p className="text-gray-600 mt-4 text-sm sm:text-base">
          Getting help for your EV is effortless. Experience professional care
          with the warmth of authentic Rajasthani hospitality.
        </p>
      </div>

      {/* STEPS */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {stepData.map((step) => (
          <div
            key={step.id}
            className="
              relative bg-white/80 backdrop-blur
              rounded-3xl p-8 text-center
              shadow-md border border-gray-100
              transition-all duration-300
              hover:shadow-2xl hover:-translate-y-2
            "
          >
            {/* STEP NUMBER */}
            <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold shadow">
              {step.id}
            </div>

            {/* ICON */}
            <div
              className={`mx-auto mb-6 w-20 h-20 rounded-2xl flex items-center justify-center
              bg-gradient-to-br ${step.gradient} text-white text-3xl shadow-lg`}
            >
              <i className={`fa-solid ${step.icon}`} />
            </div>

            {/* CONTENT */}
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {step.desc}
            </p>

            {/* HOVER GLOW */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
