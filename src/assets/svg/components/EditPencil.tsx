import * as React from "react"
import { SVGProps } from "react"
const EditPencil = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 5H9c-1.886 0-2.828 0-3.414.586C5 6.172 5 7.114 5 9v6c0 1.886 0 2.828.586 3.414C6.172 19 7.114 19 9 19h6c1.886 0 2.828 0 3.414-.586C19 17.828 19 16.886 19 15v-3m-9.681.691 5.93-5.863a1.276 1.276 0 0 1 1.815 1.792l-5.831 6.05L9 15l.319-2.309Z"
    />
  </svg>
)
export default EditPencil
