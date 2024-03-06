import { ItemStyles, Rating, ThinRoundedStar } from "@smastrom/react-rating";
import CompareIcon from "assets/svg/components/CompareIcon";
import EyeIcon from "assets/svg/components/EyeIcon";
import HeartIcon from "assets/svg/components/HeartIcon";
import OGButton from "components/Button/OGButton";
import { useScreenSize } from "hooks/useScreenSize";
import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";

const myStyles: ItemStyles = {
	itemShapes: ThinRoundedStar,
	activeFillColor: "#ffb700",
	inactiveFillColor: "#fbf1a9",
};

const ProductItemCard = () => {
	const screenSize = useScreenSize();
	const { setViewProduct, isGrid } = useOutletContext<any>();

	return (
		<div
			className={`border-[1px] box-content ${
				isGrid
					? "md:border-[1px] md:hover:border-primaryColor md:hover:border-b-[2px] md:hover:rounded-md  group"
					: "border-[1px] hover:border-primaryColor hover:border-b-[2px] hover:rounded-md  group hover:cursor-pointer flex flex-row items-stretch justify-start gap-2 basis-[100%]"
			}`}
		>
			<div
				className={`relative overflow-clip md:p-2 img_container ${
					isGrid ? "" : "basis-[30%]"
				} `}
			>
				<Link
					to={"/product-page/jacket"}
					className="relative md:h-[280px] h-[unset] flex flex-row items-center justify-center overflow-hidden"
				>
					<img
						className="md:h-[280px] h-[unset] object-cover duration-[800ms] ease-in-out  md:group-hover:translate-x-[290px] md:translate-x-0 md:group-hover:duration-[800ms]  aspect-square"
						src="https://www.outdoorgoats.com/media/catalog/product/cache/320x320/j/a/jacket_yellow_1.jpg"
						alt="product_image"
					/>
					<img
						className="md:h-[280px] h-[unset] hidden md:block   translate-x-[-290px] duration-[800ms] ease-in-out opacity-0 group-hover:opacity-100  object-cover group-hover:translate-x-0 group-hover:duration-[800ms]   absolute aspect-square"
						src="https://www.outdoorgoats.com/media/catalog/product/cache/320x320/j/a/jacket_yellow_3.jpg"
						alt="product_image_hover"
					/>
					<div className="absolute bottom-[12%] md:bottom-[10%] h-[20px]  flex flex-col justify-center left-[25%]  md:left-[28%]  origin-center rotate-[-33deg] z-[2]  bg-orange text-white font-OG-Regular w-full  py-[1px]">
						<p className="text-center uppercase text-[0.6rem] md:text-11">
							Athlete Reviewed
						</p>
					</div>
				</Link>
				<div className="absolute rounded-sm top-[5%] left-[5%] z-[20]  bg-primaryColor  px-1.5 py-1">
					<p className="text-white text-11 font-OG-Regular">
						40% OFF
					</p>
				</div>

				<div className="opacity-0 group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-700 ">
					{/* <div
            title="wishlist"
            onClick={() =>
              toast(
                <div className="flex flex-row items-center justify-center">
                  <p className="text-sm capitalize font-OG-Bold text-lightTextColor">
                    Product is added to wishlist
                  </p>
                </div>,
                {
                  position: "top-center",
                  autoClose: 1800,
                  // hideProgressBar: true,
                  // autoClose: false,
                  toastId: "added_wishlist",
                  className: "",
                  pauseOnHover: false,
                  bodyClassName: "",
                  draggable: true,
                  style: {
                    width: "400px",
                  },
                  progressStyle: {
                    animationDirection: "reverse",
                  },
                }
              )
            }
            className="absolute hover:cursor-pointer  bg-lightPrimaryColor group/icon hover:bg-primaryColor border-primaryColor rounded-full top-[5%] right-[5%] z-[20]  font-OG-Regular text-xs p-1.5"
          >
            <HeartIcon className="text-[1.4rem] stroke-primaryColor group-hover/icon:stroke-white " />
          </div> */}
					{/* <div
            title="view more"
            onClick={() => setViewProduct(true)}
            className="absolute hover:cursor-pointer  bg-lightPrimaryColor group/icon hover:bg-primaryColor border-primaryColor rounded-full top-[19%] right-[5%] z-[20]  font-OG-Regular text-xs p-1.5"
          >
            <EyeIcon className="text-[1.4rem] size-[1.4rem] group-hover/icon:stroke-white  fill-primaryColor stroke-primaryColor" />
          </div> */}
					{/* <div
            title="compare"
            onClick={() =>
              toast(
                <div className="flex flex-row items-center justify-center">
                  <p className="text-sm capitalize font-OG-Bold text-lightTextColor">
                    Product has been added to comparison list
                  </p>
                </div>,
                {
                  position: "top-center",
                  autoClose: 1800,
                  // hideProgressBar: true,
                  // autoClose: false,
                  toastId: "added_compare",
                  className: "",
                  pauseOnHover: false,
                  bodyClassName: "",
                  draggable: true,
                  style: {
                    width: "400px",
                  },
                  progressStyle: {
                    animationDirection: "reverse",
                  },
                }
              )
            }
            className="absolute flex flex-row items-center hover:cursor-pointer group/icon hover:bg-primaryColor bg-lightPrimaryColor  border-primaryColor rounded-full top-[33%] right-[5%] z-[20]  font-OG-Regular text-xs p-1.5"
          >
            <CompareIcon className="text-[1.4rem] group-hover/icon:stroke-white  stroke-primaryColor" />
          </div> */}
				</div>
			</div>

			<div
				className={`flex flex-col ${
					isGrid
						? "items-center h-[200px] justify-center"
						: "py-2 justify-between basis-[70%] "
				}   px-2 product_desc `}
			>
				<div
					className={`${
						isGrid ? "flex flex-col items-start px-2" : "mt-5"
					} `}
				>
					<div className="flex flex-row items-center justify-between w-full">
						<p className=" text-[11px] uppercase font-OG-Medium text-lightTextColor basis-[70%] md:basis-[60%]">
							Baller Athletik{" "}
						</p>
						<div
							title="wishlist"
							onClick={() =>
								toast(
									<div className="flex flex-row items-center justify-center">
										<p className="text-sm capitalize font-OG-Bold text-lightTextColor">
											Product is added to wishlist
										</p>
									</div>,
									{
										position:
											screenSize.width > 600
												? "top-center"
												: "bottom-center",
										autoClose: 1800,
										// hideProgressBar: true,
										// autoClose: false,
										toastId: "added_wishlist",
										className: "",
										pauseOnHover: false,
										bodyClassName: "",
										draggable: true,
										style: {
											width:
												screenSize.width > 600
													? "400px"
													: "100%",
										},
										progressStyle: {
											animationDirection: "reverse",
										},
									}
								)
							}
							className="hover:cursor-pointer flex md:hidden group-hover:flex basis-[30%]  md:basis-[40%] justify-end      group/icon rounded-full  z-[20]  font-OG-Regular text-xs "
						>
							<HeartIcon className="text-[20px] stroke-primaryColor  " />
						</div>
					</div>
					<div className="mt-2">
						<Link to={"/product-page/jacket"}>
							<p
								className={`text-sm font-[200] mb-1  ${
									isGrid
										? "text-start"
										: "text-start text-pretty"
								} font-OG-Medium text-lightTextColor line-clamp-2`}
							>
								Men's K2 Heavy Fill Jacket (Upto -10 C) - SHERPA
								SERIES Men's K2 Heavy Fill Jacket (Upto -10 C)
							</p>
							<div className="flex flex-row items-center gap-2 my-1 mt-2 md:mt-0">
								<Rating
									readOnly
									style={{ width: "80px" }}
									value={3.4}
									itemStyles={myStyles}
									onChange={() => {}}
								/>
								<div>
									<p className="text-[11px] font-OG-Regular text-lightTextColor">
										8 Reviews
									</p>
								</div>
							</div>

							<div className="flex flex-row flex-wrap justify-between my-1 prices">
								<div className="flex flex-row items-center font-OG-ExtraBold text-lightTextColor">
									<p className="text-base font-[100] font-OG-Bold">
										₹3,299
									</p>
									<p className="relative px-2 text-[11px] font-[100] line-through font-OG-Regular text-aluminium">
										₹3,299
									</p>
								</div>
							</div>
						</Link>
					</div>
				</div>

				<OGButton
					onClick={() => setViewProduct(true)}
					className={`uppercase ${
						isGrid
							? "md:hidden group-hover:block w-full"
							: "block mb-5 w-[40%]"
					} rounded-sm hover:bg-white hover:text-primaryColor hover:duration-500 hover:border-primaryColor h-8 md:h-10  font-[500] text-xs font-OG-Bold  bg-primaryColor text-white hover:border-[1px] my-1`}
					title="Add to cart"
				/>
			</div>
		</div>
	);
};

export default ProductItemCard;
