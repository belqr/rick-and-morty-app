import Link from "next/link";
import RickMortyPortal from "@/public/rick-and-morty-portal.png";
import Image from "next/image";

export default function NotFound() {
	return (
		<div className="flex items-center justify-center mt-16 relative">
			<div className="flex flex-col justify-center items-center m-2">
				<h1 className="text-[200px] md:text-[400px] font-bold text-center">
					404
				</h1>
				<Image
					src={RickMortyPortal}
					alt="404 Error"
					className="w-[300px] md:w-[550px] absolute top-[25px] md:top-[65px] animate-spin-slow"
				/>
				<p className="font-bold text-[18px] md:text-[25px] text-center">
					A página que você está procurando não existe, parece que foi
					destruída...
				</p>
				<Link
					href="/"
					className="my-12 p-3 font-bold text-sm md:text-lg text-black bg-white border-solid rounded-xl 
                  hover:bg-black hover:text-white transition ease-in-out delay-110 hover:scale-105 duration-400"
				>
					Go Home!
				</Link>
			</div>
		</div>
	);
}
