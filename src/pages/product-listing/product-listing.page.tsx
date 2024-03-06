import React, { useEffect, useMemo, useRef } from "react";
import {
	Link,
	Outlet,
	useLocation,
	useMatch,
	useMatches,
} from "react-router-dom";
import AccordianOption from "./components/accordian-option";
import CheckboxOption from "./components/checkbox-option";
import { useProductListing } from "./product-listing.hooks";
import AddToCart from "components/Modal/AddToCart/AddToCart";
import RangeSlider from "components/RangeSlider/RangeSlider";
import { ItemStyles, Rating, ThinRoundedStar } from "@smastrom/react-rating";
import { colors } from "utils/colors";
import "../../utils/styles.css";
import InputBoxField from "components/InputBoxField/InputBoxField";
import SelectDropdown from "components/SelectDropdown/SelectDropdown";
import DownArrowIcon from "assets/svg/components/DownArrowIcon";
import GridIcon from "assets/svg/components/GridIcon";
import FlexIcon from "assets/svg/components/FlexIcon";
import OutlineArrowUpIcon from "assets/svg/components/OutlineArrowUpIcon";
import FilterIcon from "assets/svg/components/FilterIcon";
import SortIcon from "assets/svg/components/SortIcon";
import FilterSort from "./components/filter-sort";
import FilterModal from "./components/filter-modal";
import SortModal from "./components/sort-modal";
import Loader from "components/Loader/Loader";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useGQLQuery } from "graphql/operations/useGQLQuery";
import { productQuery } from "graphql/queries/productQuery";

const myStyles: ItemStyles = {
	itemShapes: ThinRoundedStar,
	activeFillColor: "#ffb700",
	inactiveFillColor: "white",
	inactiveStrokeColor: colors.grey,
	itemStrokeWidth: 1,
	activeStrokeColor: "#ffb700",
};

const ratingData = [
	{
		element: (
			<label htmlFor="4">
				<div className="flex flex-row items-center gap-1 my-1 w-max decoration-primaryColor hover:cursor-pointer group hover:underline">
					<Rating
						readOnly
						style={{ width: "80px" }}
						value={4}
						itemStyles={myStyles}
						onChange={() => {}}
					/>

					<p className="px-1 rounded-sm text-s group-hover:text-primaryColor font-OG-Regular text-lightTextColor">
						and above
					</p>
					<p className="text-s rounded-sm border-[1px] px-1 group-hover:text-primaryColor font-OG-Regular text-lightTextColor">
						20
					</p>
				</div>
			</label>
		),
		type: "4",
	},
	{
		element: (
			<label htmlFor="3">
				<div className="flex flex-row items-center gap-1 my-1 w-max decoration-primaryColor hover:cursor-pointer group hover:underline">
					<Rating
						readOnly
						style={{ width: "80px" }}
						value={3}
						itemStyles={myStyles}
						onChange={() => {}}
					/>
					<p className="px-1 rounded-sm text-s group-hover:text-primaryColor font-OG-Regular text-lightTextColor">
						and above
					</p>
					<p className="text-s rounded-sm border-[1px] px-1 group-hover:text-primaryColor font-OG-Regular text-lightTextColor">
						32
					</p>
				</div>
			</label>
		),
		type: "3",
	},
	{
		element: (
			<label htmlFor="2">
				<div className="flex flex-row items-center gap-1 my-1 w-max decoration-primaryColor hover:cursor-pointer group hover:underline">
					<Rating
						readOnly
						style={{ width: "80px" }}
						value={2}
						itemStyles={myStyles}
						onChange={() => {}}
					/>
					<p className="px-1 rounded-sm text-s group-hover:text-primaryColor font-OG-Regular text-lightTextColor">
						and above
					</p>
					<p className="text-s rounded-sm border-[1px] px-1 group-hover:text-primaryColor font-OG-Regular text-lightTextColor">
						0
					</p>
				</div>
			</label>
		),
		type: "2",
	},
	{
		element: (
			<label htmlFor="1">
				<div className="flex flex-row items-center gap-1 my-1 w-max decoration-primaryColor hover:cursor-pointer group hover:underline">
					<Rating
						readOnly
						style={{ width: "80px" }}
						value={1}
						itemStyles={myStyles}
						onChange={() => {}}
					/>
					<p className="px-1 rounded-sm text-s group-hover:text-primaryColor font-OG-Regular text-lightTextColor">
						and above
					</p>
					<p className="text-s rounded-sm border-[1px] px-1 group-hover:text-primaryColor font-OG-Regular text-lightTextColor">
						45
					</p>
				</div>
			</label>
		),
		type: "1",
	},
];

const filter = {
	category_id: { eq: "11" },
};

const ProductListingPage = () => {
	const { supercategory } = useParams();

	const { isLoading, data, error } = useGQLQuery(
		["product-list", filter],
		productQuery,
		{
			filter,
		}
	);

	const {
		setViewProduct,
		viewProduct,
		isGrid,
		setIsGrid,
		isAsc,
		setIsAsc,
		setShowOption,
		showOption,
	} = useProductListing();

	const location = useLocation();

	const pathList = useMemo(() => {
		return location.pathname.split("/").slice(2);
	}, [location.pathname]);

	let liningData = [];
	let sleeveData = [];
	let genderData = [];
	let sizeData = [];
	let colorData = [];
	let brandData = [];
	let closureData = [];
	let featureData = [];
	let materialData = [];

	const filters = (item) => {
		if (item.name === "Lining") {
			liningData = item.filters.map((filter) => {
				return {
					title: filter.display,
					count: filter.value,
				};
			});
		} else if (item.name === "Sleeve Length") {
			sleeveData = item.filters.map((filter) => {
				return {
					title: filter.display,
					count: filter.value,
				};
			});
		} else if (item.name === "Gender") {
			genderData = item.filters.map((filter) => {
				return {
					element: (
						<label htmlFor={filter.display}>
							<div className="flex flex-row items-center gap-1 my-1 w-max decoration-primaryColor hover:cursor-pointer group hover:underline">
								<p className="text-sm font-OG-Regular group-hover:text-primaryColor text-lightTextColor">
									{filter.display}
								</p>
								<p className="text-xs rounded-sm border-[1px] px-1 group-hover:text-primaryColor font-OG-Regular text-lightTextColor">
									{filter.value}
								</p>
							</div>
						</label>
					),
					type: filter.display,
				};
			});
		} else if (item.name === "Select Size") {
			sizeData = item.filters.map((filter) => {
				return {
					element: (
						<label htmlFor={filter.display}>
							<div className="flex flex-row items-center gap-1 my-1 w-max decoration-primaryColor hover:cursor-pointer group hover:underline">
								<p className="text-sm font-OG-Regular group-hover:text-primaryColor text-lightTextColor">
									{filter.display}
								</p>
								<p className="text-xs rounded-sm border-[1px] px-1 group-hover:text-primaryColor font-OG-Regular text-lightTextColor">
									{filter.value}
								</p>
							</div>
						</label>
					),
					type: filter.display,
				};
			});
		} else if (item.name === "Color Options") {
			colorData = item.filters.map((filter) => {
				return {
					element: (
						<label htmlFor={filter.display}>
							<div className="flex flex-row items-center gap-1 my-1 w-max decoration-primaryColor hover:cursor-pointer group hover:underline">
								<div
									className={
										"size-[0.875rem] bg-[" +
										filter.display.toLowerCase() +
										"]"
									}
								/>
								<p className="text-sm font-OG-Regular group-hover:text-primaryColor text-lightTextColor">
									{filter.display}
								</p>
								<p className="text-xs rounded-sm border-[1px] px-1 group-hover:text-primaryColor font-OG-Regular text-lightTextColor">
									{filter.value}
								</p>
							</div>
						</label>
					),
					type: filter.display,
				};
			});
		} else if (item.name === "Brand") {
			brandData = item.filters.map((filter) => {
				return {
					element: (
						<label htmlFor={filter.display}>
							<div className="flex flex-row items-center gap-1 my-1 w-max decoration-primaryColor hover:cursor-pointer group hover:underline">
								<p className="text-sm font-OG-Regular group-hover:text-primaryColor text-lightTextColor">
									{filter.display}
								</p>
								<p className="text-xs rounded-sm border-[1px] px-1 group-hover:text-primaryColor font-OG-Regular text-lightTextColor">
									{filter.value}
								</p>
							</div>
						</label>
					),
					type: filter.display,
				};
			});
		} else if (item.name === "Closure") {
			closureData = item.filters.map((filter) => {
				return {
					element: (
						<label htmlFor={filter.display}>
							<div className="flex flex-row items-center gap-1 my-1 w-max decoration-primaryColor hover:cursor-pointer group hover:underline">
								<p className="text-sm font-OG-Regular group-hover:text-primaryColor text-lightTextColor">
									{filter.display}
								</p>
								<p className="text-xs rounded-sm border-[1px] px-1 group-hover:text-primaryColor font-OG-Regular text-lightTextColor">
									{filter.value}
								</p>
							</div>
						</label>
					),
					type: filter.display,
				};
			});
		} else if (item.name === "Feature") {
			featureData = item.filters.map((filter) => {
				return {
					element: (
						<label htmlFor={filter.display}>
							<div className="flex flex-row items-center gap-1 my-1 w-max decoration-primaryColor hover:cursor-pointer group hover:underline">
								<p className="text-sm font-OG-Regular group-hover:text-primaryColor text-lightTextColor">
									{filter.display}
								</p>
								<p className="text-xs rounded-sm border-[1px] px-1 group-hover:text-primaryColor font-OG-Regular text-lightTextColor">
									{filter.value}
								</p>
							</div>
						</label>
					),
					type: filter.display,
				};
			});
		} else if (item.name === "Material") {
			materialData = item.filters.map((filter) => {
				return {
					element: (
						<label htmlFor={filter.display}>
							<div className="flex flex-row items-center gap-1 my-1 w-max decoration-primaryColor hover:cursor-pointer group hover:underline">
								<p className="text-sm font-OG-Regular group-hover:text-primaryColor text-lightTextColor">
									{filter.display}
								</p>
								<p className="text-xs rounded-sm border-[1px] px-1 group-hover:text-primaryColor font-OG-Regular text-lightTextColor">
									{filter.value}
								</p>
							</div>
						</label>
					),
					type: filter.display,
				};
			});
		}
	};

	const renderFilter = (item: any) => {
		switch (item.attribute_code) {
			case "sleeve_length":
			case "lining":
				return (
					<div className="mb-4">
						<AccordianOption
							title={item.label}
							data={item.options}
						/>
					</div>
				);

			case "price":
				return null;

			// case true:
			//  return (
			//    <div className="mb-4">
			//      <CheckboxOption
			//        title={item.label}
			//        data={item.options}
			//      />
			//    </div>
			//  );

			default:
				return (
					<div className="mb-4">
						<CheckboxOption
							title={item.label}
							data={item.options}
						/>
					</div>
				);
		}
	};

	if (isLoading) {
		return <p>Loading...</p>;
	}

	// data.forEach(filters)

	return (
		<>
			<AddToCart
				isOpen={viewProduct}
				onClose={() => setViewProduct(false)}
			/>
			<FilterModal
				isOpen={showOption === "filter"}
				onClose={() => setShowOption(false)}
			/>
			<SortModal
				isOpen={showOption === "sort"}
				onClose={() => setShowOption(false)}
			/>

			<div className=" md:my-5 product_listing_container sm:px-10">
				<div className="flex flex-row items-center gap-0 px-3 mt-2 sm:mt-0 md:pb-2 md:px-0 md:flex">
					<Link to={"/"}>
						<p className="text-sm capitalize font-OG-Regular text-lightTextColor">
							home
						</p>
					</Link>
					{pathList.map((item, index) => {
						return (
							<Link
								className={`flex flex-row items-center text-sm  font-OG-Regular capitalize ${
									pathList.length === index + 1
										? "pointer-events-none"
										: ""
								}`}
								to={`/product-list/${pathList
									.slice(0, index + 1)
									.join("/")}`}
							>
								<OutlineArrowUpIcon
									className={`fill-lightTextColor group-hover:fill-primaryColor text-sm  rotate-[90deg]  `}
								/>
								<p className="text-sm hover:cursor-pointer font-OG-Regular text-lightTextColor">
									{item}
								</p>
							</Link>
						);
					})}
				</div>

				<div className="flex flex-col items-start md:flex-row md:flex product_listing_page_container">
					<div className="shop_by md:basis-[25%] md:h-[100dvh]  md:overflow-y-scroll hide-scroll">
						<div className="px-3 mt-2 md:px-0 md:mt-0 md:my-4 bread_crumb_after">
							<h2 className="text-2xl font-OG-Bold text-lightTextColor">
								Men
							</h2>
						</div>
						<div className="shop_by_container_options">
							<p className="hidden mb-4 text-lg md:block font-OG-Bold text-lightTextColor">
								Shop By
							</p>
							<div className="hidden md:block">
								{/* <p className="text-lg font-OG-Medium text-lightTextColor border-b-[1px] my-1 pb-2 ">
                  Shopping options
                </p> */}
								<div>
									{data?.products?.aggregations.map((item) =>
										renderFilter(item)
									)}

									<div className="mb-6">
										<RangeSlider title={"Price"} />
									</div>

									{/* <div className="mb-4">
                    <CheckboxOption
                      title={"Rating"}
                      data={ratingData}
                    />
                  </div> */}
									{/* <div className="mb-4 w-[98%]">
                    <label htmlFor="search_brand">
                      <p className="my-1 text-sm font-OG-Bold text-lightTextColor">
                        Search Brands
                      </p>
                    </label>
                    <InputBoxField
                      placeholder="search brands..."
                      className="rounded-[3px] border-[1px] focus:outline-primaryColor px-3 font-OG-Regular text-sm h-[30px] w-full"
                    />
                  </div> */}
								</div>
							</div>
						</div>
					</div>
					<div className="product_listing_outlet md:basis-[75%] md:px-6">
						<div className="md:overflow-y-scroll md:h-[100dvh] md:pb-20 hide-scroll">
							<div className="flex-row items-center justify-end hidden gap-3 md:flex ">
								{/* <div className="flex flex-row *:border-primaryColor gap-1 *:cursor-pointer *:rounded-sm items-center">
                  <div
                    onClick={() => !isGrid && setIsGrid(true)}
                    className={`border-[1px] ${
                      isGrid ? "border-b-[2px]" : ""
                    }   p-2`}
                  >
                    <GridIcon
                      className={` size-[20px]  ${
                        isGrid ? "fill-primaryColor " : "fill-black"
                      } `}
                    />
                  </div>
                  <div
                    onClick={() => isGrid && setIsGrid(false)}
                    className={`border-[1px] ${
                      !isGrid ? "border-b-[2px]" : ""
                    } p-2`}
                  >
                    <FlexIcon
                      className={`size-[20px] ${
                        !isGrid ? "fill-primaryColor" : "fill-black"
                      } `}
                    />
                  </div>
                </div> */}
								<div className="flex flex-row items-center gap-4">
									<label
										className="block text-s font-OG-Regular text-lightTextColor"
										htmlFor="sort_by"
									>
										Sort By
									</label>
									<SelectDropdown
										id="sort_by"
										className="font-OG-Regular text-s"
										placeholder="Select Sort By"
										components={
											{
												// IndicatorSeparator: () => null,
												// DropdownIndicator: () => null,
											}
										}
										defaultValue={{
											label: "Rating",
											value: "rating",
										}}
										styles={{
											control(base, props) {
												return {
													// ...base,
													borderRadius: "2px",
													width: "150px",
													border: `1px solid ${colors.lightTextColor}`,
													display: "flex",
													height: "35px",
												};
											},
											menu(base, props) {
												return {
													...base,
												};
											},
										}}
										name="sort"
										classNames={{
											placeholder: (props) => {
												return "";
											},
											container(props) {
												return "z-[40]";
											},
										}}
										isMulti={false}
										options={[
											{
												value: "rating",
												label: "Rating",
											},
											{
												value: "price",
												label: "Price",
											},
											{
												value: "product name",
												label: "Product Name",
											},
											{
												value: "position",
												label: "Position",
											},
										]}
									/>
									<DownArrowIcon
										onClick={() => setIsAsc(!isAsc)}
										className={`size-[20px] ${
											isAsc ? "rotate-[180deg]" : ""
										} hover:cursor-pointer fill-primaryColor`}
									/>
								</div>
							</div>
							<Outlet
								context={{ setViewProduct, isGrid, setIsGrid }}
							/>
						</div>
						{/* sticky  */}
						<FilterSort setShowOption={setShowOption} />
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductListingPage;
