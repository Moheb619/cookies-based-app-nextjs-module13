"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const AuthorizationHeader = () => {
  const [newAuthorizationHeader, setNewAuthorizationHeader] = useState("");
  const authorizationHeader = "lskfjdlkgnldkfdflgkdfl;gbkfghgodrsfjn";

  useEffect(() => {
    const fetchAuthorizationHeader = async () => {
      const headers = {
        Authorization: authorizationHeader,
      };

      try {
        const res = await axios.get("/api/authorizationheader", { headers });
        setNewAuthorizationHeader(res.data.newAuthorizationHeader);
      } catch (error) {
        console.error("Error fetching authorization header:", error);
      }
    };

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
