import gql from "graphql-tag";

const newProductQuery = gql`
	{
		newProducts: products(
			filter: { news_from_date: { from: "2023-12-09" } }
			pageSize: 20
			currentPage: 1
		) {
			items {
				uid
				name
				sku
				url_key
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

export { newProductQuery };
