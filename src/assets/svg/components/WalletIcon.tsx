import * as React from "react"
import { SVGProps } from "react"
const WalletIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.5 14.15h.01M19 4.001H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 5.521 3 6.081 3 7.201v9.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.428.218.988.218 2.108.218h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874c.218-.428.218-.988.218-2.108v-5.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874c-.428-.218-.988-.218-2.108-.218H7m9.95 6.15a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0Z"
    />
  </svg>
)
export default WalletIcon
