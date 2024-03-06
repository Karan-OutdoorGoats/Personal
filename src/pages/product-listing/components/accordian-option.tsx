import OutlineArrowUpIcon from "assets/svg/components/OutlineArrowUpIcon";
import React, { useState } from "react";

interface AccordianOptionProps {
	data: { label: string; value: string; count: number }[];
	title: string;
}

const AccordianOption = (props: AccordianOptionProps) => {
	const { data, title } = props;

	const [showAccOption, setShowAccOption] = useState(false);

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
					className={`fill-lightTextColor group-hover:fill-primaryColor text-xl ${
						showAccOption
							? "rotate-[180deg] animate-rotateTo180Deg"
							: "rotate-[90deg] animate-rotateTo90Deg"
					} `}
				/>
			</div>
			{showAccOption && (
				<div className="my-2">
					{data.map((item) => {
						return (
							<div className="flex flex-row items-center gap-1 my-1 w-max decoration-primaryColor hover:cursor-pointer group hover:underline">
								<p className="text-sm font-OG-Regular group-hover:text-primaryColor text-lightTextColor">
									{item.label}
								</p>
								<p className="text-sm rounded-sm border-[1px] px-1 group-hover:text-primaryColor font-OG-Regular text-lightTextColor">
									{item.count}
								</p>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default AccordianOption;
