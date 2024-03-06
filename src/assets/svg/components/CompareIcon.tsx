import * as React from "react";
import { SVGProps } from "react";
const CompareIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      d="m304 160-64-64 64-64M207 352l64 64-64 64"
      style={{
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <circle
      cx={112}
      cy={96}
      r={48}
      style={{
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <circle
      cx={400}
      cy={416}
      r={48}
      style={{
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <path
      d="M256 96h84a60 60 0 0 1 60 60v212M255 416h-84a60 60 0 0 1-60-60V144"
      style={{
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
  </svg>
);
export default CompareIcon;
