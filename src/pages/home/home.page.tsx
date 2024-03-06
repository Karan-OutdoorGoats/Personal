import DownloadApp from "components/DownloadApp/download-app";
import FixedArrow from "components/FixedArrow/FixedArrow";
import Footer from "components/Footer/Footer";
import MainHeader from "components/MainHeader/main-header";
import AddToCart from "components/Modal/AddToCart/AddToCart";
import NavBar from "components/NavBar/navbar";
import SalesBanner from "components/SalesBanner/SalesBanner";
import { useGQLQuery } from "graphql/operations/useGQLQuery";
import { bestSellerQuery } from "graphql/queries/bestSellerQuery";
import { newProductQuery } from "graphql/queries/newProductQuery";
import { premiumQuery } from "graphql/queries/premiumQuery";
import { trendingQuery } from "graphql/queries/trendingQuery";
import { useScreenSize } from "hooks/useScreenSize";
import BrandRoll from "./components/brand-roll";
import LatestBlog from "./components/latest-blog";
import MobileTopBanner from "./components/mobile/mobile-top-banner";
import NavBarMemu from "./components/mobile/nav-bar-menu";
import TopCategory from "./components/mobile/top-category";
import MultiRowGrid from "./components/multi-row-grid";
import NavBarContainer from "./components/nav-bar-container";
import ProductTypeCard from "./components/product-type-card";
import SeasonSingleRowGrid from "./components/season-single-row-grid";
import SingleRowGrid from "./components/single-row-grid";
import SoloBanner from "./components/solo-banner";
import TopBanner from "./components/top-banner";
import { useHome } from "./home.hooks";
import { blogQuery } from "graphql/queries/blogQuery";
import { useEffect } from "react";

const Home = () => {
	const { setViewProduct, viewProduct, setShowMenuViaHam, showMenuViaHam } =
		useHome();

	const screenSize = useScreenSize();

	const newDropsSignal = new AbortController();

	const {
		data: newDropsData,
		isLoading: isNewDropsLoading,
		isError: isNewDropsError,
	} = useGQLQuery(
		["newDrops"],
		newProductQuery,
		undefined,
		undefined,
		newDropsSignal.signal
	);

	const premiumSignal = new AbortController();

	const {
		data: premiumData,
		isError: isPremiumError,
		isLoading: isPremiumLoading,
	} = useGQLQuery(
		["premiumCollection"],
		premiumQuery,
		undefined,
		undefined,
		premiumSignal.signal
	);

	// const {
	// 	data: promoBarData,
	// 	isLoading: isPromoLoading,
	// 	isError: isPromoError,
	// } = useGQLQuery(["promoBar"], promoBar);
	const blogSignal = new AbortController();

	const {
		data: blogData,
		isError: isBlogError,
		isLoading: isBlogLoading,
	} = useGQLQuery(
		["blog"],
		blogQuery,
		undefined,
		undefined,
		blogSignal.signal
	);

	const bestSellerSignal = new AbortController();

	const {
		data: bestSellersData,
		isError: isBestSellersError,
		isLoading: isBestSellerLoading,
	} = useGQLQuery(
		["bestSellers"],
		bestSellerQuery,
		undefined,
		undefined,
		bestSellerSignal.signal
	);

	const trendingSignal = new AbortController();

	const {
		data: trendingData,
		isLoading: isTrendingLoading,
		isError: isTrendingError,
	} = useGQLQuery(
		["trending"],
		trendingQuery,
		undefined,
		undefined,
		trendingSignal.signal
	);

	const cancelToken = () => {
		blogSignal.abort();
		newDropsSignal.abort();
		bestSellerSignal.abort();
		trendingSignal.abort();
		premiumSignal.abort();
	};

	useEffect(() => {
		const timer = setTimeout(cancelToken, 15 * 1000);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<div>
			<div className="hidden sm:block">
				{/* {isPromoError ? null : (
					<SalesBanner
						isLoading={isPromoLoading}
						content={promoBarData?.promobar?.items[0]?.content}
					/>
				)} */}
				<SalesBanner />
			</div>
			<div className="sticky hidden sm:block top-0 z-[1000]">
				<MainHeader />
				<hr className="h-[1px] text-primaryColor bg-pritext-primaryColor" />
				<NavBar />
			</div>
			<div className="relative home_container">
				<AddToCart
					isOpen={viewProduct}
					onClose={() => setViewProduct(false)}
				/>
				<NavBarMemu
					showMenuViaHam={showMenuViaHam}
					setShowMenuViaHam={() => setShowMenuViaHam(true)}
				/>
				<div className="block sm:hidden">
					<NavBarContainer
						showMenuViaHam={showMenuViaHam}
						closeMenu={() => setShowMenuViaHam(false)}
					/>
				</div>

				{/* top banner for desktop */}
				{screenSize.width > 600 && (
					<div className="top_banner">
						<TopBanner />
					</div>
				)}
				{/* mobile top banner */}
				{screenSize.width <= 600 && <MobileTopBanner />}
				<div className="block md:hidden">
					<TopCategory title="Top Categories" />
				</div>

				{isNewDropsError ? null : (
					<MultiRowGrid
						isLoading={isNewDropsLoading}
						title="New Drops"
						data={newDropsData?.newProducts?.items}
						openViewProduct={() => setViewProduct(true)}
					/>
				)}
				<BrandRoll />
				<div className="hidden md:block">
					<SoloBanner />
				</div>
				{isBestSellersError ? null : (
					<MultiRowGrid
						isLoading={isBestSellerLoading}
						data={bestSellersData?.bestSellers?.items}
						title="Best Sellers"
						openViewProduct={() => setViewProduct(true)}
					/>
				)}
				<ProductTypeCard />
				{/* <SingleRowGrid title="Season Picks" openViewProduct={() => setViewProduct(true)} /> */}
				{isPremiumError ? null : (
					<SeasonSingleRowGrid
						isLoading={isPremiumLoading}
						data={premiumData?.premiumProducts?.items}
						title="Our Premium Collection"
						openViewProduct={() => setViewProduct(true)}
					/>
				)}
				{isTrendingError ? null : (
					<SingleRowGrid
						isLoading={isTrendingLoading}
						data={trendingData?.trendingProducts?.items}
						title="Trending"
						openViewProduct={() => setViewProduct(true)}
					/>
				)}
				{isBlogError ? null : (
					<LatestBlog
						isLoading={isBlogLoading}
						data={blogData?.blogPosts?.items}
						title="Latest Blogs"
					/>
				)}
				<DownloadApp />
				<Footer />
				<FixedArrow />
			</div>
		</div>
	);
};

export default Home;
