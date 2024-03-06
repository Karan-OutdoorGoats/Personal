import * as React from "react"
import { SVGProps } from "react"
const SortIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M4 16h9M6 11h7M8 6h5"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 4v16l3-4"
    />
  </svg>
)
export default SortIcon
