import * as React from "react"
import { SVGProps } from "react"
const HelpCircleOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 17h.01M12 14c.89-1.906 3-1.766 3-4 0-1.5-1-3-3-3-1.548 0-2.497.898-2.847 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
    />
  </svg>
)
export default HelpCircleOutline
