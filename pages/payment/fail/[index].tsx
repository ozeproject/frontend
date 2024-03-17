import React, { useEffect, useState } from "react";
import PaymentFail from "../../../components/validation/PaymentFail";
import "../../../app/globals.css";
const FailPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div>
        <PaymentFail />
      </div>
    </div>
  );
};

export default FailPage;
