/* eslint-disable @typescript-eslint/no-explicit-any */
import { UndefinedInitialDataOptions, useQuery } from "@tanstack/react-query";
import { RequestDocument, Variables } from "graphql-request";
import { GraphQLClientRequestHeaders } from "graphql-request/build/esm/types";
import graphqlNetwork from "graphql/graphql-instance";

type OmitQuery = Omit<
	UndefinedInitialDataOptions<unknown, Error, unknown, any[]>,
	"queryKey"
>;

const useGQLQuery = (
	key: any[],
	query: RequestDocument,
	variables?: Variables,
	requestHeader?: GraphQLClientRequestHeaders,
	signal?: AbortSignal,
	options?: OmitQuery
) =>  {
	const getQuery = async () => {
		const awaitedData = await graphqlNetwork(undefined, signal).request(
			query,
			variables,
			requestHeader
		);
		return awaitedData;
	};

	return useQuery<any,Error>({
		queryKey: key,
		queryFn: getQuery,
		retry: false,
		refetchOnWindowFocus: false,
		...options,
	});
};

export { useGQLQuery };
