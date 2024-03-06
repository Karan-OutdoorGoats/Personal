import React from "react";

interface InputBoxFieldProps {
  className?: HTMLInputElement["className"];
}

type InputBoxFieldAndInputProps = InputBoxFieldProps &
  React.InputHTMLAttributes<HTMLInputElement>;

const InputBoxField = React.forwardRef<HTMLInputElement,InputBoxFieldAndInputProps>((props: InputBoxFieldAndInputProps,ref) => {
  const { className, ...inputProps } = props;

  return <input ref={ref} className={className} {...inputProps}  />;
});

export default InputBoxField;
