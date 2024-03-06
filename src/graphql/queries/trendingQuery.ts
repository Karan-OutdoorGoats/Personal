import gql from "graphql-tag";

const trendingQuery = gql`
	{
		trendingProducts: products(
			filter: {}
			sort: { most_viewed: ASC }
			pageSize: 20
			currentPage: 1
		) {
			items {
				uid
				sku
				url_key
				name
				review_count
				rating_summary
				price_range {
					maximum_price {
						final_price {
							value
							currency
						}
						discount {
							percent_off
							amount_off
						}
						regular_price {
							value
							currency
						}
					}
				}
				media_gallery {
					url
				}
			}
		}
	}
`;

export { trendingQuery };
