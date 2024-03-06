import * as React from "react"
import { SVGProps } from "react"
const DiscountIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <defs>
      <style>
        {
          ".cls-1{fill:none;stroke:#393939;stroke-miterlimit:10;stroke-width:1.89px}"
        }
      </style>
    </defs>
    <g id="discount">
      <path
        d="M19.55 22.38H4.45V7.27l5.66-5.66h3.78l5.66 5.66v15.11zM11.06 5.38h1.88M14.83 10.1l-5.66 8.5"
        className="cls-1"
      />
      <circle cx={8.7} cy={11.52} r={0.47} className="cls-1" />
      <circle cx={15.3} cy={17.19} r={0.47} className="cls-1" />
    </g>
  </svg>
)
export default DiscountIcon
