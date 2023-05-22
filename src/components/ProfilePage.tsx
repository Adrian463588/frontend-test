import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";

interface User {
  name: string;
  email: string;
  profilePhoto: string;
}

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("/api/user");
      const data = await response.json();
      setUser(data);
    };
    fetchUser();
  }, []);

  const handleChangeProfilePhoto = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setProfilePhoto(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (profilePhoto) {
      const formData = new FormData();
      formData.append("profilePhoto", profilePhoto);
      await fetch("/api/user/profile-photo", {
        method: "POST",
        body: formData,
      });
    }
  };

  return (
    <div className="container mx-auto py-4">
      <header className="flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">My Profile</h1>
        <button className="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Logout
        </button>
      </header>
      <div className="flex flex-col items-center py-4 px-4">
        <img className="w-full rounded-full" src={user?.profilePhoto} alt={user?.name} />
        <form className="flex flex-col justify-between mt-4" onSubmit={handleSubmit}>
          <div className="flex flex-row mb-4">
            <label className="font-bold mr-4">Name</label>
            <input value={user?.name} disabled className="bg-gray-200 py-2 px-4 rounded" />
          </div>
          <div className="flex flex-row mb-4">
            <label className="font-bold mr-4">Email</label>
            <input value={user?.email} disabled className="bg-gray-200 py-2 px-4 rounded" />
          </div>
          <div className="flex flex-col items-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2" type="submit">
              My Book
            </button>
            <input type="file" onChange={handleChangeProfilePhoto} className="py-2 px-4" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
