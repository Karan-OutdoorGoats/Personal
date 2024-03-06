import * as React from "react";
import { ItemStyles, Rating, ThinRoundedStar } from "@smastrom/react-rating";
import CompareIcon from "assets/svg/components/CompareIcon";
import HeartIcon from "assets/svg/components/HeartIcon";
import rightIcon from "assets/svg/right-circle.svg";
import OGButton from "components/Button/OGButton";
import CartModal from "components/CartModal/CartModal";
import DiscountBanner from "components/DiscountBanner";
import SizeChartModal from "components/Modal/SizeChartModal";
import UserCred from "components/Modal/UserCred/UserCred";
import NavHeader from "components/NavHeader/NavHeader";
import { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaPinterest, FaXTwitter } from "react-icons/fa6";
import { toast } from "react-toastify";
import Accordian from "./components/Accordian";
import DesktopCarousel from "./components/DesktopCarousel";
import PrdImageCarousel from "./components/PrdImageCarousel";
import PrdQuickInfo from "./components/PrdQuickInfo";
import PrdQuickInfoDesk from "./components/PrdQuickInfoDesk";
import Qty from "./components/Qty";
import SkuColor from "./components/SkuColor";
import SkuOption from "./components/SkuOption";
import WriteAReview from "./components/WriteAReview";
import PrdDescWithRating from "./components/desktop/PrdDescWithRating";
import { useProductPage } from "./product-page.hooks";
import AddToCart from "components/Modal/AddToCart/AddToCart";
import ManageCookies from "components/Modal/ManageCookies";
import Footer from "components/Footer/Footer";

const myStyles: ItemStyles = {
	itemShapes: ThinRoundedStar,
	activeFillColor: "#ffb700",
	inactiveFillColor: "#fbf1a9",
};

const ProductPage = () => {
	const {
		listenForScroll,
		scrollToTop,
		scrollVisible,
		listenForHover,
		listenForHoverOut,
		showImgArr,
		showReviewModal,
		setShowReviewModalCB,
		onScroll,
		isSticky,
		setShowAuth,
		showAuth,
		setShowSizeChart,
		showSizeChart,
		outOfStock,
		setOutOfStock,
	} = useProductPage();
	const [isOpen, setIsOpen] = useState(false);

	const boundingRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		listenForScroll();
	}, []);

	useEffect(() => {
		const thumbImage =
			document.querySelector<HTMLDivElement>(".thumbImage")!;
		if (thumbImage) {
			thumbImage.addEventListener("mouseover", listenForHover);

			thumbImage.addEventListener("mouseout", listenForHoverOut);
		}
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", onScroll);

		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

	return (
		<div className="">
			<WriteAReview
				onClose={() => setShowReviewModalCB(false)}
				isOpen={showReviewModal}
			/>

			<NavHeader />
			<DiscountBanner />
			<CartModal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
			<UserCred isOpen={showAuth} onClose={() => setShowAuth(false)} />
			<SizeChartModal
				isOpen={showSizeChart}
				onClose={() => setShowSizeChart(false)}
			/>
			<AddToCart isOpen={false} onClose={() => {}} />
			<ManageCookies isOpen={false} onClose={() => {}} />

			<div className="px-3 my-5 sm:px-8 ">
				<div className="sm:flex sm:flex-row sm:py-3 ">
					<div className="sm:hidden">
						<PrdImageCarousel />
					</div>
					<div className="hidden sm:flex sm:flex-col ">
						<DesktopCarousel showImgArr={showImgArr} />
						{/* <PromiseGrid /> */}
					</div>

					<div className="w-full gap-3 product_info sm:flex sm:flex-row sm:justify-between">
						<div className="sm:w-[78%] sm:px-4">
							<div className="py-2 sm:py-0">
								<h1 className="text-xl break-all font-OG-Bold sm:text-xl sm:pr-[3rem] sm:break-normal text-lightTextColor">
									Colonel 80 Liters Rucksack+Detachable Day
									Pack (Army Green)
								</h1>
							</div>

							<div className="flex flex-row flex-wrap items-center justify-between mt-2 sm:justify-start sm:gap-4">
								<div>
									<Rating
										readOnly
										style={{ width: "90px" }}
										value={3.4}
										itemStyles={myStyles}
										onChange={() => {}}
									/>
								</div>
								<div className="flex flex-row items-center justify-between gap-1 *:text-sm *sm:text-s *:font-OG-Bold text-lightTextColor">
									<p>8 Reviews</p>
									<div> | </div>
									<p className="underline underline-offset-2 text-lightTextColor">
										Add Your Review
									</p>
								</div>
							</div>

							<div className="my-3 out_of_stock border-[1px] w-max px-2 rounded-full border-ff0000">
								<p className="text-sm font-OG-Medium text-ff0000">
									Out Of Stock
								</p>
							</div>

							<div className="flex flex-row items-center gap-2 my-3">
								<h2 className="text-sm font-OG-ExtraBold text-grey font-[900]">
									SKU
								</h2>
								<p className="text-sm font-OG-Regular text-grey ">
									COLAG80C
								</p>
							</div>

							<div className="flex flex-row items-center gap-2 my-3">
								<h2 className="text-sm font-OG-ExtraBold text-grey font-[900]">
									BRAND
								</h2>
								<p className="text-sm font-OG-Regular text-grey ">
									Tripole
								</p>
							</div>

							<div className="flex flex-row flex-wrap justify-between">
								<div className="flex flex-row items-end text-2xl font-OG-ExtraBold text-lightTextColor">
									<h2>₹3,299</h2>
									<h2 className="relative bottom-[0%] px-2 text-sm sm:text-base line-through text-aluminium">
										₹3,299
									</h2>
								</div>
							</div>

							{/* hidden in large device */}
							<PrdQuickInfo />
							{/*  */}
							<SkuColor
								selectedTitle="Blue"
								title="Color Options"
							/>
							<SkuOption
								onSizeChartClick={() => setShowSizeChart(true)}
								selectedTitle="L to XL"
								title="Select Size"
								skuName="size"
								options={[
									{
										title: "S",
										qty: "1 left",
									},
									{
										title: "M",
										qty: "3 left",
									},
									{
										title: "L",
										qty: "2 left",
									},
									{
										title: "XL",
										qty: "3 left",
									},
									{
										title: "XXL",
										qty: "1 left",
									},
								]}
							/>
							{/* <SkuOption
                selectedTitle="1 Pair"
                title="Bundle Size"
                skuName="bundle"
                options={[
                  {
                    title: "S",
                    qty: "1 left",
                  },
                  {
                    title: "M",
                    qty: "3 left",
                  },
                  {
                    title: "L",
                    qty: "2 left",
                  },
                  {
                    title: "XL",
                    qty: "3 left",
                  },
                  {
                    title: "XXL",
                    qty: "1 left",
                  },
                ]}
              /> */}
							<div className="my-2 sm:w-[30%] w-[30%]">
								<Qty />
							</div>

							<div
								ref={boundingRef}
								className={`sticky z-[99] bottom-0  flex ${
									isSticky
										? "flex-row"
										: "flex-col static z-0 bottom-auto"
								} sm:flex-row items-center gap-2 bg-white sm:static product_action_btn`}
							>
								<OGButton
									onClick={() => setIsOpen(true)}
									className={`uppercase rounded-md   ${
										outOfStock
											? "cursor-not-allowed opacity-30 border-[1px] text-lightTextColor border-lightTextColor"
											: "hover:bg-white text-white bg-primaryColor hover:text-primaryColor  hover:border-primaryColor"
									} hover:duration-500  h-10 w-full font-[500] text-xs font-OG-Bold   hover:border-[1px] my-1`}
									title="Add to cart"
								/>
								<OGButton
									onClick={() => setShowAuth(true)}
									className={`uppercase bg-white text-xs rounded-md h-10 font-[500]  border-[1px] font-OG-Bold  my-1 text-primaryColor border-primaryColor w-full
                  ${
						outOfStock
							? "cursor-not-allowed opacity-30"
							: "hover:bg-primaryColor hover:text-white hover:duration-500 "
					}
                  `}
									title="Buy Now"
								/>
								{/* hidden in large device */}
								{/* <AddWishlist /> */}
								{/* hidden in large device */}
							</div>

							<div className="my-3 sm:my-0">
								<div className="hidden *:text-[0.8rem] sm:flex flex-col items-center my-3 sm:items-start">
									<p className="text-sm font-OG-Regular text-lightTextColor">
										Expected delivery to metros: 4-5 days
									</p>
									<p className="text-sm font-OG-Regular text-lightTextColor">
										Expected delivery to rest of India: 5-7
										days
									</p>
								</div>
							</div>

							<div className="items-center add_section_plus_social justify-between hidden sm:border-b-[1px] compare sm:flex sm:flex-row">
								<div className="flex flex-row basis-[100%]">
									{/* <OGButton
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
                    // icon={<MdCompareArrows size={"1.4rem"} />}
                    icon={<CompareIcon className="text-[1.4rem] stroke-grey" />}
                    className="hidden sm:flex sm:gap-2 rounded-md items-center py-1 justify-start uppercase w-[100%] font-OG-Medium font-[600] border-primaryColor text-xs text-grey"
                    title="add to compare"
                  /> */}
									<OGButton
										onClick={() =>
											toast(
												<div className="flex flex-row items-center justify-center">
													<p className="text-sm capitalize font-OG-Bold text-lightTextColor">
														Product is added to
														wishlist
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
														animationDirection:
															"reverse",
													},
												}
											)
										}
										// icon={<FaRegHeart size={"1.4rem"} color={colors.grey} />}
										icon={
											<HeartIcon className="text-[1.4rem] stroke-grey" />
										}
										className="hidden  sm:gap-2   rounded-md  sm:flex items-center py-1 justify-start  uppercase w-[100%] font-OG-Medium font-[600] border-primaryColor text-xs text-grey"
										title="Add to wishlist"
									/>
								</div>
								<div className="flex flex-row justify-center gap-2 my-2 sm:my-4">
									<FaFacebookF />
									<FaXTwitter />
									<FaInstagram />
									<FaPinterest />
								</div>
							</div>
						</div>

						<div className="hidden sm:block">
							<PrdQuickInfoDesk />
						</div>
					</div>
				</div>

				{/* <div className="sm:hidden">
          <PromiseGrid />
        </div> */}

				<div className="flex flex-row gap-2 sm:hidden">
					{/* <OGButton
            onClick={() =>
              toast(
                <div className="flex flex-row items-center justify-center">
                  <p className="text-sm capitalize font-OG-Bold text-lightTextColor">
                    Product has been added to comparison list
                  </p>
                </div>,
                {
                  position: "bottom-center",
                  autoClose: 1800,
                  // hideProgressBar: true,
                  // autoClose: false,
                  toastId: "added_compare",
                  className: "",
                  pauseOnHover: false,
                  bodyClassName: "",
                  draggable: true,
                  style: {},
                  progressStyle: {
                    animationDirection: "reverse",
                  },
                }
              )
            }
            className=" py-1 uppercase rounded-md h-[40px] w-full font-OG-Medium font-[600]  border-[1px] bg-white border-primaryColor text-xs text-grey"
            title="add to compare"
          /> */}
					<OGButton
						icon={
							<HeartIcon className="text-[20px] stroke-lightTextColor" />
						}
						onClick={() =>
							toast(
								<div className="flex flex-row items-center justify-center">
									<p className="text-sm capitalize font-OG-Bold text-lightTextColor">
										Product is added to wishlist
									</p>
								</div>,
								{
									position: "bottom-center",
									autoClose: 1800,
									// hideProgressBar: true,
									// autoClose: false,
									toastId: "added_wishlist",
									className: "",
									pauseOnHover: false,
									bodyClassName: "",
									draggable: true,
									progressStyle: {
										animationDirection: "reverse",
									},
								}
							)
						}
						className="py-1 flex flex-row items-center justify-center gap-2 uppercase h-10 rounded-md w-full font-OG-Medium font-[600] border-[1px] bg-white  border-primaryColor text-xs text-lightTextColor"
						title="add to wishlist"
					/>
				</div>

				<div className="flex flex-row justify-center gap-4 my-3 sm:hidden sm:my-4">
					<FaFacebookF />
					<FaXTwitter />
					<FaInstagram />
					<FaPinterest />
				</div>

				<div className="sm:hidden accordian">
					<Accordian setShowReviewModalCB={setShowReviewModalCB} />
					{/* <PrdDetails /> */}
					{/* <ReviewDetails setShowReviewModalCB={setShowReviewModalCB} /> */}
				</div>

				{/* larger device */}

				<div className="hidden sm:block">
					<PrdDescWithRating
						setShowReviewModalCB={setShowReviewModalCB}
					/>
				</div>
				{/* large device end */}
			</div>
			<button
				onClick={scrollToTop}
				className={`fixed_bottom hidden  fixed rounded-[3rem] z-[10000px] ${
					scrollVisible ? "sm:block" : "hidden"
				} bottom-4 right-3`}
			>
				<img
					className="size-[4rem] rotate-[-90deg]"
					src={rightIcon}
					alt="up arrow"
				/>
			</button>

			<div className="hidden fixed_top bg-white border-[1.5px] py-1 z-[1000] w-full top-[0px]">
				<div className="flex flex-row items-center justify-center gap-2 ">
					<div
						onClick={scrollToTop}
						className="flex flex-row items-center rounded-md bg-aquaHaze"
					>
						<img
							src="https://www.outdoorgoats.com/media/catalog/product/cache/014166d21133489231f357fe8663083e/j/a/jacket_yellow_1.jpg"
							className="size-[40px] hover:cursor-pointer"
							alt=""
						/>
						<p className="hover:cursor-pointer px-3 text-sm truncate font-OG-Regular text-lightTextColor w-[300px]">
							Rucksack+Detachable Day Pack (Army Green)
						</p>
					</div>
					<Qty showHeader={false} className="h-[40px]" />
					<OGButton
						className="uppercase rounded-md h-[40px] w-[300px] font-[500] text-xs font-OG-Bold  bg-primaryColor text-white outline-none border-none my-1"
						title="Add to cart"
					/>
				</div>
			</div>

			{/* footer open */}
			<Footer />
			{/* footer close */}
		</div>
	);
};

export default ProductPage;
