import { GraphQLClient } from "graphql-request";
import {
	GraphQLClientRequestHeaders,
	MaybeLazy,
} from "graphql-request/build/esm/types";

// const BASE_URL = process.env.DEV_BASE_URL

// const BASE_URL = "http://www.wildcountrygear.in/graphql"

const graphqlNetwork = (
	header?: MaybeLazy<GraphQLClientRequestHeaders>,
	signal?: AbortSignal
) => {
	const graphqlInstance = new GraphQLClient("https://app.wildcountrygear.in/graphql", {
		headers: {
			"Content-Type": "application/json",
		},
		signal,
	});

	return graphqlInstance;
};

export default graphqlNetwork;
