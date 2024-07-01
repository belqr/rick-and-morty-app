import Image from "next/image";
import returnHome from "@/public/rick-and-morty-nave.png";
import Link from "next/link";

export default function Nav() {
	return (
		<nav className="w-full flex mb-10">
			<Link href="/">
				<Image
					src={returnHome}
					alt="Rick and Morty"
					className="w-[75px] md:w-[125px]"
				/>
			</Link>
		</nav>
	);
}
