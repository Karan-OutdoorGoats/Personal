import { useQuery } from "@tanstack/react-query"
import request from "graphql-request"
import gql from "graphql-tag"
import graphqlNetwork from "graphql/graphql-instance"

const useGLQuery = () => {

    const productQuery = gql`
    {
        products(filter: { sku : { eq : "TPhFT" } }){
            items{
                name
                sku
                image{
                    url
                    label
                }
                rating_summary
                review_count
                reviews{
                    items{
                        nickname
                        summary
                    }
                }
            }
        }
    }
    `

    const GET_COUNTRIES = gql`
    query {
    countries {
            code
            name
        }
    }
`;

    const getCountries = async () => {
        const awaitedData = await request("https://countries.trevorblades.com/", GET_COUNTRIES)
        return awaitedData
    }

    const getProduct = async () => {
        const awaitedData = await graphqlNetwork().request(productQuery)
        return awaitedData
    }


    return useQuery({
        queryKey: ['products'],
        queryFn: getProduct,
        retry: false,
        refetchOnWindowFocus: false
    })

    // return useQuery({
    //     queryKey:["query"],
    //     queryFn:getCountries,
    //     retry:false
    // })


}

export { useGLQuery }