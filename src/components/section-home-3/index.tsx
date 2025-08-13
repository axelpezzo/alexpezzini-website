import React from "react";
import { Container } from "../container";
import Dev from "@/assets/images/dev.svg";

const SectionHome_3 = () => {
  return (
    <div className="h-full w-full relative bg-primary-800 overflow-hidden">
      <Container>
        <div className="py-32">
          <h2>Sviluppo</h2>
          <div>
            <Dev />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SectionHome_3;
