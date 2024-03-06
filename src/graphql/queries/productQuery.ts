import gql from "graphql-tag";

const productQuery = gql`
	query getProduct($filter: ProductAttributeFilterInput!) {
		products(filter: $filter) {
			page_info {
				current_page
				page_size
				total_pages
			}
			aggregations {
				attribute_code
				label
				count
				options {
					label
					value
					count
				}
			}
			items {
				name
				sku
				custom_attributes {
					attribute_metadata {
						code
					}
					selected_attribute_options {
						attribute_option {
							label
						}
					}
				}
				review_count
				image {
					url
					label
				}
				rating_summary
				media_gallery {
					url
				}
				price_range {
					maximum_price {
						discount {
							percent_off
							amount_off
						}
						regular_price {
							value
							currency
						}
						final_price {
							value
							currency
						}
					}
					minimum_price {
						discount {
							percent_off
							amount_off
						}
						regular_price {
							value
							currency
						}
						final_price {
							value
							currency
						}
					}
				}
				special_price
				url_key
			}
		}
	}
`;

export { productQuery };
