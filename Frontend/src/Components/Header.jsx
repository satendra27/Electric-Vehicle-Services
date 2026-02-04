import React from "react";
import header_img from "../assets/Header img.jpg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-4 flex justify-center">
      <div className="relative w-[92%] lg:w-[85%] h-[460px] sm:h-[520px] rounded-[32px] overflow-hidden shadow-2xl">

        {/* Background */}
        <img
          src={header_img}
          alt="EV Service"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="px-8 sm:px-12 lg:px-16 max-w-3xl text-white space-y-5">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-sm">
              ⚡ India’s Trusted EV Assistance
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Your EV’s{" "}
              <span className="text-green-400 drop-shadow">
                Best Buddy
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-white/90">
              On-road EV support in the <span className="font-semibold">Pink City</span>
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 text-sm sm:text-base text-white/85">
              <span className="flex items-center gap-2">🔋 24/7 Charging</span>
              <span className="flex items-center gap-2">🔧 Expert Maintenance</span>
              <span className="flex items-center gap-2">🏆 Premium Care</span>
            </div>

            <p className="text-sm text-white/70">
              Powered with authentic Rajasthani hospitality
            </p>

            {/* CTA Card */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 bg-white/10 backdrop-blur-lg p-4 rounded-2xl border border-white/20 w-fit">

              {/* Primary CTA */}
              <button onClick={() => navigate("/my-bookings")} className="px-8 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold transition-all duration-300 shadow-lg hover:scale-[1.02]">
                ⚡ Book Your Buddy
              </button>

              {/* Secondary CTA */}
              <button className="px-8 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-100 transition shadow">
                📞 Emergency: +91 89555 88289
              </button>
            </div>
          </div>
        </div>

        {/* Subtle vignette */}
        <div className="absolute inset-0 ring-1 ring-white/10 rounded-[32px]" />
      </div>
    </div>
  );
};

export default Header;
