import * as React from "react"
import { SVGProps } from "react"
import { colors } from "utils/colors"
const EquipmentIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      d="M463.534 418.371 271.805 117.509l23.66-37.108-22.497-14.328L256 92.703l-16.966-26.629-22.498 14.328 23.644 37.108L48.466 418.371H0v27.556h512v-27.556h-48.466zm-175.594 0-19.199-95.998 66.769 95.998h-47.57zm66.91 0-99.635-138.542-1.21-5.452-65.795 143.994H80.091L256 142.323 431.909 418.37H354.85z"
      style={{
        fill: colors.lightTextColor,
      }}
    />
  </svg>
)
export default EquipmentIcon
