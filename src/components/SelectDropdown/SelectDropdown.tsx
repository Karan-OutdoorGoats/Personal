import React, { useState } from "react";
import Select, {
  GroupBase,
  OptionsOrGroups,
  Props,
  StylesConfig,
} from "react-select";
import StateManagedSelect from "react-select/dist/declarations/src/stateManager";
import { colors } from "utils/colors";

function SelectDropdown<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group>) {
  const { ...selectProps } = props;

  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Select
      className="basic-single font-OG-Regular"
      classNamePrefix="select"
      isDisabled={isDisabled}
      isLoading={isLoading}
      isSearchable={false}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: colors.lightPrimaryColor,
          primary: colors.primaryColor,
        },
      })}
      {...selectProps}
    />
  );
}

export default SelectDropdown;
