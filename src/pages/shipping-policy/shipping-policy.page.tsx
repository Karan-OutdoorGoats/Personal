import DownloadApp from "components/DownloadApp/download-app";
import Footer from "components/Footer/Footer";
import MainHeader from "components/MainHeader/main-header";
import NavBar from "components/NavBar/navbar";
import NavBarMemu from "pages/home/components/mobile/nav-bar-menu";
import NavBarContainer from "pages/home/components/nav-bar-container";
import React, { useState } from "react";

const ShippingPolicyPage = () => {
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

			<div className="px-5 my-10 sm:px-14">
				<main id="maincontent" className="page-main">
					<a id="contentarea" tabIndex={-1} />
					<div className="page-title-wrapper">
						<h1 className="mb-2 text-2xl font-OG-Bold text-lightTextColor">
							Shipping Policy
						</h1>
					</div>

					<div className="columns">
						<div className="column main">
							<div
								data-content-type="html"
								data-appearance="default"
								data-element="main"
								data-decoded="true"
							>
								<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
									What is our shipping and delivery process?
								</h2>
								<ul className="my-2 mb-4 ml-10 list-disc">
									<li className="text-sm text-lightTextColor font-OG-Regular">
										Once you have completed placing your
										order on our Platform, you will receive
										an order confirmation on your registered
										email and phone number.
									</li>{" "}
									<li className="text-sm text-lightTextColor font-OG-Regular">
										The order confirmation will contain the
										order number, estimated date of delivery
										and payment details.
									</li>{" "}
									<li className="text-sm text-lightTextColor font-OG-Regular">
										Once your order is confirmed by us, your
										products are inspected thoroughly to
										ensure they meet OutdoorGoats’s product
										quality standards.
									</li>{" "}
									<li className="text-sm text-lightTextColor font-OG-Regular">
										After they pass through the final round
										of quality check, they are packed,
										adhering to OutdoorGoats’s packaging
										standards and handed over to our trusted
										delivery partner.
									</li>{" "}
									<li className="text-sm text-lightTextColor font-OG-Regular">
										Our delivery partners then bring the
										package to you at the earliest. In case,
										they are unable to reach your provided
										address or at a suitable time, they will
										contact you to resolve the issue.
									</li>{" "}
									<li className="text-sm text-lightTextColor font-OG-Regular">
										International Shipping – OutdoorGoats
										does not currently ship outside India.
									</li>
								</ul>
								<h2>
									What is the range of locations to which
									OutdoorGoats ships their products?
								</h2>
								<ul className="my-2 mb-4 ml-10 list-disc">
									<li className="text-sm text-lightTextColor font-OG-Regular">
										OutdoorGoats currently ships throughout
										India. Further, we are working on
										enabling international shipping soon.
									</li>
								</ul>
								<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
									Can you check if your delivery address is
									serviceable by us?
								</h2>
								<ul className="my-2 mb-4 ml-10 list-disc">
									<li className="text-sm text-lightTextColor font-OG-Regular">
										If you want to know whether your area is
										serviceable or not, kindly check your
										pin-code on the product page before
										placing your order.
									</li>
								</ul>
								<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
									How are the products packaged?
								</h2>
								<ul className="my-2 mb-4 ml-10 list-disc">
									<li className="text-sm text-lightTextColor font-OG-Regular">
										We package our products in boxes or
										bags, which will bear OutdoorGoats
										branding.
									</li>
								</ul>
								<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
									Where do you receive order confirmation?
								</h2>
								<ul className="my-2 mb-4 ml-10 list-disc">
									<li className="text-sm text-lightTextColor font-OG-Regular">
										After placing your order, you will
										receive a confirmation message on your
										registered email and phone number.
									</li>
								</ul>
								<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
									How can you track your order, once shipped?
								</h2>
								<ul className="my-2 mb-4 ml-10 list-disc">
									<li className="text-sm text-lightTextColor font-OG-Regular">
										All your orders can be tracked from the
										profile section on our app or website.
										In case of any queries please contact us
										here (linked form). You can check the
										status of your package through the
										'Track' button on the 'My Orders'
										section.
									</li>
								</ul>
								<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
									What is the estimated delivery time?
								</h2>
								<ul className="my-2 mb-4 ml-10 list-disc">
									<li className="text-sm text-lightTextColor font-OG-Regular">
										We usually dispatch most orders within 2
										to 7 business days (excluding Sundays
										and public holidays). In situations
										beyond OutdoorGoats’s control, there may
										be circumstances which cause a delay. In
										such cases, OutdoorGoats will ensure
										delivery in the earliest possible
										timeframe.
									</li>
								</ul>
								<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
									Are there any shipping charges applicable on
									your order?
								</h2>
								<ul className="my-2 mb-4 ml-10 list-disc">
									<li className="text-sm text-lightTextColor font-OG-Regular">
										Shipping charges may be applicable on
										your orders depending on order value.
										The total charges for shipping (if
										applicable) will be visible on your cart
										page for you to review before placing
										the order.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</main>
			</div>

			{/* footer open */}
			<DownloadApp />
			<Footer />
			{/* footer close */}
		</div>
	);
};

export default ShippingPolicyPage;
