import React, { useState } from "react";

const faqs = [
  {
    question: "How does booking work?",
    answer:
      "You select your vehicle and service, provide details, and submit a booking. Service providers then send price quotes which you can compare and choose from.",
    icon: "🛵",
  },
  {
    question: "Is the shown price final?",
    answer:
      "No. The price shown is only an estimate. The final price is decided by the service provider after reviewing your issue.",
    icon: "💰",
  },
  {
    question: "How do I choose a provider?",
    answer:
      "Once providers send quotes, you can compare prices, ratings, and select the provider you prefer.",
    icon: "👨‍🔧",
  },
  {
    question: "How does payment work?",
    answer:
      "Payment is done after service completion. Currently, cash payment is supported. Online payments will be added soon.",
    icon: "💳",
  },
  {
    question: "How do I know the service is completed?",
    answer:
      "After service completion, you receive an OTP. Share this OTP with the service provider to confirm the job completion.",
    icon: "🔐",
  },
];

const HelpCenterCustomer = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef7f3] to-[#f9fbff] p-4 sm:p-10">
      
      {/* HEADER */}
      <div className="relative max-w-4xl mx-auto mb-10 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500" />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-xl" />

        <div className="relative z-10 px-6 py-10 text-center text-white">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            ❓ Help Center
          </h1>
          <p className="mt-3 text-white/80 text-sm sm:text-base">
            Everything you need to know about bookings & services
          </p>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{faq.icon}</span>
                <h3 className="font-semibold text-gray-800 text-base sm:text-lg">
                  {faq.question}
                </h3>
              </div>

              <span className="text-xl text-gray-500">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            {activeIndex === index && (
              <div className="px-6 pb-5 text-gray-600 text-sm sm:text-base leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}

        {/* WARNING / NOTE */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-5 flex items-start gap-3">
          <span className="text-xl">⚠️</span>
          <p className="text-sm sm:text-base text-gray-700">
            For urgent issues, please contact your assigned service provider directly
            through the app.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterCustomer;
