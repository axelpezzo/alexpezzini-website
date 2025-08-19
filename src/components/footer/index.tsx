"use client";
import React from "react";
import { Container } from "../container";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full relative bg-gray-900 text-white text-sm p-10">
      <Container>
        <div className="flex justify-between">
          <div>
            &copy; {currentYear} Alex Pezzini - Tutti i diritti riservati.
          </div>
          <div>P.IVA 0000000000</div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
