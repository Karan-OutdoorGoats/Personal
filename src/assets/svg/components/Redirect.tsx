import * as React from "react"
import { SVGProps } from "react"
const Redirect = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="m20 4-8 8m8-8v4.5M20 4h-4.5m3.5 8.5v4.3c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C17.48 20 16.92 20 15.8 20H7.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C4 18.48 4 17.92 4 16.8V8.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C5.52 5 6.08 5 7.2 5h4.3"
    />
  </svg>
)
export default Redirect
