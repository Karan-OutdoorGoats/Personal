import MobileIcon from "assets/svg/components/MobileIcon";
import { colors } from "utils/colors";
import { images } from "utils/images";

const DownloadApp = () => {
	return (
		<div className="px-2 py-4 sm:px-10 bg-[#2c454d] ">
			<div className="flex flex-col items-center h-[90px] gap-3  justify-center">
				<div className="flex flex-row items-center gap-3">
					<MobileIcon
						fill={colors.white}
						className="text-[30px] sm:text-[40px] font-OG-Regular "
					/>
					<p className="text-sm text-white capitalize sm:text-xl font-OG-Regular">
						Experience the outdoor goats app on mobile
					</p>
				</div>
				<div className="flex items-center gap-4 sm:flex-row">
					<a
						href="https://play.google.com/store/apps/details?id=com.wildcountry"
						target="_blank"
					>
						<img
							src={images.googlePlayIcon}
							className="h-[40px] object-contain"
							alt=""
						/>
					</a>
					<a
						href="https://apps.apple.com/in/app/outdoor-goats/id1596780614"
						target="_blank"
					>
						<img
							src={images.AppleLogo}
							className="h-[40px] object-contain"
							alt=""
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default DownloadApp;
