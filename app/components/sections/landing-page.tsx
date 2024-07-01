import Image from "next/image";
import rickAndMortyPortal from "@/public/rick-and-morty-portal.png";
import rickAndMorty from "@/public/rick-and-morty.png";
import Link from "next/link";

export default function LandingPage() {
	return (
		<section className="w-ful h-screen flex flex-col justify-center items-center">
			<div className="w-full flex flex-col justify-center items-center relative">
				<Image
					src={rickAndMortyPortal}
					alt="Rick And Morty in Portal"
					className="w-[325px] md:w-[600px]"
				/>
				<Image
					src={rickAndMorty}
					alt="Rick And Morty"
					className="w-[350px] md:w-[750px] absolute bottom-[160px] md:bottom-[150px]"
				/>
				<Link
					href="/all-characters?page=1"
					className="my-12 p-3 font-bold text-sm md:text-lg bg-black border-solid border-white border-2 rounded-xl 
                  hover:bg-white hover:text-black transition ease-in-out delay-110 hover:scale-105 duration-400"
				>
					View Characters
				</Link>
			</div>
		</section>
	);
}
