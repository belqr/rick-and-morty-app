"use client";

import Link from "next/link";
import Image from "next/image";
import portal from "@/public/rick-morty.png";
import { colorStatus } from "@/app/utils/characters-info";
import { CardProps } from "@/app/all-characters/page";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function Home() {
	const [character, setCharacter] = useState<CardProps>({
		id: 0,
		name: "",
		status: "unknown",
		gender: "",
		image: "",
		species: "",
		location: {
			name: "",
		},
		origin: {
			name: "",
		},
		episode: {
			name: "",
			air_date: "",
			episode: "",
		},
	});

	const [loading, setLoading] = useState(true);

	const searchParams = usePathname();
	const params = useParams();
	console.log(searchParams);

	useEffect(() => {
		fetch(`/api/characters/${params.id}`)
			.then((response) => response.json())
			.then((response) => {
				setCharacter(response);
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [params.id]);

	console.log(character);

	if (loading) {
		return (
			<div className="w-full h-dvh flex flex-col justify-center items-center gap-1 text-[50px] md:text-[100px] font-black animate-pulse cursor-wait">
				<Image
					src={portal}
					alt="Rick And Morty Portal"
					className="w-[150px] md:w-[300px] animate-pulse"
				/>
				<p>Loading...</p>
			</div>
		);
	}

	return (
		<div className="flex flex-col w-full h-screen items-center justify-center lg:px-20">
			<div className="flex flex-col bg-[#e9e9e9] p-5 w-full h-screen lg:h-fit lg:max-w-[1400px] lg:rounded-lg text-black">
				<Link
					href="/all-characters/?page=1"
					className="w-full md:w-fit flex items-center"
				>
					<MdKeyboardArrowLeft className="text-[30px] md:text-[60px] cursor-pointer" />
					<p className="text-[25px]">Back</p>
				</Link>
				<div className="w-full flex flex-col lg:flex-row items-center md:items-center gap-10 ">
					<img
						src={character.image}
						alt={character.name}
						className="w-full md:max-w-[500px] lg:max-w-[700px] p-5"
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
										{character.episode.name}
									</li>
									<li className="flex items-center gap-3">
										<span className="font-semibold italic">
											Episode/Season:
										</span>
										{character.episode.episode}
									</li>
									<li className="flex items-center gap-3">
										<span className="font-semibold italic">Air Date:</span>
										{character.episode.air_date}
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
