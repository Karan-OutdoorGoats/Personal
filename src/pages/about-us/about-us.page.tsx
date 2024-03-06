import DownloadApp from "components/DownloadApp/download-app";
import Footer from "components/Footer/Footer";
import MainHeader from "components/MainHeader/main-header";
import NavBar from "components/NavBar/navbar";
import NavBarMemu from "pages/home/components/mobile/nav-bar-menu";
import NavBarContainer from "pages/home/components/nav-bar-container";
import React, { useState } from "react";
import { images } from "utils/images";

const AboutUsPage = () => {
	const [showMenuViaHam, setShowMenuViaHam] = useState(false);

	return (
		<div>
			{/* header open */}
			<div className="sticky hidden sm:block top-0 z-[1000]">
				<MainHeader />
				<hr className="h-[1px] text-primaryColor bg-pritext-primaryColor" />
				<NavBar />
				<hr className="h-[1px] text-primaryColor bg-pritext-primaryColor" />
			</div>
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
			{/* header close */}

			<div className="px-20 my-10">
				<div className="flex flex-col items-center justify-center welcome">
					<h2 className="text-xl font-OG-Bold text-lightTextColor">
						WELCOME TO OUTDOOR GOATS
					</h2>
					<p className="text-sm text-lightTextColor font-OG-Regular">
						Outdoorgoats is a community of experts and enthusiasts,
						passionate about the outdoors - sharing the why, how and
						what they love with others
					</p>
				</div>

				<div className="flex flex-row gap-5 my-10">
					<div className="basis-[50%]">
						<img
							className="object-contain"
							src={images.aboutUs}
							alt=""
						/>
					</div>
					<div className="basis-[50%]">
						<p className="mb-1.5 text-sm text-pretty text-lightTextColor font-OG-Regular">
							India, a country with a terrain so unique – its fit
							for every outdoor sport. Be it running, cycling,
							mountaineering, climbing, trekking, surfing, scuba
							diving, skiing, snowboarding and so many more.
						</p>
						<p className="mb-1.5 text-sm text-pretty text-lightTextColor font-OG-Regular">
							As our name suggests at Outdoor Goats, we're overtly
							passionate about the great outdoors. Athletes and
							experts say, there is no bad experience in the
							outdoors if you have the right gear and apparel for
							your sport or expeditions.
						</p>

						<p className="mb-1.5 text-sm text-pretty text-lightTextColor font-OG-Regular">
							Presenting Outdoor Goats – Gear for you and here for
							you no matter what your outdoor is! Outdoorgoats is
							a community of experts and enthusiasts, passionate
							about the outdoors - sharing the why, how and what
							they love with others. We've curated a collection of
							brands specifically built for the outdoors which are
							known for their exceptional quality and reliability.
							Whether you're a seasoned pro or a beginner, our
							collection of adventure and outdoor gear and
							equipment has everything you need for your next
							outdoor sport escapade be it running, cycling,
							camping, trekking, hiking, mountaineering, swimming,
							surfing, safaris, we have you covered. Our range of
							products includes everything from cargos,
							convertiables, base layers, dry-fits, shorts,
							t-shirts, shirts, joggers, barefoot shoes, cycling
							bobs, jerseys, sleeping bags, and backpacks,
							sunglasses, hats, caps
						</p>
						<p className="mb-1.5 text-sm text-pretty text-lightTextColor font-OG-Regular">
							You can download our app “Outdoor Goats” from the
							play store and app store. This isn’t just an app or
							website where great brands are available, nor is it
							just a place to help customers find the right
							products. This is a platform where experts share
							experiences, sport tips, and create lasting
							friendships bonding over shared passions.
						</p>
					</div>
				</div>

				<div className="mb-3">
					<h3 className="text-base uppercase font-OG-Bold text-lightTextColor">
						Our Mission
					</h3>
					<p className="text-sm text-lightTextColor font-OG-Regular">
						Making your outdoor shopping easy by connecting
						customers and brands with passionate experts.
					</p>
				</div>

				<div className="mb-3">
					<h3 className="text-base uppercase font-OG-Bold text-lightTextColor">
						AT OUTDOOR GOATS WE BELIEVE IN
					</h3>
					<p className="text-sm text-lightTextColor font-OG-Regular">
						Making your outdoor shopping easy by connecting
						customers and brands with passionate experts.
					</p>
				</div>

				<div className="flex flex-row gap-2 my-10">
					<div className="basis-[33%]">
						<div className="flex flex-row gap-2 mb-4">
							<img
								className="size-[30px]"
								src={images.community}
								alt=""
							/>
							<p className="text-lightTextColor font-OG-Bold ">
								People
							</p>
						</div>
						<p className="text-sm text-lightTextColor font-OG-Regular">
							We’re only as good as our community. We work hard to
							maintain a strong community of empathetic and expert
							and outdoor enthusiasts.
						</p>
					</div>
					<div className="basis-[33%]">
						<div className="flex flex-row gap-2 mb-4">
							<img
								className="size-[30px]"
								src={images.product}
								alt=""
							/>
							<p className="text-lightTextColor font-OG-Bold ">
								Product
							</p>
						</div>
						<p className="text-sm text-lightTextColor font-OG-Regular">
							Shopping on OutdoorGoats is about finding the right
							product for you. Experts and the community give
							thoughtful guidance and recommend the products that
							best meet your needs.
						</p>
					</div>
					<div className="basis-[33%]">
						<div className="flex flex-row gap-2 mb-4">
							<img
								className="size-[30px]"
								src={images.partners}
								alt=""
							/>
							<p className="text-lightTextColor font-OG-Bold ">
								Passion
							</p>
						</div>
						<p className="text-sm text-lightTextColor font-OG-Regular">
							Our model works because of the passion that experts
							and the community bring. Whether it is how to
							improve your technique or Products recommended -
							everything helps customers to discover and deepen
							their passions.
						</p>
					</div>
				</div>
			</div>

			{/* footer open */}
			<DownloadApp />
			<Footer />
			{/* footer close */}
		</div>
	);
};

export default AboutUsPage;
