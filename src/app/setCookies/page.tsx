"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SetCookies = () => {
  const router = useRouter();
  const [cookiesValue, setCookiesValue] = useState<any>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const setCookies = async () => {
    try {
      const req = await axios.post(
        "api/setcookies",
        {
          theme: "Dark",
        },
        { withCredentials: true }
      );
      // Handle success if needed
    } catch (error) {
      // Handle error if needed
    } finally {
      window.location.reload();
    }
  };

  useEffect(() => {
    const fetchCookieValue = async () => {
      try {
        const res = await axios.get("api/getcookies", { withCredentials: true });
        setCookiesValue({ name: res.data.name, value: res.data.value });
      } catch (error) {
        // Handle error if needed
      } finally {
        setIsLoading(false);
      }
    };

    fetchCookieValue();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="my-5">Set Cookies According to User Preference</div>
        <button className="bg-neutral-600 my-5 p-2 text-white hover:bg-neutral-700" onClick={setCookies}>
          Theme Dark
        </button>
        <br />
        <br />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="my-5">Read Cookie values</div>
        {isLoading ? (
          <p>Loading...</p>
        ) : cookiesValue === undefined ? (
          <p className="text-red-400 my-10">Cookies Have Not Been Set Yet. Go To setCookies from the Navmenu to set the cookies</p>
        ) : (
          <p className="text-green-500 my-10">
            Cookies value is: {cookiesValue.name} = {cookiesValue.value}
          </p>
        )}
      </div>
    </>
  );
};

export default SetCookies;
