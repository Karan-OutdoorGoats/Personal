import DownloadApp from "components/DownloadApp/download-app";
import Footer from "components/Footer/Footer";
import MainHeader from "components/MainHeader/main-header";
import NavBar from "components/NavBar/navbar";
import NavBarMemu from "pages/home/components/mobile/nav-bar-menu";
import NavBarContainer from "pages/home/components/nav-bar-container";
import React, { useState } from "react";

const ReturnExchangesPage = () => {
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
				<div
					data-content-type="text"
					data-appearance="default"
					data-element="main"
				>
					<h2 className="mb-2 text-2xl font-OG-Bold text-lightTextColor">
						Return and Exchanges
					</h2>
					<p className="my-2 text-sm text-lightTextColor font-OG-Bold">
						<strong>
							How do you return or exchange an item purchased on
							OutdoorGoats?
						</strong>
					</p>
					<p className="my-2 text-sm text-lightTextColor font-OG-Regular">
						OutdoorGoats offers its customers an ‘easy returns or
						exchange policy’, for products for which returns or
						exchange is permitted on the Platform. &nbsp;The return
						&amp; exchange filter each product page will clarify
						whether a product can be returned or exchanged.
						&nbsp;For products on which returns or exchange are
						permitted, you must raise a request by sending an email
						to customercare@outdoorgoats.com within a maximum period
						of 7 days of receipt of the product. If the order
						contains multiple items, you can make a request for the
						whole or the part of the order as well. Please see below
						for easy steps to be followed for returns or exchange:
					</p>
					<p className="my-2 text-sm text-lightTextColor font-OG-Regular">
						Once your return or exchange request is received, we
						will be responsible to pick up the item from you within
						3 to 7 working days from the date of your return/
						exchange request. We will initiate the refund or
						replacement process when:
					</p>
					<ol className="my-2 ml-10 list-decimal">
						<li className="my-1 text-sm text-lightTextColor font-OG-Regular">
							When you share an email with us on
							customercare@outdoorgoats.com within 7 days of
							receipt of the item(s)
						</li>{" "}
						<li className="my-1 text-sm text-lightTextColor font-OG-Regular">
							The products are eligible for returns or exchanges
							as per the product description on the Platform;
						</li>{" "}
						<li className="my-1 text-sm text-lightTextColor font-OG-Regular">
							Return / exchange request is raised with us within 7
							days of receipt;
						</li>{" "}
						<li className="my-1 text-sm text-lightTextColor font-OG-Regular">
							The products are received by us are unused and in
							their original packaging with their seals, labels
							and bar-codes intact, together with all components
							forming part of the product;
						</li>{" "}
						<li className="my-1 text-sm text-lightTextColor font-OG-Regular">
							Upon our verification of the returned product, we
							find that the product is intact, unused, unaltered,
							undamaged and not tampered with.
							<br />
							<br />
							Note: Fulfilment of an exchange request is subject
							to availability of stock. If there is no
							availability of stock, you will be eligible for a
							refund or have the ability to credit the amount to
							your wallet..
						</li>
					</ol>
					<h2 className="mt-4 mb-2 text-base font-OG-Bold text-lightTextColor">
						What categories of products are not eligible for
						returns/ exchange?
					</h2>
					<ol className="my-2 ml-10 list-decimal">
						<li className="my-1 text-sm text-lightTextColor font-OG-Regular">
							Where return &amp; exchange filter on product page
							does not permit returns or exchanges;
						</li>{" "}
						<li className="my-1 text-sm text-lightTextColor font-OG-Regular">
							Customized Products cannot be returned since they
							are ordered on demand;
						</li>{" "}
						<li className="my-1 text-sm text-lightTextColor font-OG-Regular">
							Any products that have been tampered with, has
							missing packaging or labelling or has been used
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							my-01Personal care products and undergarments&nbsp;
						</li>
					</ol>
					<h2 className="mb-2 text-base font-OG-Bold text-lightTextColor">
						What is the process for return/ replacement of damaged,
						defective or wrong product in my order?
					</h2>
					<p className="my-2 text-sm text-lightTextColor font-OG-Regular">
						Our shipments go through rigorous quality check
						processes before they leave the warehouse. However in
						the rare case that your product is damaged during
						shipment or transit, you can request for a replacement
						or cancellation and refund.
					</p>
					<p className="my-2 text-sm text-lightTextColor font-OG-Regular">
						You must raise a request by sending an email to
						customercare@outdoorgoats.com within a maximum period of
						7 days of receipt of the product. &nbsp;If the order
						contains multiple items, please make a request for the
						damaged item only. &nbsp;
					</p>
					<p className="my-2 text-sm text-lightTextColor font-OG-Regular">
						We will initiate the refund or replacement for the
						damaged item when:
					</p>
					<ol className="my-2 ml-10 list-decimal">
						<li className="my-1 text-sm text-lightTextColor font-OG-Regular">
							When you share an email with us on
							customercare@outdoorgoats.com within 7 days of
							receipt of the item(s)
						</li>{" "}
						<li className="my-1 text-sm text-lightTextColor font-OG-Regular">
							When you submit a video of unboxing the product
							clearly identifying the damaged part of the item
						</li>{" "}
						<li className="my-1 text-sm text-lightTextColor font-OG-Regular">
							Return / exchange request is raised with us within 7
							days of receipt;
						</li>{" "}
						<li className="my-1 text-sm text-lightTextColor font-OG-Regular">
							The products are received by us are unused and in
							their original packaging with their seals, labels
							and bar-codes intact, together with all components
							forming part of the product;
						</li>{" "}
						<li className="my-1 text-sm text-lightTextColor font-OG-Regular">
							Upon our verification of the returned product, we
							find that the product is intact, unused, unaltered,
							undamaged and not tampered with.
						</li>
					</ol>
					<h2 className="mb-2 text-base font-OG-Bold text-lightTextColor">
						Does a free gift have to be returned with the product?
					</h2>
					<p className="my-2 text-sm text-lightTextColor font-OG-Regular">
						Yes. The free gift is included as a part of the item
						order and needs to be returned along with the originally
						delivered product.
					</p>
					<p className="my-2 text-sm text-lightTextColor font-OG-Regular">
						&nbsp;
					</p>
					<h2 className="mb-2 text-base font-OG-Bold text-lightTextColor">
						How will I get refunded for the returned orders and how
						long will this process take?
					</h2>
					<ol className="my-2 ml-10 list-decimal">
						<li className="my-1 text-sm text-lightTextColor font-OG-Regular">
							For payments done through credit/debit cards or net
							banking, the refund will be processed to the same
							account from which the payment was made through the
							payments gateway, within 7 to 10 working days of us
							having received the products back. Here you also
							have an option of credited this amount to your
							wallet to be used in future purchases.
						</li>{" "}
						<li className="my-1 text-sm text-lightTextColor font-OG-Regular">
							For cash on delivery transactions, we will request
							your bank details including bank account number,
							IFSC code, Bank Name and Account holders name.
							&nbsp;A legal identity proof will have to be
							submitted at this time which must match with the
							name of the person who is on the initial
							order.&nbsp;
						</li>{" "}
						<li className="my-1 text-sm text-lightTextColor font-OG-Regular">
							For any payments made through your wallet, the
							amount will be credited back to your wallet only.
							<br />
							<br />
							The bank transfer will be completed within 7 to 10
							working days of us having received the products back
						</li>
					</ol>
					<h2 className="mb-2 text-base font-OG-Bold text-lightTextColor">
						Will you be entitled refund of shipping charges, if
						levied?
					</h2>
					<p className="mb-2 text-sm text-lightTextColor font-OG-Regular">
						In case of return of products for which shipping charges
						are applicable and paid by you, these shipping charges
						may not be refunded.
					</p>
					<p className="my-2 text-sm text-lightTextColor font-OG-Regular">
						&nbsp;
					</p>
					<h2 className="mb-2 text-base font-OG-Bold text-lightTextColor">
						How many times can I exchange or return an item?
					</h2>
					<p className="my-2 text-sm text-lightTextColor font-OG-Regular">
						You are entitled to one return or exchange once per
						order.
					</p>
					<p className="my-2 text-sm text-lightTextColor font-OG-Regular">
						&nbsp;
					</p>
				</div>
			</div>

			{/* footer open */}
			<DownloadApp />
			<Footer />
			{/* footer close */}
		</div>
	);
};

export default ReturnExchangesPage;
