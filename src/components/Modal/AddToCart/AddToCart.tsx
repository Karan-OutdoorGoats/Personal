import CircleCloseOutlineIcon from "assets/svg/components/CircleCloseOutlineIcon";
import OGButton from "components/Button/OGButton";
import { useScreenSize } from "hooks/useScreenSize";
import ReactModal from "react-modal";
import { colors } from "utils/colors";

import Qty from "pages/product-page/components/Qty";
import SkuColor from "pages/product-page/components/SkuColor";
import SkuOption from "pages/product-page/components/SkuOption";
import SizeChartModal from "../SizeChartModal";
import { useAddToCart } from "./AddToCart.hooks";
import DesktopCarousel from "./components/DesktopCarousel";
import PrdQuickInfoDesk from "./components/PrdQuickInfoDesk";
import "./components/styles/styles.css";

import MobileCarousel from "./components/MobileCarousel";

interface AddToCartProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddToCart = (props: AddToCartProps) => {
  const screenSize = useScreenSize();

  const {
    listenForHover,
    listenForHoverOut,
    showImgArr,
    setShowSizeChart,
    showSizeChart,
    isError,
    setIsError,
  } = useAddToCart();

  // alert(screenSize.width);

  const { isOpen, onClose } = props;

  return (
    <ReactModal
      isOpen={isOpen}
      closeTimeoutMS={500}
      contentLabel="Edit Address"
      style={{
        content: {
          backgroundColor: colors.white,
          height: screenSize.width > 600 ? "80vh" : "80dvh",
          overflowY: "scroll",
          width: screenSize.width > 600 ? "60%" : "100%",
        },
        overlay: {
          zIndex: 9999,
          // backgroundColor: "rgba(205,205,205,0.8)",
          backgroundColor: "rgba(0,0,0,0.7)",
          padding: screenSize.width > 600 ? "2rem" : "unset",
          display: "flex",
          flexDirection: screenSize.width > 600 ? "row" : "column",
          justifyContent: screenSize.width > 600 ? "center" : "end",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        },
      }}
      className="sm:border-2 sm:rounded-md focus:outline-primaryColor border-primaryColor"
    >
      <SizeChartModal
        isOpen={showSizeChart}
        onClose={() => setShowSizeChart(false)}
      />
      <div className="sm:px-3">
        <div className="">
          <div className="sticky mb-3 px-3 top-0 z-[20] flex items-center justify-between py-2 bg-white ">
            <p className="text-base leading-8 uppercase text-lightTextColor font-OG-Bold">
              Product Overview
            </p>
            {/* <IoIosCloseCircleOutline
              className="hover:cursor-pointer size-[2rem]"
              onClick={onClose}
              color={colors.primaryColor}
            /> */}
            <CircleCloseOutlineIcon
              onClick={onClose}
              className="hover:cursor-pointer text-[2rem] stroke-primaryColor "
            />
          </div>

          <div className="flex flex-col sm:flex-row add_to_cart_modal_container">
            <div className="hidden  w-[45%] h-full   sm:sticky sm:top-[10%] sm:flex flex-row">
              <DesktopCarousel
                listenForHover={listenForHover}
                listenForHoverOut={listenForHoverOut}
                showImgArr={showImgArr}
              />
            </div>
            <div className="block sm:hidden">
              <MobileCarousel />
            </div>
            <div className="sm:w-[55%] flex flex-col *:order-[unset] sm:*:order-[unset]  px-4">
              <div className="order-1 py-2 sm:py-0">
                <h1 className="text-lg sm:leading-[24px] font-OG-Bold sm:text-xl sm:pr-[3rem] sm:break-normal text-lightTextColor">
                  Colonel 80 Liters Rucksack+Detachable Day Pack (Army Green)
                </h1>
              </div>

              <div className="flex flex-row items-center justify-between order-2 my-1 mt-2 stock_sku_container">
                <p className="uppercase text-11 font-OG-Medium text-stockGreen">
                  In Stock
                </p>
                <div className="flex flex-row items-center gap-1">
                  <p className="text-11 text-lightTextColor font-OG-Bold">
                    SKU
                  </p>
                  <p className="text-11 text-lightTextColor font-OG-Regular">
                    COLAG80C
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center order-3 stock_sku_container">
                <div className="flex flex-row items-center gap-1">
                  <p className="text-11 text-lightTextColor font-OG-Regular">
                    {`BRAND`}
                  </p>
                  <p className="text-11 text-lightTextColor font-OG-Regular">
                    :
                  </p>
                  <p className="uppercase text-11 text-lightTextColor font-OG-Regular">
                    {`TRIPOLE`}
                  </p>
                </div>
              </div>

              <div className="flex flex-row flex-wrap justify-between order-4 my-2">
                <div className="flex flex-row items-center text-lightTextColor">
                  <h2 className="font-OG-Bold text-22 ">₹3,299</h2>
                  <h2 className="relative px-2 text-sm line-through font-OG-Regular text-aluminium">
                    ₹3,299
                  </h2>
                </div>
              </div>





              <div className="order-6">
                <SkuColor
                  isError={isError}
                  selectedTitle="Blue"
                  title="Color Options"
                />
                <SkuOption
                  isError={isError}
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
              </div>

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



              <div className="order-7 mb-2">
                <div className="my-2 sm:w-[40%] w-[30%]">
                  <Qty />
                </div>





                <OGButton
                  onClick={() => setIsError(true)}
                  className="uppercase rounded-md hover:bg-white hover:text-primaryColor hover:duration-500 hover:border-primaryColor h-10 w-full font-[500] text-xs font-OG-Bold  bg-primaryColor text-white hover:border-[1px] my-1"
                  title="Buy Now"
                />

                <OGButton
                  onClick={() => setIsError(true)}
                  className="uppercase rounded-md bg-white text-primaryColor hover:duration-500 border-primaryColor h-10 w-full font-[500] text-xs font-OG-Bold  border-[1px] my-1"
                  title="Add to cart"
                />


                <div className="flex flex-row order-5 my-1 ">
                  <div className="basis-[90%]">
                    <PrdQuickInfoDesk />
                  </div>
                  <div className="flex items-center justify-center basis-[10%]">
                    <p className="text-[11px] underline cursor-pointer font-OG-Regular hover:underline text-primaryColor underline-offset-2">
                      More
                    </p>
                  </div>
                </div>


                {/* <div className="order-8 sm:my-0">
                  <div className=" *:text-[0.8rem] flex flex-col my-0 items-start">
                    <p className="text-sm font-OG-Regular text-lightTextColor">
                      Expected delivery to metros: 4-5 days
                    </p>
                    <p className="text-sm font-OG-Regular text-lightTextColor">
                      Expected delivery to rest of India: 5-7 days
                    </p>
                  </div>
                </div> */}

              </div>



            </div>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default AddToCart;
