import Link from "next/link";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface PaginationProps {
	page: string;
	pages: number;
	count: number;
	next: string | null;
	prev: string | null;
	query?: {
		name?: string;
		status?: string;
		gender?: string;
	};
}

export default function Pagination({
	page = "1",
	pages,
	count,
	next,
	prev,
	query = {},
}: PaginationProps) {
	const prevPage = prev ? Number(page) - 1 : Number(page);
	const nextPage = next ? Number(page) + 1 : Number(page);

	const urlQueryString = () => {
		const queryString = new URLSearchParams(query).toString();
		return queryString ? `&${queryString}` : "";
	};

	return (
		<div className="w-full flex justify-center mt-10 font-semibold">
			<div className="w-[280px] md:w-[400px] p-2 bg-white text-black flex justify-between items-center gap-2 md:gap-4 mt-5 rounded-full shadow-lg">
				<div className="flex items-center">
					<button
						disabled={page === "1"}
						className={`flex ${
							page === "1"
								? "text-gray-400 pointer-events-none"
								: "text-black cursor-default"
						}`}
					>
						<Link
							href={`/all-characters/?page=1${urlQueryString()}`}
							className="py-2 px-3 bg-transparent rounded-full hover:bg-gray-300 transition"
						>
							<p className="text-[14px] md:text-[20px] w-[20px]"> 1 </p>
						</Link>
					</button>

					<button
						disabled={page === "1"}
						className={`flex ${
							page === "1"
								? "text-gray-400 pointer-events-none"
								: "text-black cursor-default"
						}`}
					>
						<Link
							href={`/all-characters/?page=${prevPage}${urlQueryString()}`}
							className="p-2 bg-transparent rounded-full hover:bg-gray-300 transition"
						>
							<MdKeyboardArrowLeft className="text-[16px] md:text-[25px]" />
						</Link>
					</button>
				</div>
				<div className="flex text-[16px] md:text-[20px] gap-3">
					Page{" "}
					<span className="font-bold text-[18px] md:text-[22px]">{page}</span>{" "}
					of{" "}
					<span className="font-bold text-[18px] md:text-[22px]">{pages}</span>
				</div>
				<div className="flex items-center">
					<button
						disabled={Number(page) === pages}
						className={`flex ${
							Number(page) === pages
								? "text-gray-400 pointer-events-none"
								: "text-black cursor-default"
						}`}
					>
						<Link
							href={`/all-characters/?page=${nextPage}${urlQueryString()}`}
							className="p-2 bg-transparent rounded-full hover:bg-gray-300 transition"
						>
							<MdKeyboardArrowRight className="text-[16px] md:text-[25px]" />
						</Link>
					</button>

					<button
						disabled={Number(page) === pages}
						className={`flex ${
							Number(page) === pages
								? "text-gray-400 pointer-events-none"
								: "text-black cursor-default"
						}`}
					>
						<Link
							href={`/all-characters/?page=${pages}${urlQueryString()}`}
							className="py-2 px-3 bg-transparent rounded-full hover:bg-gray-300 transition"
						>
							<p className="text-[14px] md:text-[20px] w-[20px]"> {pages} </p>
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
}
