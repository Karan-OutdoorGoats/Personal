import gql from "graphql-tag";

const premiumQuery = gql`
	{
		premiumProducts: products(filter: { is_featured: { eq: "1" } }) {
			items {
				uid
				name
				sku
				url_key
				review_count
				rating_summary
				price_range {
					minimum_price {
						regular_price {
							value
							currency
						}
						final_price {
							value
							currency
						}
						discount {
							percent_off
							amount_off
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

export { premiumQuery };
