import FilterIcon from "assets/svg/components/FilterIcon";
import SortIcon from "assets/svg/components/SortIcon";
import React from "react";

interface FilterSortProps {
  setShowOption: (vlaue: "filter" | "sort" | false) => void;
}

const FilterSort = (props: FilterSortProps) => {
  const { setShowOption } = props;

  return (
    <div className="sticky border-t-[1.5px] border-primaryColor bottom-0 z-[100] bg-white w-full py-3  stick_filter_sort_container md:hidden">
      <div className="flex flex-row items-center justify-between">
        <div
          onClick={() => setShowOption("filter")}
          className="flex flex-row items-center justify-center gap-3 basis-[50%]"
        >
          <FilterIcon className="text-xl stroke-primaryColor" />
          <p className="text-sm font-OG-Regular text-primaryColor">Filter</p>
        </div>
        <div className="text-base font-OG-Regular text-lightTextColor">|</div>
        <div
          onClick={() => setShowOption("sort")}
          className="flex flex-row items-center justify-center gap-3 basis-[50%]"
        >
          <SortIcon className="text-xl stroke-primaryColor" />
          <p className="text-sm font-OG-Regular text-primaryColor">Sort</p>
        </div>
      </div>
    </div>
  );
};

export default FilterSort;
