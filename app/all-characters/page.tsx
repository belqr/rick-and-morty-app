import Card from "../components/card/card";
import Nav from "../components/nav/nav";
import Pagination from "../components/pagination/pagination";
import Search from "../components/search/search";
import rickError from "../../public/rick-error.png";
import Image from "next/image";

export type CardProps = {
	page: string;
	id: number;
	name: string;
	status: "Alive" | "Dead" | "unknown";
	gender: string;
	species: string;
	image: string;
	location: {
		name: string;
	};
	origin: {
		name: string;
	};
	firstSeen: {
		name: string;
		air_date: string;
		episode: string;
	};
	episode: string[];
};

const getCharacters = async (page: string = "1", query?: { name?: string }) => {
	const { info, results } = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_API_URL}/characters`,
		{
			method: "POST",
			body: JSON.stringify({
				page: page,
				query: query,
			}),
		}
	)
		.then((res) => res.json())
		.catch((err) => {
			console.log(err);
		});
	return {
		pageInfo: info,
		pageData: results,
	};
};

export default async function CharactersPage({
	searchParams,
}: {
	searchParams: {
		page: string;
		name?: string;
	};
}) {
	const page = searchParams.page || "1";
	const query = searchParams.name ? { name: searchParams.name } : undefined;

	const { pageInfo, pageData } = await getCharacters(page, query);

	return (
		<section className="w-full">
			<Nav />
			<div className="my-[25px] md:my-[50px] flex flex-col items-center">
				<div className="w-fit flex flex-wrap justify-center gap-8">
					<Search page={page} />

					{pageData && Array.isArray(pageData) && pageData.length > 0 ? (
						pageData.map((item: CardProps) => (
							<Card
								key={item.name}
								id={item.id}
								name={item.name}
								status={item.status}
								gender={item.gender}
								image={item.image}
								species={item.species}
								location={item.location}
								firstSeen={item.firstSeen}
								origin={item.origin}
								episode={item.episode}
								page={page}
								filterName={searchParams.name}
							/>
						))
					) : (
						<div className="flex flex-col items-center p-5 relative">
							<Image
								src={rickError}
								alt="404 Error"
								className="w-[90px] md:w-[150px] absolute top-10"
							/>
							<h1 className="text-center text-[100px] font-bold md:font-black md:text-[150px] tracking-wide">
								404
							</h1>
							<p className="text-[16px] md:text-[25px] text-center">
								O personagem que você pesquisou não foi encontrado
							</p>
						</div>
					)}
				</div>
				<Pagination
					page={page}
					{...pageInfo}
					query={searchParams.name ? { name: searchParams.name } : {}}
				/>
			</div>
		</section>
	);
}
