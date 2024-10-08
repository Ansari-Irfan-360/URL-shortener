import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { clientCheck } from 'poll-server-check';

const BackendUrl = "https://url-360.onrender.com";

const Redirect = () => {
  const { redirectFrom } = useParams();

  useEffect(()=>{
    clientCheck(BackendUrl);
  },[]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BackendUrl}/get/${redirectFrom}`);
      window.location.href = response.data.redirectTo;
    } catch (error) {
      console.error("Failed to fetch redirect URL", error);
    }
  };

  fetchData();

  return <div></div>;
};

export default Redirect;
