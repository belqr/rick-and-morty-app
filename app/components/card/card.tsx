import { CardProps } from "../../all-characters/page";
import { colorStatus } from "../../utils/characters-info";
import Link from "next/link";

export default function Card({
	id,
	name,
	status,
	gender,
	image,
	page,
	filterName,
}: CardProps & { page: string; filterName?: string }) {
	const filter = filterName ? `&name=${filterName}` : "";

	return (
		<>
			<div
				className="flex flex-col items-center justify-between backdrop-blur-sm bg-white hover:animate-neonPulse 
         w-full max-w-[250px] md:max-w-[280px] h-[320px] md:h-[440px] rounded-lg p-2 md:p-5 text-black"
			>
				<div className="w-full flex flex-col items-center gap-5 md">
					<div className="flex flex-col items-center">
						<img
							src={image}
							alt={name}
							className="w-[150px] md:w-[200px] rounded-full"
						/>
						<div className="w-full overflow-hidden">
							<h2 className="text-[18px] md:text-[25px] font-black text-center">
								{name}
							</h2>
							<span className="flex justify-center gap-1 mb-5 text-[13px] md:text-[16px]">
								<p className="animate-pulse">{colorStatus[status]}</p>
								<p>
									{" "}
									{status} - {gender}
								</p>
							</span>
						</div>
					</div>
				</div>
				<Link
					href={`/character-info/${id}?page=${page}${filter}`}
					className="w-full max-w-[100px] md:max-w-[150px] text-center text-[13px] md:text-[16px] font-bold my-3 p-2 bg-white 
               text-black rounded-lg border-solid border-2 border-black
               hover:bg-black hover:text-white cursor-pointer transition ease-in-out delay-150 duration-400"
				>
					View more
				</Link>
			</div>
		</>
	);
}
