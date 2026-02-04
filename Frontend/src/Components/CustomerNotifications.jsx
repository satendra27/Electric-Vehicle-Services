import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const CustomerNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotifications = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(
        "https://electric-vehicle-services.onrender.com/api/auth/notifications",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const data = await res.json();
      setNotifications(Array.isArray(data) ? data : []);

      // mark read
      await fetch(
        "https://electric-vehicle-services.onrender.com/api/auth/notifications/read",
        {
          method: "PUT",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      window.dispatchEvent(new Event("notifications-updated"));
    } catch {
      toast.error("Failed to load notifications");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">🔔 Notifications</h1>

      {loading ? (
        <p>Loading...</p>
      ) : notifications.length === 0 ? (
        <p className="text-gray-500">No notifications</p>
      ) : (
        <div className="space-y-4">
          {notifications.map((n) => (
            <div
              key={n._id}
              className="bg-white p-4 rounded shadow"
            >
              <p className="text-gray-800">{n.message}</p>
              <p className="text-xs text-gray-500 mt-1">
                {new Date(n.createdAt || n.time).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomerNotifications;
