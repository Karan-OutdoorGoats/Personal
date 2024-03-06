import "@smastrom/react-rating/style.css";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import route from "routes";
import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";
import "react-loading-skeleton/dist/skeleton.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={route} />
			<ToastContainer limit={2} />
			{process.env.NODE_ENV === "development" && (
				<ReactQueryDevtools initialIsOpen={false} />
			)}
		</QueryClientProvider>
	);
}

export default App;
