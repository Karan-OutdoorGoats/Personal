import * as React from "react"
import { SVGProps } from "react"
const BoxLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1}
      d="m13.41 16.42-3.06-2.87a1.539 1.539 0 0 1 0-2.26l3.06-2.87"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M7 21.42h10a4 4 0 0 0 4-4v-10a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4Z"
    />
  </svg>
)
export default BoxLeftIcon
