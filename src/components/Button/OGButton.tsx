import React, { HTMLProps } from "react";

interface OGButtonProps {
  title: string;
  className: HTMLProps<HTMLElement>["className"];
  icon?: React.ReactElement;
}

type OGButtonType = OGButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const OGButton = (props: OGButtonType) => {
  const { className, title, icon = null, ...ogButtonProps } = props;

  if (icon) {
    return (
      <button className={` ${className}`} {...ogButtonProps}>
        {icon}
        {title}
      </button>
    );
  }

  return (
    <button className={` ${className}`} {...ogButtonProps}>
      {title}
    </button>
  );
};

export default OGButton;
