import * as React from "react"
import { SVGProps } from "react"
const HamburgerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="-0.5 0 25 25"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2 12.32h20M2 18.32h20M2 6.32h20"
    />
  </svg>
)
export default HamburgerIcon
