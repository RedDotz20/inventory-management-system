import storeLogo from "../assets/mainLogo.png";

export default function StoreLogoImg() {
	return (
		<div className="flex items-center justify-evenly mb-6">
			<img
				src={storeLogo}
				className="w-[70px] h-[70px] object-cover mr-3"
				alt="BGMlogo"
			/>
			<div className="flex flex-col">
				<span className="text-black text-3xl text-center select-none font-black">
					Brightsons
				</span>
				<div className="flex items-center justify-center">
					<div className="bg-black h-[1.5px] w-4 select-none"></div>
					<span className="text-black text-[0.65rem] text-center mx-1.5 select-none tracking-tighter font-bold">
						GENERAL MERCHANDISE
					</span>
					<div className="bg-black h-[1.5px] w-4 select-none"></div>
				</div>
			</div>
		</div>
	);
}
