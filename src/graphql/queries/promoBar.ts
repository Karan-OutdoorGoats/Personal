import gql from "graphql-tag";

const promoBar = gql`
	{
		promobar: cmsBlocks(identifiers: "promobar") {
			items {
				title
				content
			}
		}
	}
`;

export { promoBar };
