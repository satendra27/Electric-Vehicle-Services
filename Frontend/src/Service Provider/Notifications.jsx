import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ---------------- FETCH ---------------- */
  const fetchNotifications = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      setLoading(true);

      const res = await fetch(
        "https://electric-vehicle-services.onrender.com/api/auth/notifications",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = await res.json();
      setNotifications(Array.isArray(data) ? data : []);
    } catch {
      toast.error("Failed to load notifications");
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- MARK ALL AS READ ---------------- */
  const markAllAsRead = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      await fetch(
        "https://electric-vehicle-services.onrender.com/api/auth/notifications/read",
        {
          method: "PUT",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // 🔔 update navbar count
      window.dispatchEvent(new Event("notifications-updated"));
    } catch {
      console.error("Failed to mark notifications as read");
    }
  };

  /* ---------------- CLEAR ALL ---------------- */
  const clearNotifications = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(
        "https://electric-vehicle-services.onrender.com/api/auth/notifications/clear",
        {
          method: "PUT",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = await res.json();
      if (!res.ok) return toast.error(data.message);

      toast.success("All notifications cleared");
      setNotifications([]);

      window.dispatchEvent(new Event("notifications-updated"));
    } catch {
      toast.error("Failed to clear notifications");
    }
  };

  /* ---------------- REMOVE SINGLE ---------------- */
  const removeSingleNotification = async (notificationId) => {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(
        `https://electric-vehicle-services.onrender.com/api/auth/notifications/${notificationId}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = await res.json();
      if (!res.ok) return toast.error(data.message);

      setNotifications((prev) =>
        prev.filter((n) => n._id !== notificationId)
      );

      window.dispatchEvent(new Event("notifications-updated"));
      toast.success("Notification removed");
    } catch {
      toast.error("Failed to remove notification");
    }
  };

  /* ---------------- EFFECTS ---------------- */
  useEffect(() => {
    fetchNotifications();
    markAllAsRead();

    const handleUpdate = () => fetchNotifications();
    window.addEventListener("notifications-updated", handleUpdate);

    return () => {
      window.removeEventListener("notifications-updated", handleUpdate);
    };
  }, []);

  /* ---------------- UI ---------------- */
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef7f3] to-[#f9fbff] p-4 sm:p-8">
      {/* HEADER */}
      <div className="relative mb-8 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500" />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-xl" />

        <div className="relative z-10 px-6 py-8 flex items-center justify-between text-white">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">
              🔔 Notifications
            </h1>
            <p className="text-white/80 text-sm mt-1">
              Stay updated with your latest activity
            </p>
          </div>

          {notifications.length > 0 && (
            <button
              onClick={clearNotifications}
              className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl text-sm font-semibold transition"
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      {/* CONTENT */}
      {loading ? (
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <p className="text-gray-500">Loading notifications...</p>
        </div>
      ) : notifications.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
          <div className="text-6xl mb-4">📭</div>
          <h2 className="text-xl font-semibold text-gray-800">
            You're all caught up!
          </h2>
          <p className="text-gray-500 mt-2">
            No new notifications at the moment.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {notifications.map((note) => (
            <div
              key={note._id}
              className="relative bg-white rounded-2xl shadow p-5 pl-6 pr-12 border-l-4 border-blue-500 hover:shadow-lg transition"
            >
              <button
                onClick={() => removeSingleNotification(note._id)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-red-600 hover:bg-red-50 transition"
                title="Dismiss notification"
              >
                ✕
              </button>

              <p className="text-gray-800 font-medium">
                {note.message}
              </p>
              <p className="text-xs text-gray-500 mt-2">
                {new Date(
                  note.createdAt || note.time || note.date
                ).toLocaleString()}
              </p>

              {!note.read && (
                <span className="absolute top-5 left-2 w-2 h-2 bg-blue-500 rounded-full" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notifications;
