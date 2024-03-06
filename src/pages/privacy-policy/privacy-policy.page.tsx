import OutlineArrowUpIcon from "assets/svg/components/OutlineArrowUpIcon";
import Footer from "components/Footer/Footer";
import MainHeader from "components/MainHeader/main-header";
import NavBar from "components/NavBar/navbar";
import NavBarMemu from "pages/home/components/mobile/nav-bar-menu";
import NavBarContainer from "pages/home/components/nav-bar-container";
import React, { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const PrivacyPolicyPage = () => {
	const [showMenuViaHam, setShowMenuViaHam] = useState(false);
	const location = useLocation();
	// const history = useHis;

	const pathList = useMemo(() => {
		return location.pathname.split("/");
	}, [location.pathname]);

	console.log(location);

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

			<div className="px-5 my-3 sm:px-10">
				<div
					data-content-type="text"
					data-appearance="default"
					data-element="main"
				>
					<h2 className="mb-4 text-2xl font-OG-Bold text-lightTextColor">
						Privacy Policy
					</h2>
					<p className="text-sm font-OG-Regular">
						This Privacy Policy (“Policy”) outlines the practices of
						Wild Country India Private Limited and its subsidiaries
						and affiliates (hereafter “Wild Country”, “Outdoor
						Goats”, “we”, “us”, or “our”) in relation to the
						storage, use, processing, and disclosure of personal
						data that you have chosen to share with us when you
						access our website and app or personal data that we may
						have access to in relation to your use of the website at
						www.outdoorgoats.com (“Website”) and the mobile
						application “Outdoor Goats” (“App”). &nbsp;The Website
						and App are collectively referred to as “Platform”,
						which term includes all content, software, services, and
						products available on the Platform.
					</p>
					<p className="text-sm font-OG-Regular">
						Outdoor Goats is a brand of Wild Country Private Limited
						with all relevant trademarks (in process with the
						applicable Indian Trademarks Registry).
					</p>
					<p className="text-sm font-OG-Regular">
						At Outdoor Goats, we are committed to protecting your
						personal data and respecting your privacy. Please read
						the following terms of the Policy carefully to
						understand our practices regarding your personal data
						and how we will treat it. This Policy sets out the basis
						on which any personal data we collect from or about you,
						or that you provide to us, will be processed by us.
					</p>
					<p className="text-sm font-OG-Regular">
						Capitalised words in the Policy shall have the same
						meaning ascribed to them as in the Terms and Conditions
						(“Terms”), available at
						https://www.outdoorgoats.com/terms-of-use. Please read
						this Policy in consonance with the Terms.
					</p>
					<p className="my-2 text-sm font-OG-Regular">
						<strong>1.&nbsp; THE DATA WE COLLECT ABOUT YOU</strong>
					</p>
					<ol
						className="pl-12 sm:pl-20 "
						style={{ listStyleType: "lower-alpha" }}
					>
						<li
							className="text-sm font-OG-Regular text-lightTextColor"
							style={{ listStyleType: "none" }}
						>
							<ol style={{ listStyleType: "lower-alpha" }}>
								<li className="text-sm font-OG-Regular text-lightTextColor">
									Personal data, or personal information,
									means any information about an individual
									from which that person can be identified. It
									does not include data where the identity has
									been removed (for example, anonymised data)
								</li>{" "}
								<li className="text-sm font-OG-Regular text-lightTextColor">
									We may collect, use, store and transfer
									different kinds of personal data about you
									to provide you with or in connection with
									the Platform. Such personal data includes:{" "}
									<ol
										className="pl-10"
										style={{ listStyleType: "lower-roman" }}
									>
										<li className="text-sm font-OG-Regular text-lightTextColor">
											Identity and profile-related data:
											This includes data pertaining to
											your identity, such as your first
											and last name, gender, date of
											birth, title, feedback, survey
											responses, etc.;
										</li>{" "}
										<li className="text-sm font-OG-Regular text-lightTextColor">
											Contact data: This includes contact
											details, including email addresses,
											phone numbers, business addresses,
											etc.;
										</li>{" "}
										<li className="text-sm font-OG-Regular text-lightTextColor">
											Basic account and use information:
											This includes details like your
											username, password, and use
											information such as your activity on
											the Platform (including date, time,
											and geo-location information;
										</li>{" "}
										<li className="text-sm font-OG-Regular text-lightTextColor">
											Content you share: This includes the
											photos. Videos, reviews and blogs
											you choose to upload, stories, and
											posts you share, comments, wish
											lists, tags, mentions and when you
											collaborate with brand partnerships;
										</li>{" "}
										<li className="text-sm font-OG-Regular text-lightTextColor">
											Technical and device data: This
											includes technical data, including
											IP addresses, browser types and
											versions, time zone settings and
											locations, operating systems, and
											other technology on the devices you
											use to access the Platform;
										</li>{" "}
										<li className="text-sm font-OG-Regular text-lightTextColor">
											Usage data: This includes
											information about how you use our
											Platform and your activity on the
											Platform, time spent on the
											Platform, page views, and links you
											click on the Platform;
										</li>{" "}
										<li className="text-sm font-OG-Regular text-lightTextColor">
											Communications data: This includes
											details such as the Metadata and
											other personal Information we get
											from communications done through
											e-mails, SMS, instant messages and
											calls;
										</li>{" "}
										<li className="text-sm font-OG-Regular text-lightTextColor">
											Marketing data: This includes
											marketing and communications data,
											including your preferences in
											receiving marketing messages from us
											and third parties and your
											communication preferences; and
										</li>{" "}
										<li className="text-sm font-OG-Regular text-lightTextColor">
											Location data: This includes
											location information.
										</li>
									</ol>
								</li>{" "}
								<li className="text-sm font-OG-Regular text-lightTextColor">
									We also collect, use, and share aggregated
									data such as statistical or demographic data
									for any purpose. Aggregated data could be
									derived from your personal data but is not
									considered personal data under applicable
									laws
								</li>{" "}
								<li className="text-sm font-OG-Regular text-lightTextColor">
									We do not collect any data about your race
									or ethnicity, religious or philosophical
									beliefs, sex life, sexual orientation,
									political opinions, trade union membership,
									information about your health and genetic
									data, or any information about criminal
									convictions and offences.
								</li>{" "}
								<li className="text-sm font-OG-Regular text-lightTextColor">
									We do not knowingly collect or process
									personal data of children. If you have any
									reason to believe that a child, without a
									parent or guardian’s consent has provided
									personal information, then please contact
									us, and we will use reasonable efforts to
									delete that information based on
									parent/guardian consent.
								</li>
							</ol>
						</li>
					</ol>
					<p className="my-2 text-sm font-OG-Regular">
						<strong>
							2.&nbsp; HOW DO WE COLLECT DATA ABOUT YOU?
						</strong>
					</p>
					<ol className="pl-12 sm:pl-20 ">
						<li
							className="text-sm font-OG-Regular text-lightTextColor"
							style={{ listStyleType: "none" }}
						>
							<ol style={{ listStyleType: "lower-alpha" }}>
								<li className="text-sm font-OG-Regular text-lightTextColor">
									We use different methods to collect and
									process data about you.{" "}
									<ol
										className="pl-10"
										style={{ listStyleType: "lower-roman" }}
									>
										<li className="text-sm font-OG-Regular text-lightTextColor">
											Information you give us: This is the
											information (including identity,
											contact, and marketing and
											communications data) you consent to
											giving us about you when you contact
											us through our Platform. If you
											contact us, create an account with
											us, and use our services, we will
											keep a record of the information
											shared during the correspondence.
										</li>{" "}
										<li className="text-sm font-OG-Regular text-lightTextColor">
											Information we collect about you and
											your device: Each time you visit and
											interact with our Platform, we
											automatically collect computer
											metadata, technical data such as
											browsing actions and patterns
											through the use of cookies, log
											files, analytics information, and
											other similar technologies to
											provide, improve, and maintain our
											Platform and your preferences. We
											may also receive technical data
											about you if you visit other
											websites and platforms that employ
											our cookies.
										</li>{" "}
										<li className="text-sm font-OG-Regular text-lightTextColor">
											Information we receive from other
											sources including third parties and
											publicly available sources: We will
											receive personal data about you from
											various third parties and public
											sources as set out below:{" "}
											<ul>
												<li className="text-sm font-OG-Regular text-lightTextColor">
													analytics providers such as
													Google, Facebook, etc.;
												</li>{" "}
												<li className="text-sm font-OG-Regular text-lightTextColor">
													advertising networks;
												</li>{" "}
												<li className="text-sm font-OG-Regular text-lightTextColor">
													search information
													providers;
												</li>{" "}
												<li className="text-sm font-OG-Regular text-lightTextColor">
													identity and contact data
													from publicly available
													sources.
												</li>
											</ul>
										</li>
									</ol>
								</li>
							</ol>
						</li>
					</ol>
					<p className="my-2 text-sm font-OG-Regular">
						<strong>
							3. &nbsp;HOW DO WE USE AND DISCLOSE DATA WE COLLECT?
						</strong>
					</p>
					<ol className="pl-12 sm:pl-20 ">
						<li
							className="text-sm font-OG-Regular text-lightTextColor"
							style={{ listStyleType: "none" }}
						>
							<ol style={{ listStyleType: "lower-alpha" }}>
								<li className="text-sm font-OG-Regular text-lightTextColor">
									We will only use your personal data when the
									law allows us to. Most commonly, we will use
									your personal data to provide you with the
									various features within the Platform, or
									where we need to comply with a legal
									obligation. We will also use your personal
									information to take and handle orders,
									deliver products and services, process
									payments, and communicate with you about
									orders, products and services, and
									promotional offers.
								</li>{" "}
								<li className="text-sm font-OG-Regular text-lightTextColor">
									You understand that when you consent to
									providing us with your personal data, you
									also consent to us sharing the same with
									third parties for improving our business and
									delivery related processes. You are aware
									that by using our Platform, you authorise
									us, our associate partners, and affiliates
									to contact you via email, phone, or
									otherwise.
								</li>{" "}
								<li className="text-sm font-OG-Regular text-lightTextColor">
									You are aware that any and all information
									pertaining to you, whether or not you
									directly provide to us (via the Platform or
									otherwise), including but not limited to
									personal correspondence such as emails,
									instructions from you etc., may be
									collected, compiled, and shared by us in
									order to render the Platform to you and you
									expressly authorise us to do so. This
									ability to share information may include but
									not be limited to sellers, storage
									providers, payment system providers,
									marketing partners, data analytics
									providers, and consultants, lawyers, and
									auditors. We may also share this information
									with our parent company, subsidiaries, and
									affiliates.
								</li>{" "}
								<li className="text-sm font-OG-Regular text-lightTextColor">
									You agree and acknowledge that we may share
									data without your consent when it is
									required by law or by any court or
									government agency or authority to disclose
									such information. Such disclosures are made
									in good faith and belief that it is
									reasonably necessary to do so for enforcing
									this Policy or the Terms, or in order to
									comply with any applicable laws and
									regulations.
								</li>{" "}
								<li className="text-sm font-OG-Regular text-lightTextColor">
									Where applicable laws permit us to, we rely
									on your consent as a ground to process your
									personal data.
								</li>{" "}
								<li className="text-sm font-OG-Regular text-lightTextColor">
									We will only use your personal data for the
									purposes for which we collected it, unless
									we reasonably consider that we need to use
									it for another reason and that reason is
									compatible with the original purpose. If you
									wish to get an explanation as to how the
									processing for the new purpose is compatible
									with the original purpose, please contact
									us. If we need to use your personal data for
									an unrelated purpose, we will notify you and
									we will explain the legal basis which allows
									us to do so.
								</li>{" "}
								<li className="text-sm font-OG-Regular text-lightTextColor">
									Please note that we may process your
									personal data without your knowledge or
									consent, in compliance with the rules above
									where this is required or permitted by law.
								</li>{" "}
								<li className="text-sm font-OG-Regular text-lightTextColor">
									In general, we will not disclose personal
									data except in accordance with the following
									purposes:{" "}
									<ol
										className="pl-10"
										style={{ listStyleType: "lower-roman" }}
									>
										<li className="text-sm font-OG-Regular text-lightTextColor">
											To provide and improve our services
											including our customer services to
											you based on the information and
											feedback we receive from you;
										</li>{" "}
										<li className="text-sm font-OG-Regular text-lightTextColor">
											To personalize your experience with
											us further so as to better respond
											to your individual needs;
										</li>{" "}
										<li className="text-sm font-OG-Regular text-lightTextColor">
											To manage our relationship with you
											including notifying you of changes
											to our Platform;
										</li>{" "}
										<li className="text-sm font-OG-Regular text-lightTextColor">
											To administer and protect our
											business and the Platform including
											troubleshooting, data analysis and
											system testing;
										</li>{" "}
										<li className="text-sm font-OG-Regular text-lightTextColor">
											To deliver orders, content, periodic
											emails and advertisements to you;
										</li>{" "}
										<li className="text-sm font-OG-Regular text-lightTextColor">
											To make recommendations to you about
											goods or services which may interest
											you;
										</li>{" "}
										<li className="text-sm font-OG-Regular text-lightTextColor">
											To measure and analyse the
											effectiveness of the advertising we
											serve you;
										</li>{" "}
										<li className="text-sm font-OG-Regular text-lightTextColor">
											To monitor trends so we can improve
											the Platform;
										</li>{" "}
										<li className="text-sm font-OG-Regular text-lightTextColor">
											To perform our obligations that
											arise out of the arrangement we are
											about to enter or have entered with
											you;
										</li>{" "}
										<li className="text-sm font-OG-Regular text-lightTextColor">
											To enforce our Terms; and
										</li>{" "}
										<li className="text-sm font-OG-Regular text-lightTextColor">
											To comply with a legal or regulatory
											obligation.
										</li>
									</ol>
								</li>
							</ol>
						</li>
					</ol>
					<p className="my-2 text-sm font-OG-Regular">
						<strong>
							4.&nbsp; TRANSFER OF PERSONAL DATA&nbsp;
						</strong>
					</p>
					<ol className="pl-12 sm:pl-20 ">
						<li
							className="text-sm font-OG-Regular text-lightTextColor"
							style={{ listStyleType: "none" }}
						>
							<ol style={{ listStyleType: "lower-alpha" }}>
								<li className="text-sm font-OG-Regular text-lightTextColor">
									As a part of your use of the Platform, the
									information, and personal data you provide
									to us may be transferred to and stored at
									countries other than India. This may happen
									if any of our servers are from time to time
									located in a country other than India, or
									one of our service providers is located in a
									country other than India. We may also share
									information with entities in countries other
									than India. These entities shall be subject
									to data laws of their respective countries.
								</li>{" "}
								<li className="text-sm font-OG-Regular text-lightTextColor">
									If you use the Platform while you are
									outside India, your information may be
									transferred to a country other than India in
									order to provide you with the Platform.
								</li>{" "}
								<li className="text-sm font-OG-Regular text-lightTextColor">
									By submitting your information and personal
									data to us, you agree to the transfer,
									storage, and processing of such information
									and personal data outside India in the
									manner described above.
								</li>
							</ol>
						</li>
					</ol>
					<p className="my-2 text-sm font-OG-Regular">
						<strong>5.&nbsp; THIRD PARTY SERVICES</strong>
					</p>
					<ol className="pl-12 sm:pl-20 ">
						<li
							className="text-sm font-OG-Regular text-lightTextColor"
							style={{ listStyleType: "none" }}
						>
							<ol style={{ listStyleType: "lower-alpha" }}>
								<li className="text-sm font-OG-Regular text-lightTextColor">
									The Platform may, from time to time, contain
									services provided by or links to and from
									the websites of our partner networks,
									advertisers, sellers and affiliates (“Third
									Party Services”). Please note that the
									Third-Party Services that may be accessible
									through our Platform have their own privacy
									policies. We do not accept any
									responsibility or liability for the policies
									or for any personal data that may be
									collected through the Third-Party Services.
									Please check their policies before you
									submit any personal data to such websites or
									use their services.
								</li>{" "}
								<li className="text-sm font-OG-Regular text-lightTextColor">
									We may use third-party user experience
									improvement services (including but not
									limited to those provided by Google Inc.
									and/or its affiliates) and applications to
									better understand your behavior on the
									Platform.
								</li>{" "}
								<li className="text-sm font-OG-Regular text-lightTextColor">
									Your relationship with these third parties
									and their services and tools is independent
									of your relationship with us. These third
									parties may allow you to permit or restrict
									the information that is collected. It may be
									in your interest to individually restrict or
									enable such data collections.
								</li>{" "}
								<li className="text-sm font-OG-Regular text-lightTextColor">
									The place of processing information depends
									on each third-party service provider, and
									you may wish to check the privacy policy of
									each of the service providers to identify
									the data shared and its purpose. You will be
									subject to a third party’s privacy policy if
									you opt in to receive communications from
									third parties. We will not be responsible
									for the privacy standards and practices of
									third parties.
								</li>
							</ol>
						</li>
					</ol>
					<p className="my-2 text-sm font-OG-Regular">
						<strong>6.&nbsp; COOKIES &nbsp;</strong>
					</p>
					<ol className="pl-12 sm:pl-20 ">
						<li
							className="text-sm font-OG-Regular text-lightTextColor"
							style={{ listStyleType: "none" }}
						>
							<ol style={{ listStyleType: "lower-alpha" }}>
								<li className="text-sm font-OG-Regular text-lightTextColor">
									Cookies are small data files that a site or
									its service provider transfers to your
									computer’s hard drive through your web
									browser (if you allow) that enables the site
									or service providers’ systems to recognise
									your browser and capture and remember
									certain information.
								</li>{" "}
								<li className="text-sm font-OG-Regular text-lightTextColor">
									We use cookies to help us understand and
									save your preferences for future visits,
									keep track of advertisements (including
									interest-based advertisements), and compile
									aggregate data about site traffic and site
									interaction so that we can offer better site
									experiences and tools in the future. We may
									contact third-party service providers to
									assist us in better understanding our site
									visitors. These service providers are not
									permitted to use the information collected
									on our behalf except to help us conduct and
									improve our business.
								</li>{" "}
								<li className="text-sm font-OG-Regular text-lightTextColor">
									Additionally, you may encounter cookies or
									other similar devices on certain pages of
									the Platform that are placed by third
									parties. We do not control the use of
									cookies by third parties. If you send us
									personal correspondence, such as emails or
									letters, or if other users or third parties
									send us correspondence about your activities
									in relation to the Platform, we may collect
									such information into a file specific to
									you.
								</li>{" "}
								<li className="text-sm font-OG-Regular text-lightTextColor">
									We use the following cookies:{" "}
									<ol
										style={{ listStyleType: "lower-roman" }}
									>
										<li className="text-sm font-OG-Regular text-lightTextColor">
											Essential Cookies. These cookies are
											sometimes called “strictly
											necessary” cookies and are required
											for the operation of our Platform.
											They include, for example, cookies
											that enable you to log into secure
											areas of our Platform or make use of
											e-billing services.
										</li>{" "}
										<li className="text-sm font-OG-Regular text-lightTextColor">
											Analytical or Performance Cookies.
											These allow us to recognise and
											count the number of visitors and to
											see how visitors move around our
											Platform when they are using it.
											This helps us to improve the way our
											Platform works, for example, by
											ensuring that users are finding what
											they are looking for easily.
										</li>{" "}
										<li className="text-sm font-OG-Regular text-lightTextColor">
											Functionality Cookies. These are
											used to recognise you when you
											return to our Platform. This enables
											us to personalise our content for
											you, greet you by name, and remember
											your preferences (for example, your
											choice of language).
										</li>{" "}
										<li className="text-sm font-OG-Regular text-lightTextColor">
											Targeting Cookies. These cookies
											record your visit to our Platform,
											the pages you have visited and the
											links you have followed. We will use
											this information to make our
											Platform and the advertising
											displayed on it, more relevant to
											your interests.
										</li>{" "}
										<li className="text-sm font-OG-Regular text-lightTextColor">
											Third Party Cookies. Please note
											that the following third parties may
											also use cookies, over which we have
											no control. These named third
											parties may include, for example,
											advertising networks and providers
											of external services like web
											traffic analysis services. These
											Third-Party cookies are likely to be
											performance cookies or targeting
											cookies.
										</li>
									</ol>
								</li>{" "}
								<li className="text-sm font-OG-Regular text-lightTextColor">
									<span style={{ color: "#333333" }}>
										You can block cookies by activating the
										setting on your browser that permits you
										to refuse the setting of all or some
										cookies. However, if you use your
										browser settings to block all cookies
										(including essential cookies), you may
										not be able to access all or parts of
										our Services.
									</span>
								</li>
							</ol>
						</li>
					</ol>
					<p className="my-2 text-sm font-OG-Regular">
						<strong>
							7.&nbsp; DISCLOSURES OF YOUR PERSONAL DATA
						</strong>
					</p>
					<ol className="pl-12 sm:pl-20 ">
						<li
							className="text-sm font-OG-Regular text-lightTextColor"
							style={{ listStyleType: "none" }}
						>
							<ol style={{ listStyleType: "lower-alpha" }}>
								<li className="text-sm font-OG-Regular text-lightTextColor">
									We do not share, sell, trade, or otherwise
									transfer to any third parties or allow third
									party to access your personally identifiable
									information. However, we may share your
									personal data with third parties set out
									below for the purposes set out in Section 3:{" "}
									<ol
										style={{ listStyleType: "lower-roman" }}
									>
										<li className="text-sm font-OG-Regular text-lightTextColor">
											Internal third parties, which are
											other companies within the Wild
											Country group of companies.
										</li>{" "}
										<li className="text-sm font-OG-Regular text-lightTextColor">
											External third parties such as:{" "}
											<ul>
												<li className="text-sm font-OG-Regular text-lightTextColor">
													trusted third parties who
													assist us in operating our
													Platform, conducting our
													business, or servicing you,
													so long as those parties
													agree to keep this
													information confidential;
												</li>{" "}
												<li className="text-sm font-OG-Regular text-lightTextColor">
													analytic service providers
													to gather non-personal data
													and to help us improve our
													Services. These analytics
													providers may use cookies
													and other technologies to
													perform their services, and
													may combine the information
													they collect about you on
													our Platform, like when you
													visit site page, click on
													the page, most purchased
													product, most searched
													terms; and
												</li>{" "}
												<li className="text-sm font-OG-Regular text-lightTextColor">
													regulators and other bodies,
													as required by law or
													regulation.
												</li>
											</ul>
										</li>
									</ol>
								</li>{" "}
								<li className="text-sm font-OG-Regular text-lightTextColor">
									<span style={{ color: "#333333" }}>
										Third parties to whom we may choose to
										sell, transfer, or merge parts of our
										business or our assets. Alternatively,
										we may seek to acquire other businesses
										or merge with them. If our business
										undergoes a change, then the new owners
										will use your personal data in the
										manner set out in this Policy.
									</span>
								</li>{" "}
								<li className="text-sm font-OG-Regular text-lightTextColor">
									We require all third parties to respect the
									security of your personal data and to treat
									it in accordance with the law. We do not
									allow our third-party service providers to
									use your personal data for their own
									purposes and only permit them to process
									your personal data for specified purposes
									and in accordance with our instructions.
								</li>
							</ol>
						</li>
					</ol>
					<p className="my-2 text-sm font-OG-Regular">
						<strong>8.&nbsp; DATA SECURITY&nbsp;</strong>
					</p>
					<ol className="pl-12 sm:pl-20 ">
						<li
							className="text-sm font-OG-Regular text-lightTextColor"
							style={{ listStyleType: "none" }}
						>
							<ol style={{ listStyleType: "lower-alpha" }}>
								<li className="text-sm font-OG-Regular text-lightTextColor">
									We implement certain security measures
									including encryption, firewalls, and socket
									layer technology to protect your personal
									information from unauthorised access.
								</li>{" "}
								<li className="text-sm font-OG-Regular text-lightTextColor">
									However, you agree and acknowledge that the
									abovementioned measures do not guarantee
									absolute protection to the personal
									information and by accessing the Platform,
									you agree to assume all risks associated
									with disclosure of personal information
									arising due to breach of firewalls and
									secure server software.
								</li>{" "}
								<li className="text-sm font-OG-Regular text-lightTextColor">
									We will comply with the requirements under
									the Information Technology Act, 2000 and the
									rules made thereunder in the event of a data
									or security risk.
								</li>
							</ol>
						</li>
					</ol>
					<p className="my-2 text-sm font-OG-Regular">
						<strong>9.&nbsp; DATA RETENTION &nbsp;</strong>
					</p>
					<p className="pl-10 text-sm sm:pl-16 font-OG-Regular">
						You are aware that your personal data will continue to
						be stored and retained by us for a reasonable period
						after we accomplish the purpose for which it was
						collected and/or after the expiry or termination of the
						Terms and this Policy in compliance with the applicable
						laws.
					</p>
					<p className="text-sm font-OG-Regular">&nbsp;</p>
					<p className="my-2 text-sm font-OG-Regular">
						<strong>10.&nbsp; BUSINESS TRANSITIONS</strong>
					</p>
					<p className="pl-10 text-sm sm:pl-16 font-OG-Regular">
						You are aware that in the event we go through a business
						transition, such as a merger, acquisition by another
						organisation, or sale of all or a portion of our assets,
						your personal data might be among the assets
						transferred.
					</p>
					<p className="text-sm font-OG-Regular">&nbsp;</p>
					<p className="my-2 text-sm font-OG-Regular">
						<strong>11.&nbsp; CHANGE IN PRIVACY POLICY</strong>
					</p>
					<ol className="pl-12 sm:pl-20 ">
						<li
							className="text-sm font-OG-Regular text-lightTextColor"
							style={{ listStyleType: "none" }}
						>
							<ol style={{ listStyleType: "lower-alpha" }}>
								<li className="text-sm font-OG-Regular text-lightTextColor">
									We keep our Policy under regular review and
									may amend this Policy from time to time, at
									our sole discretion.
								</li>{" "}
								<li className="text-sm font-OG-Regular text-lightTextColor">
									The terms of this Policy may change and if
									it does, these changes will be posted on
									this page and, where appropriate, notified
									to you by email. Please ensure that you
									review this Policy regularly
								</li>
							</ol>
						</li>
					</ol>
					<p className="my-2 text-sm font-OG-Regular">
						<strong>12.&nbsp; DISCLAIMERS</strong>
					</p>
					<p className="pl-10 text-sm sm:pl-16 font-OG-Regular">
						Please be aware that personal identifiable information,
						such as your name or e-mail address, that you
						voluntarily disclose and that is accessible to other
						users (for example, on social media, forums, bulletin
						boards, or in chat areas) could be collected and
						disclosed by others. We will not be responsible for such
						collection and disclosure.
					</p>
					<p className="my-2 text-sm font-OG-Regular">
						<strong>13.&nbsp; GRIEVANCE OFFICER</strong>
					</p>
					<p className="pl-10 text-sm sm:pl-16 font-OG-Regular">
						You may contact us at with any enquiry relating to this
						Policy or an enquiry relating to your personal
						information (including reviewing or updating). You can
						also do so by writing to our Grievance Officer at the
						address provided below:
					</p>
					<p className="my-2 text-sm font-OG-Regular">
						Name: Joanne Fernandes
					</p>
					<p className="text-sm font-OG-Regular">
						Email Address: joanne@outdoorgoats.com
					</p>
				</div>
			</div>

			{/* footer open */}
			<Footer />
			{/* footer close */}
		</div>
	);
};

export default PrivacyPolicyPage;
