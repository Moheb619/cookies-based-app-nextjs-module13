"use client";
import axios from "axios";
import { useEffect } from "react";

const RedirectHomePage = () => {
  const homepageRedirection = async () => {
    const res = await axios.get("api/homepageredirection", { withCredentials: true });
    console.log(res);
  };
  useEffect(() => {
    homepageRedirection();
  }, []);

  return <div>Redirecting to Homepage</div>;
};

export default RedirectHomePage;
