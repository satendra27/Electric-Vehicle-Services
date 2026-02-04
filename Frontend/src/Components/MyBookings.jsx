import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchBookings = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login to see bookings");
      return;
    }

    try {
      const res = await fetch(
        "https://electric-vehicle-services.onrender.com/api/bookings/my-bookings",
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const data = await res.json();
      if (!res.ok) return toast.error(data.message);

      setBookings(data || []);
    } catch {
      toast.error("Server error fetching bookings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  useEffect(() => {
    const interval = setInterval(fetchBookings, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleCancel = async (bookingId) => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(
        `https://electric-vehicle-services.onrender.com/api/bookings/cancel/${bookingId}`,
        {
          method: "PUT",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = await res.json();
      if (!res.ok) return toast.error(data.message);

      toast.success("Booking canceled successfully!");
      fetchBookings();
    } catch {
      toast.error("Cancel failed!");
    }
  };

  const statusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-700";
      case "pending":
        return "bg-orange-100 text-orange-700";
      case "cancelled":
        return "bg-red-100 text-red-700";
      case "accepted":
        return "bg-blue-100 text-blue-700";
      case "quoted":
        return "bg-indigo-100 text-indigo-700";
      case "waiting_customer_verification":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };
console.log(bookings)
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef7f3] to-[#f9fbff] p-4 sm:p-10">
      
      {/* HEADER */}
      <div className="relative mb-10 rounded-3xl overflow-hidden max-w-6xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500" />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-xl" />
        <div className="relative z-10 px-6 py-8 text-white text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold">
            📦 My Bookings
          </h1>
          <p className="text-white/80 mt-2">
            Track, manage, and verify your services easily
          </p>
        </div>
      </div>

      {/* LOADING */}
      {loading ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow p-6 animate-pulse"
            >
              <div className="h-5 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="h-3 bg-gray-200 rounded mb-2"></div>
              <div className="h-3 bg-gray-200 rounded mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      ) : bookings.length === 0 ? (
        <div className="bg-white rounded-2xl shadow p-10 text-center">
          <div className="text-6xl mb-4">📭</div>
          <h2 className="text-xl font-semibold text-gray-800">
            No bookings yet
          </h2>
          <p className="text-gray-500 mt-2">
            Book a service and track it here.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition p-6 relative"
            >
              <h2 className="text-lg font-bold text-blue-700 mb-1">
                {booking.service}
              </h2>

              <span
                className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${statusColor(
                  booking.status
                )}`}
              >
                {booking.status.replaceAll("_", " ")}
              </span>

              <p className="text-sm text-gray-600">
                📍 {booking.location?.address}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                📅 {new Date(booking.preferredTime).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-600">
                ⏱{" "}
                {new Date(booking.preferredTime).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>

              {/* OTP */}
              {booking.status === "waiting_customer_verification" &&
                booking.completionOTP && (
                  <div className="mt-4 p-4 border-2 border-dashed border-purple-500 rounded-xl bg-purple-50 text-center">
                    <p className="text-sm text-gray-700">
                      🔐 Share OTP with provider
                    </p>
                    <p className="text-3xl font-bold text-purple-700 tracking-widest mt-1">
                      {booking.completionOTP}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Valid for limited time
                    </p>
                  </div>
                )}

              {/* ACTIONS */}
              <div className="flex gap-2 mt-5">
                {booking.quotes && booking.quotes.length > 0 && booking.status !== "completed" && (
  <button
    className="mt-3 px-3 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
    onClick={() => navigate(`/quotes/${booking._id}`)}
  >
    View Quotes ({booking.quotes.length})
  </button>
)}


                {booking.status === "pending" && (
                  <button
                    onClick={() => handleCancel(booking._id)}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg text-sm"
                  >
                    Cancel
                  </button>
                )}

                <button
                  onClick={() => navigate(`/track/${booking._id}`)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm"
                >
                  Track
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
