import InputBoxField from "components/InputBoxField/InputBoxField";
import React from "react";

const EditEmail = (props) => {
  const { userPrompt } = props;

  return (
    <div>
      <div className="mb-3">
        <label
          className="block text-sm font-OG-Regular text-lightTextColor after:content-['*'] after:ml-0.5 after:text-red-500"
          htmlFor="email"
        >
          Email
        </label>
        <div className="">
          <InputBoxField
            id="email"
            type="email"
            className="rounded-[3px] border-[1px] focus:outline-primaryColor px-3 font-OG-Regular text-sm w-full h-[35px] flex-1"
          />
        </div>
      </div>
      <div className="mb-3">
        <label
          className="block text-sm font-OG-Regular text-lightTextColor after:content-['*'] after:ml-0.5 after:text-red-500"
          htmlFor="password"
        >
          Current Password
        </label>
        <div className="">
          <InputBoxField
            id="password"
            type={userPrompt.showPassword ? "text" : "password"}
            className="rounded-[3px] border-[1px] focus:outline-primaryColor px-3 font-OG-Regular text-sm w-full h-[35px] flex-1"
          />
        </div>
      </div>
    </div>
  );
};

export default EditEmail;
