import Card from "../components/card/card";
import Nav from "../components/nav/nav";
import Pagination from "../components/pagination/pagination";
import Search from "../components/search/search";

export type CardProps = {
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
	episode: {
		name: string;
		air_date: string;
		episode: string;
	};
};

const getCharacters = async (page: string = "1") => {
	const { info, results } = await fetch(
		`http://localhost:3000/api/characters`,
		{
			method: "POST",
			body: JSON.stringify({
				page: page,
			}),
		}
	).then((res) => res.json());
	return {
		pageInfo: info,
		pageData: results,
	};
};

export default async function CharactersPage({
	searchParams,
}: {
	searchParams: { page: string };
}) {
	const page = searchParams.page;
	const { pageInfo, pageData } = await getCharacters(page);

	return (
		<section className="w-full my-[25px] md:my-[50px] flex flex-col items-center">
			<Nav />
			<Search />
			<div className="w-fit flex flex-wrap justify-center gap-6 md:gap-8">
				{pageData.map((item: CardProps) => {
					return (
						<Card
							key={item.name}
							id={item.id}
							name={item.name}
							status={item.status}
							gender={item.gender}
							image={item.image}
							species={item.species}
							location={item.location}
							episode={item.episode}
							origin={item.origin}
							page={page}
						/>
					);
				})}
			</div>
			<Pagination page={page} {...pageInfo} />
		</section>
	);
}
