import gql from "graphql-tag";

const blogQuery = gql`
	{
		blogPosts(filter: { publish_time: { from: "2023-11-07 11:28:25" } }) {
			items {
				title
				tags {
					title
					tag_url
				}
				content
				media_gallery
				author {
					name
					url
				}
				creation_time
			}
		}
	}
`;

export { blogQuery };
