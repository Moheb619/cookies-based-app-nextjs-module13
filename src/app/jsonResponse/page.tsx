"use client";
import axios from "axios";
import { useEffect, useState } from "react";
const JsonResponse = () => {
  const [jsonResponse, setJsonResopnse] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const getJsonResponse = async () => {
    try {
      const res = await axios.get("api/getjsonresponse");
      setJsonResopnse({ message: res.data.message, version: res.data.version });
    } catch (error) {
      // Handle error if needed
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getJsonResponse();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="my-5">Read JSON Response</div>
      {isLoading ? (
        <p>Loading...</p>
      ) : jsonResponse === undefined ? (
        <p className="text-red-400 my-10">JSON Has Not Been Set Yet.</p>
      ) : (
        <p className="text-gray-800 my-10 text-center">
          <span className="font-extrabold">JSON Response is</span> <br />
          <br />
          <br />
          Message: {jsonResponse.message} <br /> Version: {jsonResponse.version}
        </p>
      )}
    </div>
  );
};

export default JsonResponse;
