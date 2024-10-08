import { isValidUrl } from "@/lib/utils";
import { creatorUser } from "@/types";

const CreatorsGrid = ({ creator }: { creator: creatorUser }) => {
	const imageSrc =
		creator.photo && isValidUrl(creator.photo)
			? creator.photo
			: "/images/defaultProfileImage.png";

	const backgroundImageStyle = {
		backgroundImage: `url(${imageSrc})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
	};

	return (
		<div
			className="relative flex flex-col items-center justify-center rounded-xl w-full h-96 object-cover"
			style={backgroundImageStyle}
		>
			<div className="text-white flex flex-col items-start w-full creatorsGirdHighlight">
				{/* Username */}
				<p className="font-semibold text-xl sm:text-2xl max-w-[90%] text-ellipsis whitespace-nowrap overflow-hidden">
					{creator.firstName ? (
						<span className="capitalize">
							{creator.firstName} {creator.lastName}
						</span>
					) : (
						creator.username
					)}
				</p>
				{/* Profession and Status */}
				<div className="flex items-center justify-between w-full mt-2 gap-2">
					<span className="text-md h-full max-w-[90%] text-ellipsis whitespace-nowrap overflow-hidden">
						{creator.profession ? creator.profession : "Expert"}
					</span>
					<div className="bg-green-500 text-xs rounded-full sm:rounded-xl px-1.5 py-1.5 sm:px-4 sm:py-2">
						<span className="hidden sm:flex">Available</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreatorsGrid;
