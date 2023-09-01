"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const AuthorizationHeader = () => {
  const [newAuthorizationHeader, setNewAuthorizationHeader] = useState<any>("");
  const authorizationHeader = "lskfjdlkgnldkfdflgkdfl;gbkfghgodrsfjn";

  const headers = {
    Authorization: authorizationHeader,
  };
  const fetchAuthorizationHeader = async () => {
    try {
      const res = await axios.get("api/authorizationheader", { headers, withCredentials: true });
      setNewAuthorizationHeader(res.headers.get("authorization"));
    } catch (error) {
      console.error("Error fetching authorization header:", error);
    }
  };
  useEffect(() => {
    fetchAuthorizationHeader();
  }, []);

  return (
    <div>
      <p>Original Authorization Header: {authorizationHeader}</p>
      <p>New Authorization Header: {newAuthorizationHeader}</p>
    </div>
  );
};

export default AuthorizationHeader;
