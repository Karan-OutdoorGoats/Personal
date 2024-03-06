import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import parse from "html-react-parser";

interface BlogItemProps {
	title: string;
	content: string;
	media: string;
}

const BlogItem = (props: BlogItemProps) => {
	const { content, media, title } = props;
	return (
		<div>
			<div className="overflow-clip">
				{media && (
					<LazyLoadImage
						className={`h-[320px] aspect-square  md:h-[570px] w-full object-cover  ${
							media
								? "hover:scale-125 hover:duration-700 transition duration-1000"
								: ""
						} `}
						alt="blog_post"
						src={media}
					/>
				)}
			</div>
			<div className="my-4 ">
				<p className="my-1 text-base font-OG-Medium line-clamp-2 text-lightTextColor">
					{title}
				</p>
				<p className="text-sm font-OG-Regular text-[#999] line-clamp-3 my-1">
					{parse(content)}
				</p>
			</div>
		</div>
	);
};

export default BlogItem;
