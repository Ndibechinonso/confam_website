import * as React from "react";
import { SVGProps } from "react";

const HamburgerOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 7.125H19"
      stroke="#00003D"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M5 12.125H19"
      stroke="#00003D"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M5 17.125H19"
      stroke="#00003D"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
export default HamburgerOpen;
