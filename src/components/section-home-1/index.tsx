"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Bg1 from "@/assets/images/bg-1.jpg";
import { Container } from "../container";
import MouseIcon from "../mouse-icon";

const words = [
  "Sviluppatore Fullstack",
  "Sviluppatore Web & Ecommerce",
  "Sviluppatore Mobile",
];

const SectionHome_1 = () => {
  const [text, setText] = useState(words[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = 100;
    let deletingSpeed = 40;
    let pause = 1000;

    const currentWord = words[wordIndex % words.length];

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          setText(currentWord.substring(0, text.length - 1));
        } else {
          setText(currentWord.substring(0, text.length + 1));
        }

        if (!isDeleting && text === currentWord) {
          setTimeout(() => setIsDeleting(true), pause);
        } else if (isDeleting && text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => prev + 1);
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  const handleScroll = () => {
    const target = document.getElementById("section-home-2");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-screen w-full" id="section-home-1">
      {/* Immagine di sfondo */}
      <Image src={Bg1} alt="Sfondo" fill priority className="object-cover" />

      {/* Overlay con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-1000 to-primary-800 opacity-50"></div>

      {/* Contenuto */}
      <Container>
        <div className="relative flex flex-col justify-center h-screen w-full text-white">
          <h1 className="mb-1">Ciao, sono Alex Pezzini</h1>
          <h2 className="mb-0">
            sono uno{" "}
            <span className="border-r-2 border-white animate-blink text-primary-500">
              {text}
            </span>
          </h2>
        </div>
      </Container>
      <div
        className="absolute bottom-0 left-0 right-0 m-auto w-8 pb-8 cursor-pointer"
        onClick={handleScroll}
      >
        <MouseIcon />
      </div>
    </div>
  );
};

export default SectionHome_1;
