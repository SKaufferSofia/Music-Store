import Login from "@/components/forms/login/Login";
import Register from "@/components/forms/register/Register";
import React from "react";

const Profile: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Login />
    </div>
  );
};

export default Profile;
