import React, { useState } from "react";
import Select, { GroupBase, OptionsOrGroups, StylesConfig } from "react-select";
import { colors } from "utils/colors";

const data = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 5,
    label: "5",
  },
  {
    value: 6,
    label: "6",
  },
  {
    value: 7,
    label: "7",
  },
  {
    value: 8,
    label: "8",
  },
  {
    value: 9,
    label: "9",
  },
];

const selectStyles: StylesConfig = {
  control(base, props) {
    return {
      ...base,
      border: `1px solid ${colors.lightTextColor}`,
      borderRadius: "4px",
    };
  },
  indicatorsContainer(base, props) {
    return {
      ...base,
    };
  },
  valueContainer(base, props) {
    return {
      ...base,
      fontSize: "0.813rem",
    };
  },
  container(base, props) {
    return {
      ...base,
      // border: "2px solid green",
      width: "80px",
      // display: "flex",
      // flexDirection: "row",
    };
  },
  menu(base, props) {
    return {
      ...base,
      margin: "2px 0",
      outlineStyle: "none",
      backgroundColor: "white",
      borderRadius: "8px",
      width: "100%",
    };
  },
  menuList(base, props) {
    return {
      height: "120px",
      overflowY: "scroll",
      border: `1px solid ${colors.primaryColor}`,
      borderRadius: "6px",
      outline: "none",
      outlineStyle: "none",
      textAlign: "center",
      "::-webkit-scrollbar": {
        display: "none",
      },
      fontSize: "0.813rem",
    };
  },
};

const QtyDropdown = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Select
      className="basic-single font-OG-Regular"
      classNamePrefix="select"
      defaultValue={data[0]}
      isDisabled={isDisabled}
      isLoading={isLoading}
      styles={selectStyles}
      name="qty"
      isSearchable={false}
      options={data}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: colors.lightPrimaryColor,
          primary: colors.primaryColor,
        },
      })}
    />
  );
};

export default QtyDropdown;
