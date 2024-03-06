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
	const graphqlInstance = new GraphQLClient("/wildcountrygear", {
		headers: {
			"Content-Type": "application/json",
			"access-control-allow-origin": "*",
			"Access-Control-Allow-Origin": "*",
		},
		signal,
	});

	return graphqlInstance;
};

export default graphqlNetwork;
