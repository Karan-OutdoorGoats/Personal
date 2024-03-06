import DownloadApp from "components/DownloadApp/download-app";
import Footer from "components/Footer/Footer";
import MainHeader from "components/MainHeader/main-header";
import NavBar from "components/NavBar/navbar";
import NavBarMemu from "pages/home/components/mobile/nav-bar-menu";
import NavBarContainer from "pages/home/components/nav-bar-container";
import React, { useState } from "react";

const BrandPartnerPolicyPage = () => {
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
							Brand partner policy
						</h1>
					</div>

					<div className="columns">
						<div className="column main">
							<div>
								<div>
									<h4 className="mb-2 text-base font-OG-Medium text-lightTextColor">
										UPDATED: 2 April 2023
									</h4>
									<p className="my-2 text-sm text-lightTextColor font-OG-Regular">
										This Brand Partner Policy (“Policy”),
										along with the specific memorandum of
										understanding (“MOU”) entered between
										Wild Country Private Limited, its
										subsidiaries and affiliates (together
										referred to as the “Company”) and a
										Brand Partner on the Platform (“BP”) and
										the Business Process Guidelines that may
										be furnished by the Company from time to
										time to you (“BPG”), which lays out the
										guidelines and specifications that will
										apply to the Products listed on the
										Platform from time to time (this Policy,
										the MOU and the BPG (where applicable)
										are together referred to as the
										“Agreement Documents”), governs the
										terms and conditions on which the Brand
										Partner sells goods and services
										(“Products”) on “[www.outdoorgoats.com]”
										(“Website”) and the mobile application
										“OutdoorGoats” (“App”) (the Website and
										App are collectively referred to as
										“Platform”, which term includes all
										products, services, goods, content and
										software available on the Platform).
										This document is an electronic record in
										terms of the Information Technology Act,
										2000 and rules made thereunder and as
										the same may be amended from time to
										time. Being a system generated
										electronic record, it does not require
										any physical or digital signature. The
										Platform is owned by Wild Country
										Private Limited a company incorporated
										under the Companies Act, 1956 with its
										registered office at A-2, Floor Ground,
										Plot 281-A, Adinath Apartment, Javaji
										Dadaji Marg, Mumbai – 400 007,
										Maharashtra. INDIA
									</p>
									<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
										Acceptance of the Agreement Documents
									</h2>
									<ul className="my-2 mb-4 ml-10 list-disc">
										<li className="text-sm text-lightTextColor font-OG-Regular">
											{" "}
											This Policy is to be read with the
											remaining Agreement Documents. This
											Policy read with the other Agreement
											Documents, constitute a binding and
											enforceable legal contract between
											the Company and the Brand Partner,
											in relation to the sale of the
											Products on the Platform.
										</li>{" "}
										<li className="text-sm text-lightTextColor font-OG-Regular">
											By executing the MOU, the Brand
											Partner is deemed to have read,
											understood, and to be bound by the
											Agreement Documents as amended from
											time to time.
										</li>{" "}
										<li className="text-sm text-lightTextColor font-OG-Regular">
											The Brand Partner will be subject to
											the rules, guidelines, policies,
											terms, and conditions applicable to
											the Platform, which shall be deemed
											to be incorporated into the
											Agreement Documents and shall be
											considered as part and parcel of the
											Agreed Documents. We reserve the
											right, at our sole discretion, to
											change, modify, add or remove
											portions of this Policy, at any time
											without any prior written notice.
											The responsibility to review this
											Policy periodically for updates/
											changes lies with the Brand Partner.
										</li>
									</ul>
									<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
										Brand registration
									</h2>
									<ul className="my-2 mb-4 ml-10 list-disc">
										<li className="text-sm text-lightTextColor font-OG-Regular">
											The Company’s mission is to curate,
											offer and deliver quality products
											to its users and customers, and
											follows a strict policy to curtail
											display and sale of any unlicensed,
											unauthorized and counterfeit
											products through the Platform. The
											Brand Partner confirms that it is
											the legal owner or authorised seller
											for all Products listed on their
											behalf on the Platform. Accordingly,
											the Brand Partner will ensure that
											relevant trademarks (as applicable)
											are applied for or registered (and
											if registered, such registration is
											maintained throughout the Term of
											the Agreement Documents) with the
											applicable Trade Marks Registry of
											India, before the Products are
											listed/displayed on the Platform.
											The Company however reserves its
											right and discretion to permit the
											Brand Partner to display and list
											the Products without bearing any
											Brand Partner trademarks, provided
											that the same shall be at the sole
											responsibility and liability of the
											Brand Partner.
										</li>{" "}
										<li className="text-sm text-lightTextColor font-OG-Regular">
											The Brand Partner hereby agrees to
											indemnify the Company from and
											against any and all liability
											arising upon the Company for breach
											of Clause 2.1(a). The Brand Partner
											hereby expressly agrees that (i) any
											waiver by the Company or (ii)
											permitting the Brand Partner to list
											the Products on the Platform without
											the Brand Partner Trademarks shall
											not absolve the Brand Partner from
											the foregoing indemnity obligation.
										</li>{" "}
										<li className="text-sm text-lightTextColor font-OG-Regular">
											The Company agrees that it will not
											alter the Brand Partner Trademarks
											(except if required to re-size them
											to the extent necessary for
											presentation thereof on the
											Platform, so long as the relative
											proportions of Brand Partner
											Trademarks remain the same) and will
											comply with Brand Partner’s
											requests, if any, to remove specific
											trademarks of the Brand Partner.
										</li>
									</ul>
									<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
										Proprietary Rights
									</h2>
									<ul className="my-2 mb-4 ml-10 list-disc">
										<li className="text-sm text-lightTextColor font-OG-Regular">
											The Company represents, warrants,
											undertakes, affirms and confirms
											that it is the owner or
											appropriately licensed user of all
											intellectual property rights
											including without limitation any and
											all patent, copyright, trademarks,
											moral rights, design rights,
											database rights, trade names,
											service marks and other proprietary
											rights of the Platform.
										</li>{" "}
										<li className="text-sm text-lightTextColor font-OG-Regular">
											The Brand Partner represents,
											warrants, undertakes, affirms and
											confirms that it is the owner or
											appropriately licensed user of all
											intellectual property rights
											including without limitation any and
											all patent, copyright, trademarks,
											moral rights, design rights,
											database rights, trade names,
											service marks and other proprietary
											rights of the Products sold by them
											and any other material.
										</li>{" "}
										<li className="text-sm text-lightTextColor font-OG-Regular">
											{" "}
											The Brand Partner has granted the
											Company a royalty free non-exclusive
											license to use all such intellectual
											property for the purposes as may be
											deemed necessary for selling these
											Products.
										</li>{" "}
										<li className="text-sm text-lightTextColor font-OG-Regular">
											{" "}
											The Brand Partner acknowledges,
											confirms and affirms that all
											intellectual property rights over
											the Platform and all incidental
											access thereto and therefrom vest
											solely in the Company and the Brand
											Partner shall have no right over any
											such intellectual property.
										</li>
									</ul>
									<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
										Representations and Warranties
									</h2>
									<ul className="my-2 mb-4 ml-10 list-disc">
										<li className="text-sm text-lightTextColor font-OG-Regular">
											Mutual Representations and
											Warranties: Each Party hereby
											represents and warrants to the other
											Party that:
										</li>{" "}
										<ul className="my-2 mb-4 ml-10 list-disc">
											<li className="text-sm text-lightTextColor font-OG-Regular">
												it is duly organized, validly
												existing and in good standing
												under Applicable Laws;
											</li>{" "}
											<li className="text-sm text-lightTextColor font-OG-Regular">
												it has all requisite right,
												power and authority to enter
												into the Agreement Documents and
												agree to the terms of the
												Agreement Documents and perform
												its obligations and grant the
												rights, licenses and
												authorizations thereunder and
												hereunder;
											</li>{" "}
											<li className="text-sm text-lightTextColor font-OG-Regular">
												the execution, delivery, and
												performance of the Agreement
												Documents, will not conflict
												with or breach, and will not
												violate or cause a default
												under, any agreement, contract
												or instrument to which it is a
												party;
											</li>{" "}
											<li className="text-sm text-lightTextColor font-OG-Regular">
												{" "}
												all statements made as
												representations and warranties
												herein and in the remaining
												Agreement Documents are true and
												accurate and do not omit or fail
												to state anything that renders
												such representations or
												warranties misleading;
											</li>{" "}
											<li className="text-sm text-lightTextColor font-OG-Regular">
												there are no actions, suits or
												proceedings, commenced or
												threatened against it before any
												court, board or governmental or
												administrative agency in any
												jurisdiction which would
												materially affect its ability to
												enter into Agreement Documents
												and to consummate the
												transactions contemplated
												thereby and hereby;
											</li>{" "}
											<li className="text-sm text-lightTextColor font-OG-Regular">
												it shall comply with Applicable
												Laws at all times in its
												performance thereunder and
												hereunder; and
											</li>{" "}
											<li className="text-sm text-lightTextColor font-OG-Regular">
												it shall dutifully perform all
												covenants of the Agreement
												Documents in letter and spirit
												and shall otherwise always act
												with due diligence and in good
												faith and shall take all
												necessary steps to give full
												effect to the provisions of the
												Agreement Documents and the
												transactions contemplated
												therein and herein.
											</li>
										</ul>
										<li className="text-sm text-lightTextColor font-OG-Regular">
											Brand Partner Representations and
											Warranties: The Brand Partner hereby
											represents and warrants to the
											Company that:
										</li>{" "}
										<ul className="my-2 mb-4 ml-10 list-disc">
											<li className="text-sm text-lightTextColor font-OG-Regular">
												it has read and understood all
												the contents of the Agreement
												Documents;
											</li>{" "}
											<li className="text-sm text-lightTextColor font-OG-Regular">
												{" "}
												all statements and
												representations made by it and
												all materials and information it
												has provided to the Company, are
												accurate and complete and that
												it has not made any
												misrepresentation or material
												omission to the Company;
											</li>{" "}
											<li className="text-sm text-lightTextColor font-OG-Regular">
												it has all the requisite
												approvals, registrations and
												licenses as required under
												applicable laws to undertake
												manufacturing and/or sale of the
												Product(s) hereunder;
											</li>{" "}
											<li className="text-sm text-lightTextColor font-OG-Regular">
												all product content provided by
												the Brand Partner shall be
												accurate and truthful and that
												the Brand Partner will promptly
												intimate the Company of any
												changes thereto and in the event
												there is any discrepancy in the
												same discovered by the
												user/customer on the Platform
												and/or by Company, the same will
												be at Brand Partner’s sole risk,
												liability and responsibility and
												Company will not be liable in
												any way whatsoever;
											</li>{" "}
											<li className="text-sm text-lightTextColor font-OG-Regular">
												it shall be solely responsible
												and liable for the condition,
												quality, quantity, description,
												and warranty pertaining to the
												sale of the Products;
											</li>{" "}
											<li className="text-sm text-lightTextColor font-OG-Regular">
												the Products, including its
												design, and product content
												provided by the Brand Partner
												will not infringe or violate the
												rights, including intellectual
												property rights, of any third
												party;
											</li>{" "}
											<li className="text-sm text-lightTextColor font-OG-Regular">
												the Products are original, new
												and unused, and shall not in any
												manner or form be counterfeit,
												duplicates, used, re-used or
												repurposed products;
											</li>{" "}
											<li className="text-sm text-lightTextColor font-OG-Regular">
												it has the right to permit the
												Company to post the Products and
												Product Content on the Platform
												and grant the a license as
												contemplated hereunder;
											</li>{" "}
											<li className="text-sm text-lightTextColor font-OG-Regular">
												all the Products listed for sale
												on the Platform are free from
												any and all encumbrance, lien,
												hypothecation, mortgage and
												charge;
											</li>{" "}
											<li className="text-sm text-lightTextColor font-OG-Regular">
												it will not violate or infringe
												the intellectual property rights
												of any other
												seller/vendor/merchants who are
												displaying their products on the
												Platform;
											</li>{" "}
											<li className="text-sm text-lightTextColor font-OG-Regular">
												it will be responsible for any
												and all Platform user/customer
												claims with respect to the
												Products;
											</li>{" "}
											<li className="text-sm text-lightTextColor font-OG-Regular">
												it will honour Company’s
												promotional schemes as offered
												from time to time on the
												Platform without any dispute or
												interference; and
											</li>{" "}
											<li className="text-sm text-lightTextColor font-OG-Regular">
												it will not misuse or dilute the
												Platform or Company’s brand in
												any way whatsoever so as to
												affect its goodwill or bring any
												disrepute thereto.
											</li>
										</ul>
										<li className="text-sm text-lightTextColor font-OG-Regular">
											Company Representations and
											Warranties: The Company hereby
											represents and warrants to the Brand
											Partner that:
										</li>{" "}
										<ul className="my-2 mb-4 ml-10 list-disc">
											<li className="text-sm text-lightTextColor font-OG-Regular">
												it will use the license only as
												permitted in the Agreement
												documents; and
											</li>{" "}
											<li className="text-sm text-lightTextColor font-OG-Regular">
												it has valid proprietary and
												intellectual property rights to
												the Platform;
											</li>{" "}
											<li className="text-sm text-lightTextColor font-OG-Regular">
												it has not violated or infringed
												the intellectual property rights
												of any person or entity, in
												operating the Platform;
											</li>{" "}
											<li className="text-sm text-lightTextColor font-OG-Regular">
												it has all the requisite
												approvals, registrations and
												licenses as required under
												applicable laws to operate the
												Platform and provide all the
												services offered to its
												customers thereunder;
											</li>
										</ul>
									</ul>
									<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
										Indemnification
									</h2>
									<ul className="my-2 mb-4 ml-10 list-disc">
										<li className="text-sm text-lightTextColor font-OG-Regular">
											Subject to Clause 8.3 below and
											without prejudice to any other terms
											and conditions and the obligations,
											duties and responsibilities that are
											contained in the Agreement
											Documents, the Brand Partner shall
											indemnify and hold harmless the
											Company, its shareholders,
											subsidiaries and any of their
											respective officers, employees,
											directors (“Indemnified Parties”)
											against all claims, costs, expenses,
											losses, damages, and liabilities
											(including third party liabilities)
											brought against or incurred or
											suffered by the Indemnified Parties,
											including, without prejudice to the
											generality of the foregoing, all
											reasonable costs and expenses which
											the Indemnified Parties may
											reasonably incur in defending any
											proceedings, arising due to:
										</li>{" "}
										<ul className="my-2 mb-4 ml-10 list-disc">
											<li className="text-sm text-lightTextColor font-OG-Regular">
												any breach of representations
												and warranties provided by the
												Brand Partner under the
												Agreement Documents;
											</li>{" "}
											<li className="text-sm text-lightTextColor font-OG-Regular">
												beach of any provisions of the
												Agreement Documents, whole or
												any part by the Brand Partner,
												including any deficiency in the
												Products sold pursuant to the
												Agreement Documents;
											</li>{" "}
											<li className="text-sm text-lightTextColor font-OG-Regular">
												any breach by the Brand Partner
												of the terms and conditions laid
												down in the Agreement Documents;
											</li>{" "}
											<li className="text-sm text-lightTextColor font-OG-Regular">
												any liability arising out of or
												in relation to or as a
												consequence of the Products sold
												by the Brand Partner on the
												Company’s Platform.
											</li>
										</ul>
										<li className="text-sm text-lightTextColor font-OG-Regular">
											In this regard, the Brand Partner
											hereby expressly authorises and
											empowers the Company to deduct or
											recover the entire costs, expenses,
											claims, losses, damages, and
											liabilities from the amount payable
											by the Company to the Brand Partner.
										</li>{" "}
										<li className="text-sm text-lightTextColor font-OG-Regular">
											Without prejudice to any other
											rights or remedies that the Company
											may have, the Brand Partner
											acknowledges and agrees that damages
											alone would not be an adequate
											remedy for any breach of the terms
											of the Agreement Documents by the
											Brand Partner. Accordingly, the
											Company shall be entitled to the
											remedies of injunction, specific
											performance or other equitable
											relief under applicable law, for any
											threatened or actual breach of the
											terms of the Agreement Documents.
										</li>
									</ul>
									<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
										Product Liability
									</h2>
									<ul className="my-2 mb-4 ml-10 list-disc">
										<li className="text-sm text-lightTextColor font-OG-Regular">
											It is hereby expressly agreed and
											acknowledged by the Brand Partner
											that any problem, issue, damage or
											defect, including manufacturing
											defect, relating to any of the
											Products will be to the sole account
											of the Brand Partner.
										</li>{" "}
										<li className="text-sm text-lightTextColor font-OG-Regular">
											Any and all risks, liabilities,
											consequences as well as expenses in
											relation to undertaking such
											replacement, packing/re-packing and
											delivery/re- packing will be to the
											sole account of the Brand Partner.
										</li>{" "}
										<li className="text-sm text-lightTextColor font-OG-Regular">
											The Brand Partner hereby agrees to
											indemnify the Company from and
											against any and all liability
											arising upon the Company for breach
											of this Clause 2.3 by the Brand
											Partner.
										</li>
									</ul>
									<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
										Miscellaneous
									</h2>
									<ul className="my-2 mb-4 ml-10 list-disc">
										<li className="text-sm text-lightTextColor font-OG-Regular">
											Assignment: The Brand Partner shall
											not assign any of their rights or
											delegate any of their duties under
											the Agreement Documents, without the
											prior written consent of the
											Company.
										</li>{" "}
										<li className="text-sm text-lightTextColor font-OG-Regular">
											Relationship of the Parties: Both
											Parties are acting as independent
											contractors and nothing in the
											Agreement Documents shall be
											constructed to create a relationship
											of agency, employment, partnership,
											franchise, joint venture or any
											other similar relationship between
											the parties.
										</li>{" "}
										<li className="text-sm text-lightTextColor font-OG-Regular">
											Waiver: The failure of either Party
											to enforce at any time or for any
											period of time, the provisions of
											the Agreement Documents in
											accordance with its terms, shall not
											be construed to be a waiver of such
											provisions or of the rights of such
											Party, to enforce each and such
											provision. A waiver shall not be
											valid and effective unless the same
											is in writing.
										</li>{" "}
										<li className="text-sm text-lightTextColor font-OG-Regular">
											Governing Law and Dispute
											Resolution: The interpretation and
											enforcement of the Agreement
											Documents shall be governed by the
											laws of India and jurisdiction shall
											be exclusively vested in the courts
											of Mumbai. Any dispute arising out
											of or in connection with the
											Agreement Documents, including any
											regarding its existence, validity or
											termination, shall be referred to
											and finally resolved by arbitration
											under the Arbitration and
											Conciliation Act, 1996 (“Rules”),
											which Rules are deemed to be
											incorporated by reference into this
											clause. The number of arbitrators
											shall be 1 (One). The seat, or legal
											place of arbitration shall be
											Mumbai. The language to be used in
											the arbitral proceedings shall be
											English.
										</li>
									</ul>
								</div>
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

export default BrandPartnerPolicyPage;
