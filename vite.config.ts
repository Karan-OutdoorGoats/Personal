import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [react(), viteTsconfigPaths()],
	define: {
		"process.env": process.env,
	},
	server: {
		cors: false,
		proxy: {
			"/wildcountrygear": {
				target: "https://wildcountrygear.in/graphql",
				changeOrigin: true,
				secure: false,
				rewrite: (path:any) => path.replace(/^\/wildcountrygear/, ''),
			},
		},
	},
	build: {
		cors: false,
		proxy: {
			"/wildcountrygear": {
				target: "https://wildcountrygear.in/graphql",
				changeOrigin: true,
				secure: false,
				rewrite: (path:any) => path.replace(/^\/wildcountrygear/, ''),
			},
		},
	},
});
