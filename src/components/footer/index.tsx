import React from "react";
import { Container } from "../container";

const Footer = () => {
  return (
    <div className="w-full relative bg-gray-900 text-white text-sm p-10">
      <Container>
        <div className="flex justify-between">
          <div>Alex Pezzini - Copyright @ 2025</div>
          <div>P.IVA 0000000000</div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
