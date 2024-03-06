import OutlineArrowUpIcon from "assets/svg/components/OutlineArrowUpIcon";
import InputBoxField from "components/InputBoxField/InputBoxField";
import React, { useState } from "react";

interface CheckboxOptionProps {
	data: { label: string; value: string; count: number }[];
	title: string;
}

const CheckboxOption = (props: CheckboxOptionProps) => {
	const { data, title } = props;

	const [showAccOption, setShowAccOption] = useState(false);
	const [showMore, setShowMore] = useState(false);

	return (
		<div className="my-3">
			<div
				onClick={() => setShowAccOption(!showAccOption)}
				className="flex flex-row items-center border-b-[1px] border-dashed pb-2 group hover:cursor-pointer justify-between"
			>
				<p className="text-sm uppercase group-hover:text-primaryColor text-lightTextColor font-OG-Bold">
					{title}
				</p>
				<OutlineArrowUpIcon
					className={`hidden sm:block fill-lightTextColor group-hover:fill-primaryColor text-xl ${
						showAccOption
							? "rotate-[180deg] animate-rotateTo180Deg"
							: "rotate-[90deg] animate-rotateTo90Deg"
					} `}
				/>
			</div>
			{showAccOption && (
				<>
					<div
						className={`my-2 ${
							!showMore && data.length > 5
								? "max-h-[140px] overflow-y-scroll"
								: ""
						}`}
					>
						{data
							.slice(0, showMore ? undefined : undefined)
							.map((item) => {
								return (
									<div className="flex flex-row items-center gap-3">
										<InputBoxField
											id={item.value}
											type="checkbox"
											className="items-center px-3 text-sm focus:outline-none font-OG-Regular checked:border-primaryColor hover:cursor-pointer checked:accent-primaryColor focus:accent-primaryColor"
										/>
										<label htmlFor={item.value}>
											<div className="flex flex-row items-center gap-1 my-1 w-max decoration-primaryColor hover:cursor-pointer group hover:underline">
												<p className="text-sm font-OG-Regular group-hover:text-primaryColor text-lightTextColor">
													{item.label}
												</p>
												<p className="text-xs rounded-sm border-[1px] px-1 group-hover:text-primaryColor font-OG-Regular text-lightTextColor">
													{item.count}
												</p>
											</div>
										</label>
									</div>
								);
							})}
					</div>

					{data.length > 5 && !showMore ? (
						<div
							className="hover:cursor-pointer w-max"
							onClick={() => setShowMore(true)}
						>
							<p className="text-sm show_more font-OG-Medium text-lightTextColor hover:underline">
								Show More
							</p>
						</div>
					) : null}
				</>
			)}
		</div>
	);
};

export default CheckboxOption;
