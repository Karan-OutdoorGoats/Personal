import DownloadApp from "components/DownloadApp/download-app";
import Footer from "components/Footer/Footer";
import MainHeader from "components/MainHeader/main-header";
import NavBar from "components/NavBar/navbar";
import NavBarMemu from "pages/home/components/mobile/nav-bar-menu";
import NavBarContainer from "pages/home/components/nav-bar-container";
import React, { useState } from "react";

const TermsConditionsPage = () => {
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
				<div className="privacy-policy cms-content">
					<h1 className="mb-2 text-2xl font-OG-Bold text-lightTextColor">
						Terms And Conditions
					</h1>
					<p className="my-2 text-sm text-lightTextColor font-OG-Regular">
						{" "}
						These Terms and Conditions (“Terms”) govern the use of
						www.outdoorgoats.com (“Website”) and the mobile
						application “OutdoorGoats” (“App”) (the Website and App
						are collectively referred to as “Platform”, which term
						includes all content, software, services, and products
						available on the Platform). These Terms include
						OutdoorGoats (hereinafter referred to as “OutdoorGoats”)
						privacy policy, available at
						https://www.outdoorgoats.com/terms-conditions/ (“Privacy
						Policy”) and any guidelines, additional terms, policies,
						or disclaimers made available by or issued by
						OutdoorGoats from time to time. This document is an
						electronic record in terms of the Information Technology
						Act, 2000 and rules made thereunder and as the same may
						be amended from time to time. Being a system generated
						electronic record, it does not require any physical or
						digital signature. The Platform is owned by [Wild
						Country Private Limited] a company incorporated under
						the Companies Act, 1956 with its registered office at
						A-2, Floor Ground, Plot 281-A, Adinath Apartment, Javaji
						Dadaji Marg Mumbai – 400 007
					</p>
					<h2 className="mb-2 text-base font-OG-Bold text-lightTextColor">
						ACCEPTANCE OF THE TERMS
					</h2>
					<ul className="my-2 ml-10 list-disc">
						<li className="text-sm text-lightTextColor font-OG-Regular">
							These Terms constitute a binding and enforceable
							legal contract between Wild Country Private Limited
							and its affiliates (collectively referred to as
							“OutdoorGoats”, “Wild Country”, “we”, “us”, or
							“our”) and you, an end user of the Platform (“you”
							or “User”) in relation to the use of the Platform.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							By using the Services, you agree that you have read,
							understood, and to be bound by these Terms as
							amended from time to time, and that you comply with
							the requirements listed herein. If you do not agree
							to all of these Terms or comply with the
							requirements herein, please do not access or use the
							Platform or any features or content made available
							on or through the Platform.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							When you access the Platform and/or use the
							Services, you will be subject to the rules,
							guidelines, policies, terms, and conditions
							applicable to the Platform and the Service, and they
							shall be deemed to be incorporated into these Terms
							and shall be considered as part and parcel of these
							Terms. We reserve the right, at our sole discretion,
							to change, modify, add or remove portions of these
							Terms, at any time without any prior written notice
							to you. It is your responsibility to review these
							Terms periodically for updates / changes.
						</li>
					</ul>
					<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
						SERVICES
					</h2>
					<p className="mb-2 text-sm text-lightTextColor font-OG-Regular">
						OutdoorGoats provides you with a Platform which gives
						you access to the following services that are provided
						through the Platform, products, applications, and
						plug-ins (collectively referred to as Services”):
					</p>
					<ul className="my-2 mb-4 ml-10 list-disc">
						<li className="text-sm text-lightTextColor font-OG-Regular">
							Marketplace: platform where Users will have access
							to multiple brands, covering multiple categories and
							multiple products, which you can review and
							purchase;
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							Tribe: group creation for discussions;
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							Explore: digital content creation and publication,
							and social media engagement with other Users.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							Profiling athletes specialized in specific sports
							for better access to information regarding the sport
							of their specialisation
						</li>
					</ul>
					<p className="my-2 text-sm text-lightTextColor font-OG-Regular">
						These Terms govern all the products and services offered
						on the Platform.
						<br /> The Platform is only to be used for your personal
						non-commercial use and information.
					</p>
					<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
						ELIGIBILITY
					</h2>
					<ul className="my-2 mb-4 ml-10 list-disc">
						<li className="text-sm text-lightTextColor font-OG-Regular">
							The Services are intended solely for persons who are
							at least 18 years old and who can form legally
							binding contracts under Indian Contract Act, 1872.
							If you are under this legal age to form a binding
							contract, you represent that your parent or legal
							guardian has reviewed and agreed to these Terms on
							your behalf.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							{" "}
							OutdoorGoats reserves the right to terminate your
							membership and / or refuse to provide you with
							access to the Platform if it is brought to
							OutdoorGoats’s notice or if it is discovered that
							you are under the age of 18 years and transacting on
							the Platform.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							OutdoorGoats also reserves the right to refuse
							access to the Platform to any person who is in
							violation of Indian law or international treatises,
							persons of unsound mind and any other person that
							OutdoorGoats deems unfit to access the Platform.
						</li>
					</ul>
					<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
						LICENSE
					</h2>
					<ul className="my-2 mb-4 ml-10 list-disc">
						<li className="text-sm text-lightTextColor font-OG-Regular">
							OutdoorGoats grants you a revocable, non-exclusive,
							non-transferable, non-sub licensable and limited
							license to use the Platform for your personal,
							non-commercial, and informational purposes only.
							This license does not include any right of resale,
							assignment or sub-license or any other rights not
							expressly granted by these Terms. No license or
							right is hereby granted by implication.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							{" "}
							We license the use of the Platform to you on the
							basis of these Terms and subject to any additional
							rules or policies applied by the Google Android
							application store or the Apple Store from whose
							sites, located at https://play.google.com/store/apps
							or https://www.apple.com/in/app-store/ respectively,
							the App is downloaded.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							Except for the license set forth in this Clause 4,
							the Terms do not transfer any OutdoorGoats or third
							party intellectual property to you, and all rights,
							title and interest in and to such property,
							including, without limitation, the Platform, will
							remain solely with OutdoorGoats. The OutdoorGoats
							trademarks and logos, and all other trademarks,
							service marks, graphics and logos used in connection
							with OutdoorGoats or the Platform are trademarks or
							registered trademarks of OutdoorGoats’s licensors.
							Other trademarks, service marks, graphics and logos
							used in connection with the Platform or any content
							available on the Platform may be the trademarks of
							third parties. Use of the Platform does not grant
							you any right or license to reproduce or otherwise
							use any OutdoorGoats or third-party trademarks.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							You agree and warrant that you shall not reproduce
							any content available on the Platform in any manner
							without the prior express written consent of
							OutdoorGoats.
						</li>
					</ul>
					<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
						USER ACCOUNTS
					</h2>
					<ul className="my-2 mb-4 ml-10 list-disc">
						<li className="text-sm text-lightTextColor font-OG-Regular">
							You will have to create and operate an account on
							the Platform (“User Account”). Should you choose to
							operate the Platform without a User Account, all the
							features of the Platform may not be available to
							you. You are required to provide complete and
							accurate information to OutdoorGoats while creating
							your User Account(s) and for use of the Platform
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							You are solely responsible for maintaining the
							confidentiality of your User Account and password,
							use of the Platform and for restricting access to
							your device. You are responsible for all activities
							that occur under your account, password or on your
							device. We are not liable for any loss or damages
							that may arise from your failure to ensure the
							aforesaid confidentiality.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							You are further responsible for ensuring that all
							information you provide on our Platform is true,
							correct, current, and complete. You agree not to
							provide any false or misleading information in
							connection with your User Account or the use of the
							Platform.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							{" "}
							Your mobile phone number and/or e-mail address is
							treated as your primary identifier on the Platform.
							It is your responsibility to ensure that your mobile
							phone number and your email address is up to date on
							the Platform at all times. You agree to notify us
							promptly if your mobile phone number or e-mail
							address changes by updating the same on the Platform
							through a onetime password verification.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							We endeavour to use reasonable security measures to
							protect against unauthorized access to your User
							Account. We cannot, however, guarantee absolute
							security of your User Account, your User Content (as
							defined below) or the personal information you
							provide or store on the Platform, and we cannot
							promise that our security measures will prevent
							third-party “hackers” from illegally accessing the
							Platform and/or Services. You agree to immediately
							notify OutdoorGoats of any unauthorized use of your
							User Account or password, or any other breach of
							security, and confirm that you understand all risks
							of unauthorized access to any information or content
							you provide to OutdoorGoats.
						</li>
					</ul>
					<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
						PLATFORM TRANSACTIONS AND COMMUNICATIONS
					</h2>
					<ul className="my-2 mb-4 ml-10 list-disc">
						<li className="text-sm text-lightTextColor font-OG-Regular">
							Our Platform is a platform that Users utilize to
							meet and interact with one another, form communities
							and make purchases from our curated selection of
							outdoor products including but not limited to
							clothing, gear and accessories.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							An order placed by a User on the Platform is an
							‘offer to buy’ the product(s) stated in the order
							made by the User and it shall not be construed as
							OutdoorGoats’s acceptance of the User’s offer to buy
							the product(s) ordered. OutdoorGoats shall retain
							the right to cancel any such order placed by the
							User, at its sole discretion and the User shall be
							intimated of the same by way of an email/ SMS/ any
							other mode of electronic communication. Any
							transaction price paid by User in case of such
							cancellation, shall be refunded to the User within
							reasonable time.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							On the occasion that Users and individual sellers or
							experts interact with each other or enter into an
							arrangement outside of the Platform, OutdoorGoats
							will not be responsible for any non-performance or
							breach of any contract/arrangement entered into
							between the Users and sellers in this regard.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							OutdoorGoats may charge a nominal fee for browsing
							and buying on the Platform. OutdoorGoats may at its
							sole discretion introduce new services and modify
							some or all of the existing services offered on the
							Platform, in which case OutdoorGoats reserves the
							right to introduce new or modify existing fees in
							this context. Unless otherwise stated, all fees
							shall be quoted in Indian Rupees. You shall be
							solely responsible for compliance of all applicable
							laws including those in India for making payments to
							OutdoorGoats.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							Manufacturing Defects and Liability
						</li>{" "}
						<p className="my-2 text-sm text-lightTextColor font-OG-Regular">
							Please note that OutdoorGoats is in no manner
							responsible for any manufacturing defects, errors or
							side-effects from the products or services. The
							manufacturer or service provider of the product or
							service shall be solely responsible for such
							defects, side effects and consumer complaints. You
							should carefully read the individual terms and
							conditions, product details and other information
							about the brand products and services and in case
							required, consult a specialist before the use of any
							of these products or services.
						</p>
						<li className="text-sm text-lightTextColor font-OG-Regular">
							Product and Service Description on the Platform
						</li>{" "}
						<ul className="my-2 mb-4 ml-10 list-disc">
							<li className="text-sm text-lightTextColor font-OG-Regular">
								OutdoorGoats attempts to be as accurate as
								possible in the description of the product or
								service on the Platform. However, OutdoorGoats
								does not warrant that the product or service
								description, colour, information or other
								content of the Platform is accurate, complete,
								reliable, current or error-free. The Platform
								may contain typographical errors or inaccuracies
								and may not be complete or current. The product
								pictures are indicative and may not match the
								actual product.
							</li>{" "}
							<li className="text-sm text-lightTextColor font-OG-Regular">
								OutdoorGoats reserves the right to correct,
								change or update information, errors,
								inaccuracies or omissions at any time (including
								after an order has been submitted) without prior
								notice. Please note that such errors,
								inaccuracies or omissions may also relate to
								pricing and availability of the product or
								services.
							</li>{" "}
							<li className="text-sm text-lightTextColor font-OG-Regular">
								if a product or service offered on the Platform
								is not as described, your sole remedy is to
								return it in an unused condition as per our
								Returns &amp; Exchange policy identified in
								these Terms./li&gt;{" "}
							</li>
							<li className="text-sm text-lightTextColor font-OG-Regular">
								{" "}
								Also, any recommendation made to you on the
								Platform during the course of your use of the
								Platform is purely for informational purposes
								and for your convenience and does not amount to
								endorsement of the product or services by
								OutdoorGoats or any of its associates in any
								manner.
							</li>
						</ul>
					</ul>
					<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
						USER CONTENT
					</h2>
					<ul className="my-2 mb-4 ml-10 list-disc">
						<li className="text-sm text-lightTextColor font-OG-Regular">
							{" "}
							Our Platform (including without limitation in
							relation to the products and services offered on the
							Platform) may contain interactive features or
							services that allow Users who have created a User
							Account with us or Users availing of the Services
							without a User Account, to post, upload, publish,
							display, transmit, or submit comments, reviews,
							audio clips, photographs, graphics, videos,
							messages, posts, blogs, reviews, tags, or other
							content or submit feedback on or through the
							Platform (“User Content”).
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							User Content will be treated as non-proprietary and
							non-confidential. By posting any User Content, you
							grant us a royalty-free, perpetual, irrevocable,
							world-wide, and sub-licensable license to access,
							copy, modify, adapt, reproduce, redistribute,
							publish, create derivative works from, compile,
							arrange, display, disclose, or otherwise make use of
							the User Content in any form, media, or technology,
							whether now known or hereafter developed, alone or
							as part of other works, for any purpose and in any
							way without due compensation to you
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							You understand and acknowledge that you are solely
							responsible for any User Content you post, and you
							have full responsibility for such submission,
							including its legality, reliability, accuracy, and
							appropriateness. We are not liable for the content
							or accuracy of any User Content posted by you or any
							other user.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							You may register for or log-in to your User Account
							via a third-party network, including but not limited
							to Facebook or Google. If you do so, you hereby
							authorize OutdoorGoats to pre-populate the
							registration and other relevant information fields
							of your account and/or to use such third-party
							credentials to log you into your account. If you
							connect your account to a third-party network, you
							agree to comply with the terms and conditions and
							policies applicable to such third party.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							{" "}
							Some User Content offered on the Platform may not be
							suitable for some viewers. Accordingly, viewer
							discretion is advised. Where relevant, parents or
							legal guardians are advised to exercise discretion
							before allowing their minor children and/ or wards
							access to User Content on the Platform.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							You may use our in-app system to report User Content
							that violates these Terms or applicable law.
							OutdoorGoats will acknowledge your complaint within
							72 working hours and take suitable action against
							such User Content as per these Terms and applicable
							law where it finds it appropriate, in its sole
							discretion, to do so.
						</li>
					</ul>
					<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
						YOUR RESPONSIBILITIES
					</h2>
					<ul className="my-2 mb-4 ml-10 list-disc">
						<li className="text-sm text-lightTextColor font-OG-Regular">
							You represent and warrant that:
						</li>{" "}
						<ul className="my-2 mb-4 ml-10 list-disc">
							<li className="text-sm text-lightTextColor font-OG-Regular">
								you are legally permitted to transact and
								operate on the Platform;
							</li>{" "}
							<li className="text-sm text-lightTextColor font-OG-Regular">
								you are solely responsible for all activities
								(including in relation to User Content) that
								occur on or through your User Account on the
								Platform;
							</li>{" "}
							<li className="text-sm text-lightTextColor font-OG-Regular">
								you shall not engage in any activity that
								corrupts, interferes with or disrupts access to
								the Platform;
							</li>{" "}
							<li className="text-sm text-lightTextColor font-OG-Regular">
								you shall not attempt to gain unauthorised
								access to any portion or feature of the
								Platform, any other systems or networks
								connected to the Platform, to any of our
								servers, or through the Platform, by hacking,
								password mining, or any other illegitimate
								means;
							</li>{" "}
							<li className="text-sm text-lightTextColor font-OG-Regular">
								{" "}
								you own all intellectual property rights (or
								have obtained all necessary permissions) to
								provide User Content and to grant the licences
								under these Terms;
							</li>{" "}
							<li className="text-sm text-lightTextColor font-OG-Regular">
								the User Content does not and shall not violate
								any of your obligations or responsibilities
								under other agreements;
							</li>{" "}
							<li className="text-sm text-lightTextColor font-OG-Regular">
								the User Content does not and shall not violate,
								infringe, or misappropriate any intellectual
								property right or other proprietary right,
								including the right of publicity or privacy, of
								any person or entity;
							</li>{" "}
							<li className="text-sm text-lightTextColor font-OG-Regular">
								the User Content does not and shall not contain
								any viruses, corrupted data, or other harmful,
								disruptive, or destructive files or content;
							</li>{" "}
							<li className="text-sm text-lightTextColor font-OG-Regular">
								the User Content shall not violate any third
								party rights; and
							</li>{" "}
							<li className="text-sm text-lightTextColor font-OG-Regular">
								you shall not publish or make available User
								Content that is objectionable or restricts or
								inhibits any other person from using or enjoying
								the Services, or that may expose OutdoorGoats or
								others to any harm or liability of any type.
							</li>
						</ul>
						<li className="text-sm text-lightTextColor font-OG-Regular">
							You shall not use the Platform and Services in any
							manner except as expressly permitted in these Terms.
							Without limiting the generality of the preceding
							sentence, you shall not:
						</li>{" "}
						<ul className="my-2 mb-4 ml-10 list-disc">
							<li className="text-sm text-lightTextColor font-OG-Regular">
								infringe any proprietary rights, including but
								not limited to copyrights, patents, trademarks,
								or trade secrets, of any person, entity or party
								in general;
							</li>{" "}
							<li className="text-sm text-lightTextColor font-OG-Regular">
								except as may be provided hereunder, copy,
								display, distribute, modify, publish, reproduce,
								store, transmit, post, translate, create any
								derivative works, rent, or license the Platform
								or any portion thereof, or any other Services
								offered under these Terms;
							</li>{" "}
							<li className="text-sm text-lightTextColor font-OG-Regular">
								use the Services to transmit any data or send or
								upload any material that contains viruses,
								Trojan horses, worms, time-bombs, keystroke
								loggers, spyware, adware, or any other harmful
								programmes or similar computer code designed to
								adversely affect the operation of any computer
								software or hardware;
							</li>{" "}
							<li className="text-sm text-lightTextColor font-OG-Regular">
								use any robot, spider, other automated device,
								or manual process to monitor or copy the
								Services or any portion thereof other than
								copying or exporting as permitted by the Terms;
							</li>{" "}
							<li className="text-sm text-lightTextColor font-OG-Regular">
								probe, scan or test the vulnerability of the
								Platform or any network connected to the
								Platform nor breach the security or
								authentication measures on the Platform or any
								network connected to the Platform;
							</li>{" "}
							<li className="text-sm text-lightTextColor font-OG-Regular">
								make any back-up or archival copies of the
								Platform or any part thereof;
							</li>{" "}
							<li className="text-sm text-lightTextColor font-OG-Regular">
								engage in advertising to, or solicitation of,
								other Users of the Platform to buy or sell any
								products or services, including, but not limited
								to, products or services related to that being
								displayed on the Platform or related to us or
								the manufacturers/ distributors;
							</li>{" "}
							<li className="text-sm text-lightTextColor font-OG-Regular">
								use the Platform to host, display, upload,
								modify, publish, transmit, store, update, or
								share any information that (A) belongs to
								another person and to which you have no rights
								over, (B) is defamatory, obscene, pornographic,
								paedophilic, invasive of another person’s
								privacy, insulting or harassing, libellous,
								offensive to religious beliefs, racially or
								ethnically objectionable, relating or
								encouraging money laundering or gambling, or
								otherwise inconsistent with or contrary to the
								laws in force, (C) is harmful to children, (D)
								infringes any patent, trademark, copyright, or
								other proprietary rights, (E) deceives or
								misleads the addressee about the origin of the
								message or knowingly and intentionally
								communicates any information which is patently
								false or misleading in nature but may reasonably
								be perceived as a fact, (F) impersonates another
								person, (G) is patently false and untrue, and is
								written or published in any form, with the
								intent to mislead or harass a person, entity, or
								agency for financial gain or to cause any injury
								to any person;
							</li>{" "}
							<li className="text-sm text-lightTextColor font-OG-Regular">
								use the Platform in (A) any unlawful manner, (B)
								for fraudulent or malicious activities, or (C)
								in any manner inconsistent with these Terms; or
							</li>{" "}
							<li className="text-sm text-lightTextColor font-OG-Regular">
								violate applicable laws in any manner.
							</li>
						</ul>
						<li className="text-sm text-lightTextColor font-OG-Regular">
							We reserve the right, but not the obligation, to
							monitor the materials posted on the Platform.
							OutdoorGoats shall have the right to remove or edit
							any content (including User Content) that in its
							sole discretion violates, or is alleged to violate,
							any applicable law or either the spirit or letter of
							these Terms. Any User Content does not reflect
							OutdoorGoats’s views. In no event shall OutdoorGoats
							assume or have any responsibility or liability for
							any User Content posted or for any claims, damages
							or losses resulting from use of User Content and/or
							appearance of User Content on the Platform.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							You will extend all possible co-operation in
							relation to the Platform and/or Services as may be
							reasonably requested by OutdoorGoats from time to
							time.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							You shall obtain and maintain at your own expense
							all the necessary computer hardware, software,
							modems, connections to the internet, and other items
							required for the access to the internet and use of
							the Platform and/or Services by you.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							You are aware of applicable laws and regulations
							governing your use of the Platform and/or Services.
							You shall be solely responsible for ensuring
							compliance with the various applicable laws, and you
							shall be solely liable for any liability that may
							arise due to a breach of your obligations in this
							regard.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							You shall extend all cooperation, at your cost, to
							OutdoorGoats in its defence of any proceedings that
							may be initiated against it due to a breach of your
							obligations or covenants under these Terms.
						</li>
					</ul>
					<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
						PRODUCT PRICING AND DESCRIPTION
					</h2>
					<ul className="my-2 mb-4 ml-10 list-disc">
						<li className="text-sm text-lightTextColor font-OG-Regular">
							The price displayed on the Platform represents the
							full retail price listed for the products and
							services offered on the Platform.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							The list price is a comparative price estimate and
							may or may not represent the prevailing price in
							every area on any particular day. Where a product is
							offered for sale by us, the list price will be
							provided by us. In cases of mispriced products in
							our catalogues where a product’s correct price is
							higher than our listed price, we will, at our
							discretion, either contact you for instructions
							before shipping or cancel your order and notify you
							of such cancellation.
						</li>
					</ul>
					<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
						PAYMENTS
					</h2>
					<ul className="my-2 mb-4 ml-10 list-disc">
						<li className="text-sm text-lightTextColor font-OG-Regular">
							Payments for the products available on the Platform
							may be made in the following ways:
						</li>{" "}
						<ul className="my-2 mb-4 ml-10 list-disc">
							<li className="text-sm text-lightTextColor font-OG-Regular">
								Payments can be made by Credit Cards, Debit
								Cards, Net Banking using third party payment
								gateways; and
							</li>{" "}
							<li className="text-sm text-lightTextColor font-OG-Regular">
								Cash On Delivery option is available for select
								products on the Platform. Cash On Delivery
								option is not available for orders outside
								India. You will not open the product package
								without making the payment at the time of
								delivery. If opened as aforesaid, then the
								delivery will be deemed to be accepted by you
								and will not be eligible for cancellation,
								refund or exchange.
							</li>{" "}
							<li className="text-sm text-lightTextColor font-OG-Regular">
								Any refund requests made for items bought
								through Cash on Delivery option will be remitted
								back to users bank account or users OutdoorGoats
								wallet (on discretion of the user) and will not
								be in the form of a cash refund.
							</li>
						</ul>
						<li className="text-sm text-lightTextColor font-OG-Regular">
							While availing any of the payment method/s given
							access to you by the Platform, we will not be
							responsible or assume any liability, whatsoever in
							respect of any loss or damage arising directly or
							indirectly to you due to:
						</li>{" "}
						<ul className="my-2 mb-4 ml-10 list-disc">
							<li className="text-sm text-lightTextColor font-OG-Regular">
								Lack of authorization for any transaction(s), or
							</li>{" "}
							<li className="text-sm text-lightTextColor font-OG-Regular">
								Exceeding the pre-set limit mutually agreed by
								you and between the bank, or
							</li>{" "}
							<li className="text-sm text-lightTextColor font-OG-Regular">
								Any payment issues arising out of the
								transaction, or
							</li>{" "}
							<li className="text-sm text-lightTextColor font-OG-Regular">
								Decline of transaction for any other reason(s).
							</li>{" "}
							<p className="my-2 text-sm text-lightTextColor font-OG-Regular">
								Note: Please carefully read the terms and
								conditions of the payment gateway provider,
								before making any payments for the product or
								services available on our Platform.
							</p>
						</ul>
						<li className="text-sm text-lightTextColor font-OG-Regular">
							All payments made against the purchases/services on
							Platform by you (including refunds received by you,
							if any) shall be compulsorily in Indian Rupees
							acceptable in the Republic of India. Platform will
							not facilitate any transaction with respect to any
							other form of currency with respect to the purchases
							made on Platform.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							{" "}
							Before shipping / delivering your order to you, we
							may request you to provide supporting documents
							(including but not limited to a Government issued ID
							and address proof) to establish the ownership of the
							payment instrument used by you for your purchase.
							This is done in the interest of providing a safe
							online shopping environment to our Users.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							{" "}
							You specifically authorize OutdoorGoats or its
							service providers to collect, process, facilitate
							and remit payments and / or the Transaction Price
							electronically or through Cash on Delivery to and
							from other Users in respect of transactions through
							Payment Facility.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							You understand, accept and agree that the payment
							facility available for the Transaction is neither a
							banking nor financial service but is merely a
							facilitator providing an electronic, automated
							online electronic payment, receiving payment through
							Cash On Delivery, collection and remittance facility
							for the Transactions on the Platform using the
							existing authorized banking infrastructure and
							Credit Card payment gateway networks. Further, by
							providing Payment Facility, OutdoorGoats is neither
							acting as trustees nor acting in a fiduciary
							capacity with respect to the Transaction or the
							Transaction Price.
						</li>
					</ul>
					<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
						SHIPPING POLICY
					</h2>
					<ul className="my-2 mb-4 ml-10 list-disc">
						<li className="text-sm text-lightTextColor font-OG-Regular">
							Please refer to our Shipping Policy available{" "}
							<a href="#">here</a>
						</li>
					</ul>
					<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
						CANCELLATIONS
					</h2>
					<ul className="my-2 mb-4 ml-10 list-disc">
						<li className="text-sm text-lightTextColor font-OG-Regular">
							Please refer to our Cancellation Policy available{" "}
							<a href="#">here</a>
						</li>
					</ul>
					<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
						{" "}
						RETURNS AND EXCHANGE
					</h2>
					<ul className="my-2 mb-4 ml-10 list-disc">
						<li className="text-sm text-lightTextColor font-OG-Regular">
							Please refer to our Returns and Exchange Policy
							available <a href="#">here</a>
						</li>
					</ul>
					<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
						INTELLECTUAL PROPERTY
					</h2>
					<ul className="my-2 mb-4 ml-10 list-disc">
						<li className="text-sm text-lightTextColor font-OG-Regular">
							All rights, title, and interests in the Platform,
							and all intellectual property rights including
							trademarks, copyrights, patents, trade secrets,
							moral rights, and other related rights, associated
							with any ideas, concepts, techniques, inventions,
							processes, works of authorship, and confidential
							information, arising out of the Platform are owned
							by, or otherwise licensed to us.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							All product names, whether or not appearing with the
							trademark symbol, are trademarks that belong to us
							unless otherwise stated by us. The use or misuse of
							these trademarks or any other materials, except as
							permitted in these Terms, is expressly prohibited
							and may be in violation of copyright law, trademark
							law, and any other applicable law.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							The contents of this Platform are subject to
							copyright protection. The contents of the Platform
							may not be copied, recopied, reproduced, or
							otherwise redistributed. You should not copy,
							display, download, distribute, modify, reproduce,
							republish or retransmit any information, text or
							documents contained in this Platform or any portion
							thereof in any electronic medium or in hard copy, or
							create any derivative work based on such images,
							text or documents, without our express written
							consent or as otherwise permitted in these Terms.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							Except as stated in these Terms, nothing in these
							Terms should be construed as conferring any right in
							or license to our or any third party’s intellectual
							property rights.
						</li>
					</ul>
					<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
						THIRD PARTY SERVICES
					</h2>
					<ul className="my-2 mb-4 ml-10 list-disc">
						<li className="text-sm text-lightTextColor font-OG-Regular">
							{" "}
							The Platform may include services, content, and
							information owned, made available, or otherwise
							licensed by a third party (“Third Party Services”)
							or contain links to Third Party Services. This does
							not in any way constitute or imply OutdoorGoats’s
							endorsement, sponsorship or recommendation of such
							third party or their Third Party Services or any
							association and relationship between OutdoorGoats
							and those third parties. You understand that Third
							Party Services are the responsibility of the third
							party that created or provided it and acknowledge
							that the use of such Third Party Services is solely
							at your own risk.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							We make no representations and exclude all
							warranties and liabilities arising out of or
							pertaining to such Third Party Services, including
							their accuracy or completeness. You should carefully
							review the terms and conditions and privacy policies
							of all off-website pages and other websites that you
							visit via the Platform.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							All intellectual property rights in and to Third
							Party Services are the property of the respective
							third parties.
						</li>
					</ul>
					<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
						DISCLAIMERS AND WARRANTIES
					</h2>
					<ul className="my-2 mb-4 ml-10 list-disc">
						<li className="text-sm text-lightTextColor font-OG-Regular">
							Your use of the Platform is at your own risk. To the
							maximum extent permitted by applicable law, this
							Platform and the content available on it or through
							it are provided for your convenience on an “as is”,
							and “as available” basis.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							To the fullest extent permissible under applicable
							law, we expressly disclaim any warranties and
							conditions of any kind, whether, implied, or
							statutory, including, without limitation,
							merchantability, fitness for a particular purpose,
							accuracy, title, non-infringement of third-party
							rights, satisfactory quality, accuracy, title and
							non-infringement, compatibility, applicability,
							usability, appropriateness, and any warranties
							arising out of the use of our Platform.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							We do not guarantee that access to the Platform will
							be uninterrupted, or free from error, defect, loss,
							delay in operation, cyber-attacks, viruses,
							interference, hacking, malware, or other security
							intrusions, and we disclaim any liability relating
							thereto.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							{" "}
							To the fullest extent permitted by applicable law,
							we will not be liable for any indirect, special,
							punitive, incidental or consequential damages of any
							kind (including loss of profits) related to the
							Platform or your use thereof, regardless of the form
							of action whether in contract, tort (including
							negligence) or otherwise, even if we have been
							advised of the possibility of such damages and in no
							event shall our maximum aggregate liability (stated
							herein) exceed.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							We do not own, control, or endorse any User Content
							that is transmitted, stored, or processed via the
							Platform and/or Services. You are solely responsible
							for your User Content. OutdoorGoats does not
							recommend, endorse, or make any representation about
							the efficacy, appropriateness or suitability of any
							User Content that is made available through the
							Platform and/or Services and disclaims all
							liabilities or warranties arising out of or in
							connection with any User Content.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							OutdoorGoats does not exercise any editorial rights
							over any User Content or any other content that is
							made available through the Platform and/or Services.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							Subject to the other terms contained hereunder,
							OutdoorGoats reserves the right to remove or make
							unavailable User Content that is made available on
							or through the Platform and/or Services in
							accordance with the terms of these Terms,
							OutdoorGoats’s reasonable discretion, applicable
							law, and/or an order of a court or other judicial or
							administrative authority.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							There are no implied warranties, including any
							warranty of merchantability, non-infringement or
							fitness for a particular purpose, or otherwise,
							which extend beyond the description of the Platform
							and Services.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							{" "}
							You hereby accept full responsibility for any
							consequences that may arise from your use of the
							Platform and/or Services, and expressly agree and
							acknowledge that OutdoorGoats shall have absolutely
							no liability with respect to the same, including in
							connection with any physical injury that may be
							suffered from your use of the Platform, Services
							and/or any User Content.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							Notwithstanding anything to the contrary, the
							maximum aggregate liability of OutdoorGoats and its
							affiliates for any loss shall not exceed INR 5,000
							(Five Thousand).
						</li>
					</ul>
					<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
						INDEMNITY
					</h2>
					<p className="my-2 text-sm text-lightTextColor font-OG-Regular">
						You agree to indemnify and hold us harmless, and our
						affiliates, licensors, and their respective directors,
						officers, members, managers, employees, and agents from
						and against any and all claims and expenses arising out
						of the negligent or unlawful use of the Platform or
						against any claim, demand, lawsuits, judicial
						proceeding, losses, liabilities, damages and costs
						(including, without limitation, from all damages,
						liabilities, settlements, costs and attorneys’ fees), a
						breach of any provision of these Terms by you, or any
						third-party claim to the extent arising from or
						connected with an allegation that your use of the
						Platform in accordance with these Terms infringes the
						rights of a third party.
					</p>
					<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
						CONSENT TO USE DATA
					</h2>
					<ul className="my-2 mb-4 ml-10 list-disc">
						<li className="text-sm text-lightTextColor font-OG-Regular">
							You agree that OutdoorGoats may in accordance with
							its Privacy Policy collect and use your information
							and technical data and related information,
							including but not limited to technical information
							about your device, system and application software
							and peripherals, that is gathered periodically to
							facilitate the provision of Platform updates,
							product support, and other services to you (if any)
							related to the license granted under these Terms.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							{" "}
							OutdoorGoats reserves the right to utilise metadata
							(for example: usage statistics, access activity,
							etc.) in accordance with the Privacy Policy for
							internal purposes such as marketing, research,
							pricing, and technical or product development.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							You acknowledge that OutdoorGoats shall report cyber
							security incidents and share related information
							with the Indian Computer Emergency Response Team in
							accordance with the policies and procedures as
							mentioned in the Information Technology (The Indian
							Computer Emergency Response Team and Manner of
							Performing Functions and Duties) Rules, 2013.
						</li>
					</ul>
					<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
						CONFIDENTIALITY
					</h2>
					<p className="my-2 text-sm text-lightTextColor font-OG-Regular">
						You acknowledge that the Services contain OutdoorGoats’s
						and its licensors’ trade secrets and confidential
						information. You agree to hold and maintain the Services
						in confidence, and not to furnish any other person with
						a copy of the Services or Platform. You agree to use a
						reasonable degree of care to protect the confidentiality
						of the Services. You will not remove or alter any of
						OutdoorGoats’s or its licensors’ proprietary notices.
						Your obligations under this Clause continue even after
						these Terms have expired or been terminated.
					</p>
					<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
						FORCE MAJEURE
					</h2>
					<ul className="my-2 mb-4 ml-10 list-disc">
						<li className="text-sm text-lightTextColor font-OG-Regular">
							We shall be excused from our obligations hereunder
							in whole or in part to the extent its performance is
							delayed or prevented by strikes, work stoppages or
							disputes, fires, floods, war, riots, epidemics,
							pandemics, quarantines, curfews, non-availability or
							delays of transportation, accidents, compliance with
							and change in any laws, government orders,
							advisories, guidelines, rules, regulations,
							directions, and any other decisions of governments
							and relevant regulators restrictions, or any other
							cause beyond our control.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							In such circumstances our obligations hereunder
							shall be suspended for so long as any such
							contingency continues.
						</li>
					</ul>
					<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
						INDIA OPERATION
					</h2>
					<ul className="my-2 mb-4 ml-10 list-disc">
						<li className="text-sm text-lightTextColor font-OG-Regular">
							The Platform is controlled by OutdoorGoats from its
							offices within the Republic of India. OutdoorGoats
							makes no representation that the Platform or the
							content available on the Platform is appropriate or
							available for use in other locations. Access to or
							use of the Platform or the content available on the
							Platform from territories where such access or use
							is illegal is prohibited. Those who choose to access
							the Platform from locations outside of the Republic
							of India do so on their own initiative and are
							responsible for compliance with applicable local
							laws.
						</li>
					</ul>
					<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
						TERM AND TERMINATION
					</h2>
					<ul className="my-2 mb-4 ml-10 list-disc">
						<li className="text-sm text-lightTextColor font-OG-Regular">
							{" "}
							These Terms will remain in full force and effect as
							long as you continue to access or use our Platform
							and/or Services. We may, with or without prior
							notice, terminate any of the rights granted by these
							Terms without cause. You shall comply immediately
							with any termination or other notice, including, as
							applicable, by ceasing all use of the Platform.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							You agree that we may, in our sole discretion,
							suspend or terminate your use of your account on the
							Platform for any reason, including, without
							limitation, if we believe that you have violated or
							acted inconsistently with the letter or spirit of
							these Terms.
						</li>
					</ul>
					<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
						JURISDICTION, GOVERNING LAWS, AND DISPUTE RESOLUTION
					</h2>
					<ul className="my-2 mb-4 ml-10 list-disc">
						<li className="text-sm text-lightTextColor font-OG-Regular">
							{" "}
							These Terms shall be governed by and be construed
							and enforced in accordance with the laws of the
							Republic of India. Subject to other provisions in
							this Clause, courts in Mumbai shall have exclusive
							jurisdiction over all issues arising out of these
							Terms or the use of the Platform and/or Services.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							{" "}
							Any controversies, conflicts, disputes, or
							differences arising out of these Terms shall be
							resolved by arbitration in Mumbai in accordance with
							the Arbitration and Conciliation Act, 1996 for the
							time being in force, which is deemed to be
							incorporated by reference in this Clause. The
							tribunal shall consist of 1 (one) arbitrator
							appointed by OutdoorGoats. The language of the
							arbitration shall be English.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							The parties to the arbitration shall keep the
							arbitration confidential and not disclose to any
							person, other than on a need to basis, unless
							required to do so by law. The decision of the
							arbitrator shall be final and binding on all the
							Parties hereto.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							{" "}
							Each party to the arbitration shall bear its own
							costs with respect to any dispute.
						</li>
					</ul>
					<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
						MISCELLANEOUS
					</h2>
					<ul className="my-2 mb-4 ml-10 list-disc">
						<li className="text-sm text-lightTextColor font-OG-Regular">
							Modifications: We reserve the right to modify these
							Terms at any time and to add new or additional terms
							or conditions on your use of the Platform. Such
							modifications and additional terms and conditions
							will be communicated to you and, unless expressly
							rejected (in which case these Terms shall
							terminate), will be effective immediately and will
							be incorporated into these Terms. In the event you
							refuse to accept such changes, these Terms will
							terminate.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							Relationship: Nothing contained in these Terms
							creates any agency, partnership, or other form of
							joint enterprise between OutdoorGoats and you.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							Severability: If any provision of these Terms is
							determined by any court or other competent authority
							to be unlawful or unenforceable, the other
							provisions of these Terms will continue in effect.
							If any unlawful or unenforceable provision would be
							lawful or enforceable if part of it were deleted,
							that part will be deemed to be deleted, and the rest
							of the provision will continue in effect (unless
							that would contradict the clear intention of the
							clause, in which case the entirety of the relevant
							provision will be deemed to be deleted).
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							Notices: All notices, requests, demands, and
							determinations for us under these Terms (other than
							routine operational communications) shall be sent to
							A-2, Floor Ground, Plot 281-A, Adinath Apartment,
							Javaji Dadaji Marg, Mumbai – 400 007, Maharashtra,
							India.
						</li>{" "}
						<li className="text-sm text-lightTextColor font-OG-Regular">
							Third-Party Rights: No third party shall have any
							rights to enforce any terms contained herein.
						</li>
					</ul>
					<h2 className="my-3 text-base font-OG-Bold text-lightTextColor">
						GRIEVANCE OFFICER
					</h2>
					<p className="my-2 text-sm text-lightTextColor font-OG-Regular">
						You may contact us grievances@outdoorgoats.com
						<br /> Name: Joanne Fernandes
						<br /> Address: C/O Studio 8, The Business Quarter,
						Quorum Club. Lower Parel, Mumbai 400 013
						<br /> Email Address: grievances@outdoorgoats.com
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

export default TermsConditionsPage;
