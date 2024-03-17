import React, { useEffect, useState } from "react";
import PaymentSuccess from "../../../components/validation/PaymetnSuccess";
import "../../../app/globals.css";
import { useRouter } from "next/router";

const SuccessPage = () => {
  const router = useRouter();

  return (
    <div className="">
      <PaymentSuccess />
    </div>
  );
};

export default SuccessPage;
