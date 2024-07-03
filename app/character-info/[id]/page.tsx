import Link from "next/link";
import Image from "next/image";
import portal from "@/public/rick-morty.png";
import { colorStatus } from "@/app/utils/characters-info";
import { CardProps } from "@/app/all-characters/page";
import { MdKeyboardArrowLeft } from "react-icons/md";

interface HomeProps {
	params: {
		id: string;
	};
	searchParams: {
		page: string;
		name?: string;
	};
}

export default async function Home({ params, searchParams }: HomeProps) {
	const character: CardProps = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/characters/${params.id}`
	)
		.then((response) => response.json())
		.catch((error) => {
			console.log(error);
		});

	const firstEpisode = await fetch(character.episode[0]).then((response) =>
		response.json()
	);

	const filterName = searchParams.name ? `&name=${searchParams.name}` : "";

	return (
		<div className="flex flex-col w-full lg:h-screen md:w-full justify-center items-center lg:px-20">
			<div className="flex flex-col bg-white w-full lg:max-w-[1400px] lg:rounded-lg text-black">
				<Link
					href={`/all-characters/?page=${searchParams.page}${filterName}`}
					className="w-full md:w-fit flex items-center pt-5"
				>
					<MdKeyboardArrowLeft className="text-[30px] md:text-[60px] cursor-pointer" />
					<p className="text-[25px]">Back</p>
				</Link>
				<div className="w-full flex flex-col lg:flex-row items-center md:items-center gap-10 px-5 mb-10 lg:mb-5">
					<img
						src={character.image}
						alt={character.name}
						className="w-full md:max-w-[600px] lg:max-w-[700px] p-5"
					/>
					<div className="w-full flex flex-col md:ml-5">
						<h1 className="text-[30px] md:text-[40px] font-black text-center uppercase">
							{character.name}
						</h1>
						<span className="text-center mb-4">
							<p className="text-[14px] md:text-[20px]">
								<span className="animate-pulse">
									{colorStatus[character.status]}
								</span>{" "}
								{character.status} - {character.species}
							</p>
						</span>
						<div className="flex flex-col md:flex-row lg:flex-col justify-between md:justify-evenly md:mt-5 border-t-2 border-gray-300">
							<div className="flex flex-col md:justify-between">
								<h3 className="text-[18px] md:text-[25px] font-bold md:font-extrabold mt-4 mb-2 text-gray-500">
									ABOUT THE CHARACTER
								</h3>
								<ul className="flex flex-col ml-3 gap-1 text-[16px] md:text-[20px]">
									<li className="flex items-center gap-3">
										<span className="font-semibold italic">Gender:</span>
										{character.gender}
									</li>
									<li className="flex items-center gap-3">
										<span className="font-semibold italic">Origin:</span>
										{character.origin.name}
									</li>
									<li className="flex items-center gap-3">
										<span className="font-semibold italic">Location:</span>
										{character.location.name}
									</li>
								</ul>
							</div>
							<div className="flex flex-col mt-5 md:mt-0 md:justify-between">
								<h3 className="text-[18px] md:text-[25px] font-bold md:font-extrabold mt-4 mb-2 text-gray-500">
									FIRST SEEN IN:
								</h3>
								<ul className="flex flex-col gap-1 ml-3 text-[16px] md:text-[20px]">
									<li className="flex items-center gap-3">
										<span className="font-semibold italic">Episode name:</span>
										{firstEpisode.name}
									</li>
									<li className="flex items-center gap-3">
										<span className="font-semibold italic">
											Episode/Season:
										</span>
										{firstEpisode.episode}
									</li>
									<li className="flex items-center gap-3">
										<span className="font-semibold italic">Air Date:</span>
										{firstEpisode.air_date}
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
