"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const GetCookies = () => {
  const [cookiesValue, setCookiesValue] = useState<any>(undefined);
  const [isLoading, setIsLoading] = useState(true);
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
  useEffect(() => {
    fetchCookieValue();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="my-5">Read Cookie values</div>
      {isLoading ? (
        <p>Loading...</p>
      ) : cookiesValue === undefined ? (
        <p className="text-red-400 my-10">Cookies Has Not Been Set Yet. Go To setCookies from the Navmenu to set the cookies</p>
      ) : (
        <p className="text-green-500 my-10">
          Cookies value is: {cookiesValue.name} = {cookiesValue.value}
        </p>
      )}
    </div>
  );
};

export default GetCookies;
