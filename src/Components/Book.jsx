import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { vehicleList } from '../assets/vehicleList';
import { serviceList } from '../assets/ServiceList';
import BookingStep4 from './BookingStep4';

const Book = () => {
  const [step, setStep] = useState(1);
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [selectedService, setSelectedService] = useState("")

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [location, setLocation] = useState("");
  const [currentCoords, setCurrentCoords] = useState(null); // {lat, lng}
  const [address, setAddress] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");



  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setCurrentCoords({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
          setAddress(`Lat: ${pos.coords.latitude}, Lng: ${pos.coords.longitude}`);
        },
        (err) => {
          toast.error("Unable to retrieve your location");
          console.error(err);
        }
      );
    } else {
      toast.info("Geolocation is not supported by this browser.");
    }
  };



  const [bookingData, setBookingData] = useState({
    service: "EV Health Check",
    vehicle: "Commercial Vehicle",
    model: "Mahindra Treo",
    location: "Malviya Nagar, Jaipur",
    time: "ASAP",
    total: 499
  });

  const handleConfirmBooking = () => {
    toast.success("Booking Confirmed!");
    // You can also call API here
  };
  return (

    <div className="bg-[#effaf7]">
      <ToastContainer />
      {/* Progress Steps */}
      <div className="w-full overflow-x-auto">
        <div className="flex items-center justify-center gap-0 py-10 min-w-[400px] sm:min-w-full px-4 sm:px-10 md:px-20 lg:px-40">
          {["Vehicle", "Service", "Details", "Confirm"].map((label, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center">
                <div className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold ${index + 1 <= step ? "bg-[#108fee]" : "bg-gray-300"
                        }`}
                    >
                      {index + 1}
                    </div>
                    <p className="text-sm mt-2 text-center">{label}</p>
                  </div>
                  {index < 3 && (
                    <div className={`h-[3px] w-[50px] sm:w-[80px] md:w-[100px] ml-2 mb-6 mr-2 ${index + 2 <= step ? "bg-[#108fee]" : " bg-gray-300"}`} />
                  )}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Conditional Step Content */}
      <div className="bg-white w-[95%] md:w-[85%] lg:w-[75%] xl:w-[65%] m-auto rounded-xl shadow-sm p-10">
        {step === 1 && (
          <>
            <div className="text-2xl md:text-3xl font-bold text-center p-2">Select Your Vehicle</div>
            {vehicleList.map((vehicle, i) => (
              <div
                key={i}
                onClick={() => setSelectedVehicle(vehicle.title)}
                className={`border-2 flex flex-col sm:flex-row items-center p-4 sm:p-6 my-4 rounded-lg cursor-pointer transition-all duration-200 ${selectedVehicle === vehicle.title ? "border-blue-500" : "border-gray-200"
                  }`}
              >
                <div className="w-20 h-20 bg-[#dbeafe] rounded-full flex items-center justify-center text-blue-600 text-xl font-bold mb-4 sm:mb-0 sm:mr-6">
                  <i className={`fa-solid ${vehicle.icon}`}></i>
                </div>
                <div className="flex-1 w-full">
                  <div className="font-bold text-xl md:text-2xl mb-4 text-center sm:text-left">
                    {vehicle.title}
                  </div>
                  <ul className="flex flex-wrap justify-center sm:justify-start gap-3">
                    {vehicle.models.map((model, j) => (
                      <li
                        key={j}
                        className="px-3 py-1 text-sm border border-gray-300 rounded-md text-center whitespace-nowrap"
                      >
                        {model}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </>
        )}



        {step === 2 && (
          <>
            <div className="text-2xl md:text-3xl font-bold text-center p-2">
              Choose Your Service
            </div>
            {serviceList.map((service, i) => (
              <div
                key={i}
                onClick={() => setSelectedService(service.title)}
                className={`border-2 flex flex-col sm:flex-row items-center p-4 sm:p-6 my-4 rounded-lg cursor-pointer transition-all duration-200 ${selectedService === service.title ? "border-blue-500" : "border-gray-200"
                  }`}
              >
                {/* Icon */}
                <div className="w-20 h-20 bg-[#dbeafe] rounded-full flex items-center justify-center text-blue-600 text-2xl mb-4 sm:mb-0 sm:mr-6">
                  <i className={`fa-solid ${service.icon}`}></i>
                </div>

                {/* Service Details */}
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="font-bold text-xl md:text-2xl text-center sm:text-left">
                      {service.title}
                    </div>
                    <div className="font-bold text-xl text-center sm:text-right">
                      ₹{service.price}
                    </div>
                  </div>
                  <div className="text-gray-600 mb-4 text-center sm:text-left">
                    {service.description}
                  </div>

                  {/* Tags */}
                  <ul className="flex flex-wrap justify-center sm:justify-start gap-3">
                    {service.tags.map((tag, j) => (
                      <li
                        key={j}
                        className="px-3 py-1 text-sm border border-gray-300 rounded-md text-center whitespace-nowrap"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </>
        )}


        {step === 3 && (
          <div className="space-y-6">
            <div className="text-2xl md:text-3xl font-bold text-center">
              Booking Details
            </div>

            {/* Full Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="border p-3 rounded-md w-full"
              />
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border p-3 rounded-md w-full"
              />
            </div>

            {/* Vehicle Model */}
            <select
              value={vehicleModel}
              onChange={(e) => setVehicleModel(e.target.value)}
              className="border p-3 rounded-md w-full"
            >
              <option value="">Select Vehicle Model</option>
              <option value="Piaggio Ape E-City">Piaggio Ape E-City</option>
              <option value="Tata Ace EV">Tata Ace EV</option>
              <option value="Mahindra Treo">Mahindra Treo</option>
            </select>

            {/* Location */}
            <div className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Search location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="border p-3 rounded-md flex-1"
                />
                <button
                  onClick={getCurrentLocation}
                  className="bg-blue-500 text-white px-4 rounded-md"
                >
                  Use This
                </button>
              </div>
              {currentCoords && (
                <div className="bg-green-50 border border-green-300 text-green-700 p-3 rounded-md">
                  Selected Location: {currentCoords.lat}, {currentCoords.lng}
                </div>
              )}
            </div>

            {/* Address */}
            <input
              type="text"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border p-3 rounded-md w-full"
            />

            {/* Preferred Time */}
            <input
              type="datetime-local"
              value={preferredTime}
              onChange={(e) => setPreferredTime(e.target.value)}
              className="border p-3 rounded-md w-full"
            />

            {/* Additional Requirements */}
            <textarea
              placeholder="Any specific requirements or issues..."
              value={additionalDetails}
              onChange={(e) => setAdditionalDetails(e.target.value)}
              className="border p-3 rounded-md w-full min-h-[100px]"
            ></textarea>

          </div>
        )}



        {step === 4 && (
          <BookingStep4
            bookingData={bookingData}
            setStep={setStep}
            handleConfirmBooking={handleConfirmBooking}
          />
        )}


        {/* Add other step content like Services, Details, Confirm using step === 2, 3, 4 */}

        {/* Navigation */}

        {step !== 4 && (
  <div className="flex justify-between mt-6">
    <button
      className="border border-gray-500 py-1 px-3 rounded-lg shadow-sm"
      onClick={() => setStep((prev) => Math.max(1, prev - 1))}
      disabled={step === 1}
    >
      <i className="fa-solid fa-arrow-left"></i> Previous
    </button>

    <button
      className="border border-gray-500 py-1 px-3 rounded-lg shadow-sm bg-blue-400 text-white"
      onClick={() => {
        if (step === 1 && !selectedVehicle) {
          toast.info("Please select a vehicle before proceeding");
          return;
        } else if (step === 2 && !selectedService) {
          toast.info("Please Select a Service before proceeding");
          return;
        } else if (
          step === 3 &&
          (!fullName || !phone || !vehicleModel || !address)
        ) {
          toast.info("Please fill all required fields");
          return;
        }

        setStep((prev) => Math.min(4, prev + 1));
      }}
    >
      Next <i className="fa-solid fa-arrow-right"></i>
    </button>
  </div>
)}

        
      </div>
    </div>
  );
};

export default Book;
