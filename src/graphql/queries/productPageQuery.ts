import gql from "graphql-tag";

const productPageQuery = gql`
query getProduct($filter: ProductAttributeFilterInput!){
    products(filter:$filter}) {
      items {
        uid
        name
        rating_summary
        review_count
        sku
        media_gallery{
                url
              }
        __typename
        price_range{
          maximum_price {
                          final_price {
                              value
                              currency
                          }
            discount{
              percent_off
              amount_off
            }
            regular_price{
              value
              currency
            }
                      }
        }
        ... on ConfigurableProduct {
          configurable_options {
            position
            uid
            attribute_uid
            label
            position
            use_default
            attribute_code
            values {
              uid
              label
            }
          }
          variants {
            product {
              media_gallery{
                url
              }
              stock_status
              only_x_left_in_stock
              uid
              name
              sku
              ... on PhysicalProductInterface {
                weight
              }
              price_range{
          maximum_price {
                          final_price {
                              value
                              currency
                          }
            discount{
              percent_off
              amount_off
            }
            regular_price{
              value
              currency
            }
                      }
        }
            }
            attributes {
              uid
              label
              code
              value_index
            }
          }
        }
      }
    }
  }
`

export { productPageQuery }