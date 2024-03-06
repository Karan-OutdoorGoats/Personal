import * as React from "react"
import { SVGProps } from "react"
const PencilIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M15.879 3.707a3 3 0 0 1 4.242 0l.172.172a3 3 0 0 1 0 4.242L18.556 9.86l-9.849 9.848a1 1 0 0 1-.464.263l-4 1a1 1 0 0 1-1.213-1.213l1-4a1 1 0 0 1 .263-.464l9.906-9.906 1.68-1.68Zm2.828 1.414a1 1 0 0 0-1.414 0l-.986.986 1.555 1.617 1.017-1.017a1 1 0 0 0 0-1.414l-.172-.172Zm-2.26 4.017-1.555-1.616-8.989 8.99-.529 2.114 2.115-.529 8.959-8.959Z"
      clipRule="evenodd"
    />
  </svg>
)
export default PencilIcon
