import CircleCloseOutlineIcon from "assets/svg/components/CircleCloseOutlineIcon";
import OGButton from "components/Button/OGButton";
import { useScreenSize } from "hooks/useScreenSize";
import ReactModal from "react-modal";
import { colors } from "utils/colors";
import CheckboxOption from "./checkbox-option";
import { useState } from "react";
import FilterOption from "./filter-option";

const filterData = [
  "Gender",
  "Sleeve Length",
  "Lining",
  "Size",
  "Color Options",
  "Price",
  "Brands",
  "Closure",
  "Feature",
  "Material",
  "Rating",
];

const genderValues = ["Mens", "Unisex"];
const sleeveValues = ["Half Sleeve", "Full Sleeve", "Sleeveless"];
const liningValues = ["Polar Fleece", "Polyster", "Fleece"];
const sizeValues = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"];
const colorValues = [
  "Brown",
  "Blue",
  "Black",
  "Red",
  "Green",
  "Grey",
  "Purple",
  "White",
];

const brandValues = [
  "Athlos",
  "Trekmonk",
  "Gokyo",
  "Baller Athletik",
  "Cocopalm",
  "Tripole",
  "Apace",
];

const closureValues = [
  "Button",
  "Zipper",
  "Pull On",
  "Waist Band",
  "Half Zip",
  "Hook",
];

const featureValues = [
  "Water Resistant",
  "Wind Protection",
  "Down",
  "Insulation",
  "Convertible",
  "Others",
];

const materialValues = [
  "Cotton",
  "Nylon",
  "Wool",
  "Spandex",
  "Fleece",
  "Others",
];

const ratingValues = [4, 3, 2, 1];

interface AddToCartProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterModal = (props: AddToCartProps) => {
  const screenSize = useScreenSize();
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedValues, setSelectedValues] = useState(new Set());

  // console.log(selectedValues);

  // alert(screenSize.width);

  const { isOpen, onClose } = props;

  const renderFilterValue = (value: string) => {
    switch (value) {
      case "Gender":
        return (
          <FilterOption
            setSelectedValues={setSelectedValues}
            selectedValues={selectedValues}
            values={genderValues}
          />
        );

      case "Sleeve Length":
        return (
          <FilterOption
            setSelectedValues={setSelectedValues}
            selectedValues={selectedValues}
            values={sleeveValues}
          />
        );

      case "Lining":
        return (
          <FilterOption
            setSelectedValues={setSelectedValues}
            selectedValues={selectedValues}
            values={liningValues}
          />
        );

      case "Size":
        return (
          <FilterOption
            setSelectedValues={setSelectedValues}
            selectedValues={selectedValues}
            values={sizeValues}
          />
        );

      case "Color Options":
        return (
          <FilterOption
            setSelectedValues={setSelectedValues}
            selectedValues={selectedValues}
            values={colorValues}
          />
        );

      case "Brands":
        return (
          <FilterOption
            setSelectedValues={setSelectedValues}
            selectedValues={selectedValues}
            values={brandValues}
          />
        );

      case "Closure":
        return (
          <FilterOption
            setSelectedValues={setSelectedValues}
            selectedValues={selectedValues}
            values={closureValues}
          />
        );

      case "Feature":
        return (
          <FilterOption
            setSelectedValues={setSelectedValues}
            selectedValues={selectedValues}
            values={featureValues}
          />
        );

      case "Material":
        return (
          <FilterOption
            setSelectedValues={setSelectedValues}
            selectedValues={selectedValues}
            values={materialValues}
          />
        );

      case "Rating":
        return (
          <FilterOption
            setSelectedValues={setSelectedValues}
            selectedValues={selectedValues}
            values={ratingValues}
            type={"rating"}
          />
        );

      case "Price":
        return (
          <FilterOption
            setSelectedValues={() => {}}
            selectedValues={[]}
            values={[]}
            type={"price"}
          />
        );

      default:
        return null;
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      closeTimeoutMS={500}
      contentLabel="Edit Address"
      style={{
        content: {
          backgroundColor: colors.white,
          height: "100%",
          // overflowY: "scroll",
          width: "100%",
        },
        overlay: {
          zIndex: 9999,
          // backgroundColor: "rgba(205,205,205,0.8)",
          backgroundColor: "rgba(0,0,0,0.7)",
          padding: screenSize.width > 600 ? "2rem" : "unset",
          // display: "flex",
          // flexDirection: screenSize.width > 600 ? "row" : "column",
          // justifyContent: screenSize.width > 600 ? "center" : "end",

          // backdropFilter: "blur(8px)",
          // WebkitBackdropFilter: "blur(8px)",
        },
      }}
      className=" focus:outline-primaryColor border-primaryColor"
    >
      <div className="h-full">
        <div className="flex items-center justify-between px-3 py-2 bg-white ">
          <p className="text-base leading-8 uppercase text-lightTextColor font-OG-Bold">
            Filter
          </p>
        </div>

        <div className=" h-[100%]">
          <div className="flex flex-row h-full filter_modal_container ">
            <div className="basis-[35%]  overflow-y-auto mb-[60px]  bg-lightPrimaryColor">
              {filterData.map((item) => {
                return (
                  <div
                    onClick={() => setSelectedFilter(item)}
                    className={`flex flex-col items-center justify-center h-[50px] hover:cursor-pointer ${
                      item === selectedFilter
                        ? "bg-white border-l-[5px] *:text-primaryColor *:font-OG-Bold border-primaryColor"
                        : ""
                    } `}
                  >
                    <p
                      className={`text-sm font-OG-Regular text-lightTextColor`}
                    >
                      {item}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="basis-[65%] overflow-y-auto mb-[60px]  bg-white">
              {renderFilterValue(selectedFilter)}
            </div>
          </div>
          <div className="absolute w-full bottom-0 border-[1px] py-3 px-4 bg-white">
            <div className="flex flex-row items-center justify-between">
              <div
                onClick={onClose}
                className="flex flex-row basis-[50%] justify-center "
              >
                <p className={`text-sm font-OG-Regular text-lightTextColor`}>
                  Cancel
                </p>
              </div>
              <div>|</div>
              <div
                onClick={onClose}
                className="flex flex-row basis-[50%] justify-center"
              >
                <p className={`text-sm font-OG-Regular text-lightTextColor`}>
                  Apply
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default FilterModal;
