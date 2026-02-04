import React, { useEffect, useState, useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/AuthContext";

const Profile = () => {
  const { setUser } = useContext(AuthContext);

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    photo: "",
  });

  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [previewImg, setPreviewImg] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  /* ---------------- FETCH PROFILE (CUSTOMER BACKEND) ---------------- */
  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("https://electric-vehicle-services.onrender.com/api/auth/profile", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setProfile({
          name: data.name || "",
          email: data.email || "",
          phone: data.phone || "",
          address: data.address || "",
          photo: data.photo || "",
        });
      })
      .catch(() => toast.error("Failed to fetch profile"))
      .finally(() => setLoading(false));
  }, []);

  /* ---------------- IMAGE SELECT ---------------- */
  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setPreviewImg(URL.createObjectURL(file));
  };

  /* ---------------- UPDATE PROFILE (CUSTOMER BACKEND) ---------------- */
  const handleUpdate = async () => {
    const token = localStorage.getItem("token");
    const formData = new FormData();

    formData.append("name", profile.name);
    formData.append("phone", profile.phone);
    formData.append("address", profile.address);
    if (imageFile) formData.append("photo", imageFile);

    try {
      const res = await fetch(
        "https://electric-vehicle-services.onrender.com/api/auth/update-profile",
        {
          method: "PUT",
          headers: { Authorization: `Bearer ${token}` },
          body: formData,
        }
      );

      const data = await res.json();
      if (!res.ok) return toast.error(data.message);

      toast.success("Profile updated successfully");

      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));

      setIsEditing(false);
      setPreviewImg(null);
      setImageFile(null);
    } catch {
      toast.error("Update failed");
    }
  };

  /* ---------------- LOADING ---------------- */
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500 animate-pulse text-lg">
          Loading profile…
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef7f3] to-[#f9fbff] p-4 sm:p-10 flex justify-center">
      <div className="w-full max-w-4xl">

        {/* HERO (COPIED STYLE) */}
        <div className="relative mb-12 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500" />
          <div className="absolute inset-0 bg-white/10 backdrop-blur-xl" />

          <div className="relative z-10 px-8 py-10 flex flex-col sm:flex-row items-center gap-6 text-white">
            {/* Avatar */}
            <div className="relative">
              {previewImg || profile.photo ? (
                <img
                  src={previewImg || profile.photo}
                  alt="profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
              ) : (
                <div className="w-32 h-32 rounded-full bg-white/30 flex items-center justify-center text-4xl">
                  👤
                </div>
              )}

              {isEditing && (
                <label className="absolute bottom-1 right-1 bg-black/60 text-white px-3 py-1 text-xs rounded-full cursor-pointer hover:bg-black">
                  Change
                  <input type="file" hidden accept="image/*" onChange={handleImageSelect} />
                </label>
              )}
            </div>

            {/* Info */}
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-extrabold tracking-tight">
                {profile.name || "Customer"}
              </h1>
              <p className="opacity-90 mt-1">{profile.email}</p>

              <div className="mt-4 inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-xl text-sm">
                👤 Customer
              </div>
            </div>
          </div>
        </div>

        {/* FORM CARD */}
        {/* FORM CARD */}
<div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10">
  <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
    Profile Details
  </h2>

  {/* ONE FIELD PER ROW */}
  <div className="space-y-6">
    <Input
      label="Name"
      disabled={!isEditing}
      value={profile.name}
      onChange={(v) => setProfile({ ...profile, name: v })}
    />

    <Input
      label="Email"
      disabled
      value={profile.email}
    />

    <Input
      label="Phone"
      disabled={!isEditing}
      value={profile.phone}
      onChange={(v) => setProfile({ ...profile, phone: v })}
    />

    <Textarea
      label="Address"
      disabled={!isEditing}
      value={profile.address}
      onChange={(v) => setProfile({ ...profile, address: v })}
    />
  </div>

  {/* ACTIONS */}
  <div className="flex justify-center gap-4 mt-10">
    {!isEditing ? (
      <button
        onClick={() => setIsEditing(true)}
        className="px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
      >
        Edit Profile
      </button>
    ) : (
      <>
        <button
          onClick={handleUpdate}
          className="px-8 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition"
        >
          Save Changes
        </button>
        <button
          onClick={() => {
            setIsEditing(false);
            setPreviewImg(null);
          }}
          className="px-8 py-3 rounded-xl bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition"
        >
          Cancel
        </button>
      </>
    )}
  </div>
</div>

      </div>
    </div>
  );
};

/* ---------------- INPUTS ---------------- */

const Input = ({ label, value, onChange, disabled }) => (
  <div>
    <label className="text-sm font-semibold text-gray-600 mb-1 block">
      {label}
    </label>
    <input
      value={value}
      disabled={disabled}
      onChange={(e) => onChange?.(e.target.value)}
      className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none disabled:bg-gray-100"
    />
  </div>
);

const Textarea = ({ label, value, onChange, disabled }) => (
  <div>
    <label className="text-sm font-semibold text-gray-600 mb-1 block">
      {label}
    </label>
    <textarea
      rows={3}
      value={value}
      disabled={disabled}
      onChange={(e) => onChange?.(e.target.value)}
      className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none disabled:bg-gray-100"
    />
  </div>
);

export default Profile;
