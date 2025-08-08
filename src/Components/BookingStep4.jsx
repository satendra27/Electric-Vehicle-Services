import React from "react";

const BookingStep4 = ({
  bookingData,
  setStep,
  handleConfirmBooking
}) => {
  return (
    <div>
      <div className="text-2xl md:text-3xl font-bold text-center mb-6">
        Confirm Booking
      </div>

      {/* Booking Summary */}
      <div className="bg-blue-50 p-6 rounded-lg mb-6">
        <div className="font-semibold text-lg mb-4">Booking Summary</div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Service:</span>
            <span>{bookingData.service}</span>
          </div>
          <div className="flex justify-between">
            <span>Vehicle:</span>
            <span>{bookingData.vehicle}</span>
          </div>
          <div className="flex justify-between">
            <span>Model:</span>
            <span>{bookingData.model}</span>
          </div>
          <div className="flex justify-between">
            <span>Location:</span>
            <span>{bookingData.location}</span>
          </div>
          <div className="flex justify-between">
            <span>Time:</span>
            <span>{bookingData.time}</span>
          </div>
        </div>
        <div className="border-t border-gray-300 my-4"></div>
        <div className="flex justify-between font-bold text-lg">
          <span>Total:</span>
          <span className="text-green-600">₹{bookingData.total}</span>
        </div>
      </div>

      {/* Important Notes */}
      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-6">
        <div className="flex items-start">
          <span className="text-yellow-500 mr-2">⚠</span>
          <div className="text-sm space-y-1">
            <p>Your buddy will call you before arriving</p>
            <p>Payment can be made after service completion</p>
            <p>Service includes 30-day warranty</p>
            <p>Emergency services available 24/7</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button
          onClick={() => setStep(3)}
          className="border border-gray-500 py-1 px-3 rounded-lg shadow-sm"
        >
         <i className="fa-solid fa-arrow-left"></i> Previous
        </button>
        <button
          onClick={handleConfirmBooking}
          className="px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 flex items-center"
        >
          <i className="fa-solid fa-credit-card mr-2"></i> Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BookingStep4;
