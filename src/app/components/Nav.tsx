import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="flex flex-row space-x-10 items-center justify-center">
      <div className="hover:bg-black hover:text-white">
        {" "}
        <Link href={"/"}>Home</Link>
      </div>
      <div className="hover:bg-black hover:text-white">
        {" "}
        <Link href={"/setCookies"}>Set Cookies</Link>
      </div>
      <div className="hover:bg-black hover:text-white">
        <Link href={"/jsonResponse"}>Get JSON Response</Link>
      </div>
      <div className="hover:bg-black hover:text-white">
        <Link href={"/redirecthomepage"}>Redirect to homepage</Link>
      </div>
      <div className="hover:bg-black hover:text-white">
        <Link href={"/authorizationHeader"}>Get authorization header with prefix</Link>
      </div>
    </div>
  );
};

export default Nav;
