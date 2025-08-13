"use client";
import React, { useState, useEffect } from "react";
import Dev from "@/assets/images/dev.svg";
import { Container } from "../container";

const words = [
  "Sviluppatore Fullstack",
  "Sviluppatore Web",
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

  return (
    <div className="h-screen w-full bg-gradient-to-b from-primary-1000 to-primary-800">
      <Container>
        <div className="flex flex-col justify-center h-screen w-full text-white">
          <h1 className="mb-1">Ciao, sono Alex Pezzini</h1>
          <h2 className="mb-0">
            sono uno{" "}
            <span className="border-r-2 border-white animate-blink text-secondary-600">
              {text}
            </span>
          </h2>
        </div>
      </Container>
    </div>
  );
};

export default SectionHome_1;
