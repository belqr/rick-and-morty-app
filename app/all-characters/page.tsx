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
	firstSeen: {
		name: string;
		air_date: string;
		episode: string;
	};
	episode: string[];
};

const getCharacters = async (page: string = "1", query: { name: string }) => {
	const { info, results, status } = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/characters`,
		{
			method: "POST",
			body: JSON.stringify({
				page: page,
				query,
			}),
		}
	)
		.then((res) => res.json())
		.catch((err) => {
			console.log(err);
		});
	return {
		status,
		pageInfo: info,
		pageData: results,
	};
};

export default async function CharactersPage({
	searchParams,
}: {
	searchParams: { page: string; name: string };
}) {
	const page = searchParams.page;
	const { pageInfo, pageData, status } = await getCharacters(page, {
		name: searchParams.name,
	});

	return (
		<section className="w-full">
			<Nav />
			<div className="my-[25px] md:my-[50px] flex flex-col items-center">
				<div className="w-fit flex flex-wrap justify-center gap-6 md:gap-8">
					<Search />
					{status === 404 ? (
						<h1 className="text-center text-4xl">404</h1>
					) : (
						pageData.map((item: CardProps) => {
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
									firstSeen={item.firstSeen}
									origin={item.origin}
									page={page}
									episode={item.episode}
								/>
							);
						})
					)}
				</div>
				<span
					className="data-[hidden='true']:hidden"
					data-hidden={status === 404}
				>
					<Pagination
						page={page}
						{...pageInfo}
						query={{ name: searchParams.name }}
					/>
				</span>
			</div>
		</section>
	);
}
