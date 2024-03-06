import * as React from "react";
import { SVGProps } from "react";
const GridIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <path d="M0 26.016v-20Q0 3.52 1.76 1.76T6.016 0h20q2.464 0 4.224 1.76T32 6.016v20q0 2.496-1.76 4.224T26.016 32h-20Q3.52 32 1.76 30.24T0 26.016zm4 0q0 .832.576 1.408t1.44.576h20q.8 0 1.408-.576T28 26.016v-20q0-.832-.576-1.408T26.016 4h-20q-.832 0-1.44.608T4 6.016v20zM8 24v-4h4v4H8zm0-5.984v-4h4v4H8zM8 12V8h4v4H8zm6.016 12v-4h4v4h-4zm0-5.984v-4h4v4h-4zm0-6.016V8h4v4h-4zM20 24v-4h4v4h-4zm0-5.984v-4h4v4h-4zM20 12V8h4v4h-4z" />
  </svg>
);
export default GridIcon;
