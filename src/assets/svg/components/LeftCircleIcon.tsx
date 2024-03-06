import * as React from "react"
import { SVGProps } from "react"
const LeftCircleIcon = (props: SVGProps<SVGSVGElement>) => (

  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 25"
    {...props}
  >
    <g strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.475}>
      {/* <path
        fill="#fff"
        stroke={props.stroke ?? "#eef3f5"}
        d="M12 22.42c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z"
      /> */}
      <path
        stroke="#393939"
        d="m13.41 16.42-3.06-2.87a1.537 1.537 0 0 1 0-2.26l3.06-2.87"
      />
    </g>
  </svg>
)
export default LeftCircleIcon
