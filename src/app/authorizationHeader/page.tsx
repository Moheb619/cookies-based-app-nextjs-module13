"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const AuthorizationHeader = () => {
  const [header, setHeader] = useState<any>("");
  const [newAuthorizationHeader, setNewAuthorizationHeader] = useState<any>("");
  const authorizationHeader = "lskfjdlkgnldkfdflgkdfl;gbkfghgodrsfjn";

  const headers = {
    Authorization: authorizationHeader,
  };
  const fetchAuthorizationHeader = async () => {
    try {
      const res = await axios.get("api/authorizationheader", { headers, withCredentials: true });
      setNewAuthorizationHeader(res.headers["authorization"]);
    } catch (error) {
      console.error("Error fetching authorization header:", error);
    }
  };
  useEffect(() => {
    fetchAuthorizationHeader();
  }, []);

  return (
    <div className="flex flex-col items-center mt-20 text-center">
      <p>
        <span className="font-bold my-5">Original Authorization Header: </span>
        <br />
        <br />
        {authorizationHeader}
      </p>
      <br />
      <br />
      <br />
      <p>
        <span className="font-bold">New Authorization Header: </span>
        <br />
        <br />
        {newAuthorizationHeader}
      </p>
    </div>
  );
};

export default AuthorizationHeader;
