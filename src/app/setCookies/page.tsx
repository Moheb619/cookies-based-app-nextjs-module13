"use client";
import axios from "axios";
const SetCookies = () => {
  const setCookies = () => {
    const req = axios.post(
      "api/setcookies",
      {
        theme: "Dark",
      },
      { withCredentials: true }
    );
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="my-5">Set Cookies According to User Preference</div>
      <button className="bg-neutral-600 my-5 p-2 text-white hover:bg-neutral-700" onClick={() => setCookies()}>
        Theme Dark
      </button>
      <br />
      <br />
    </div>
  );
};

export default SetCookies;
