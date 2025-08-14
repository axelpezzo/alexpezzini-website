import * as React from "react";

const MouseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="40px"
    height="40px"
    viewBox="0 0 247 390"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 1.5,
    }}
    {...props}
  >
    <path
      id="wheel"
      d="M123.359 79.775v72.843"
      style={{
        fill: "none",
        stroke: "#fff",
        strokeWidth: "20px",
      }}
    />
    <path
      d="M236.717 123.359c0-62.565-50.794-113.359-113.358-113.359-62.565 0-113.359 50.794-113.359 113.359v143.237c0 62.565 50.794 113.359 113.359 113.359 62.564 0 113.358-50.794 113.358-113.359V123.359Z"
      style={{
        fill: "none",
        stroke: "#fff",
        strokeWidth: "20px",
      }}
    />
  </svg>
);

export default MouseIcon;
