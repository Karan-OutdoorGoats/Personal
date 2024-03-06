import AccountPage from "pages/account/account.page";
import Cart from "pages/cart/Cart.page";
import CheckoutPage from "pages/checkout/checkout.page";
import PaymentMethods from "pages/checkout/components/PaymentMethods";
import MobileShippingAddress from "pages/checkout/components/mobile/components/MobileShippingAddress";
import EditAccountInformation from "pages/edit-account-information/edit-account-information.page";
import OrderListPage from "pages/order-list/order-list.page";
import OrdersPage from "pages/orders/orders.page";
import ProductPage from "pages/product-page/product-page.page";
import ProfilePage from "pages/profile/profile.page";
import WishlistPage from "pages/wishlist/wishlist.page";
import { createBrowserRouter } from "react-router-dom";
import "../index.css";
import ProfileDashboardPage from "pages/profile-dashboard/profile-dashboard.page";
import ExchangeReturn from "pages/exchange-return/exchange-return.page";
import AddAddressPage from "pages/add-address/add-address.page";
import ProductListingPage from "pages/product-listing/product-listing.page";
import SuperCategoryPage from "pages/product-listing/page/super-category.page";
import SubCategoryPage from "pages/product-listing/page/sub-category.page";
import MainProductPage from "pages/product-listing/page/main-product.page";
import Home from "pages/home/home.page";
import PrivacyPolicyPage from "pages/privacy-policy/privacy-policy.page";
import AboutUsPage from "pages/about-us/about-us.page";
import TermsConditionsPage from "pages/terms-conditions/terms-conditions.page";
import ReturnExchangesPage from "pages/return-exchanges/return-exchanges.page";
import BrandPartnerPolicyPage from "pages/brand-partner-policy/brand-partner-policy.page";
import ShippingPolicyPage from "pages/shipping-policy/shipping-policy.page";

const route = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "product-page/:product",
		element: <ProductPage />,
		// errorElement: <PageNotFound />,
		// loader: homeLoader,
		// action: homeAction,
		// children: [
		//     {
		//         path: "product-page/:id",
		//         element: <ProductPage />,
		//         loader: loaderChild
		//     },
		//     {
		//         path: "product-page/:id/edit",
		//         element: <EditContact />,
		//         loader: loaderChild,
		//         action:editAction,
		//     },
		// ]
	},
	{
		path: "cart",
		element: <Cart />,
	},
	{
		path: "product-list/:supercategory",
		element: <ProductListingPage />,
		children: [
			{
				index: true,
				element: <SuperCategoryPage />,
			},
			// {
			//   path: ":supcategory",
			//   element: <SuperCategoryPage />,
			// },
			{
				path: ":category",
				element: <SubCategoryPage />,
			},
			{
				path: ":category/:product",
				element: <MainProductPage />,
			},
		],
	},
	{
		path: "checkout",
		element: <CheckoutPage />,
		children: [
			{
				path: "address",
				element: <MobileShippingAddress />,
			},
			{
				path: "payment",
				element: <PaymentMethods />,
			},
		],
	},
	{
		path: "privacy-policy",
		element: <PrivacyPolicyPage />,
	},
	{
		path: "terms-and-condition",
		element: <TermsConditionsPage />,
	},
	{
		path: "return-exchanges",
		element: <ReturnExchangesPage />,
	},
	{
		path: "brand-partner-policy",
		element: <BrandPartnerPolicyPage />,
	},
	{
		path: "shipping-policy",
		element: <ShippingPolicyPage />,
	},
	{
		path: "about-us",
		element: <AboutUsPage />,
	},
	{
		path: "profile",
		element: <ProfilePage />,
		children: [
			{
				index: true,
				element: <ProfileDashboardPage />,
			},
			{
				path: "orders",
				element: <OrdersPage />,
			},
			{
				path: "orderlist",
				element: <OrderListPage />,
			},
			{
				path: "wishlist",
				element: <WishlistPage />,
			},
			{
				path: "account",
				element: <AccountPage />,
			},
			{
				path: "account-information-edit",
				element: <EditAccountInformation />,
			},
			{
				path: "exchange-return",
				element: <ExchangeReturn />,
			},
		],
	},
]);

export default route;
