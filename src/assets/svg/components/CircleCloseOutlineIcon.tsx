import * as React from "react"
import { SVGProps } from "react"
const CircleCloseOutlineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={10}  strokeWidth={1.5} />
    <path
   
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m14.5 9.5-5 5m0-5 5 5"
    />
  </svg>
)
export default CircleCloseOutlineIcon
