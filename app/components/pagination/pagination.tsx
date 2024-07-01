import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface PaginationProps {
	page: string;
	pages: number;
	count: number;
	next: string | null;
	prev: string | null;
}

export default function Pagination({
	page = "1",
	pages,
	count,
	next,
	prev,
}: PaginationProps) {
	const prevPage = prev ? Number(page) - 1 : Number(page);
	const nextPage = next ? Number(page) + 1 : Number(page);

	return (
		<div className="w-full flex justify-center mt-10 font-semibold">
			<div className="w-[280px] md:w-[400px] py-2 px-4 bg-[#e9e9e9] text-black flex justify-between items-center gap-2 md:gap-4 mt-5 rounded-full shadow-lg">
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
							href={`/all-characters/?page=1`}
							className="py-2 px-3 bg-transparent rounded-full hover:bg-gray-300 transition"
						>
							<p className="text-[14px] md:text-[20px] px-1 md:px-1.5"> 1 </p>
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
							href={`/all-characters/?page=${prevPage}`}
							className="p-2 bg-transparent rounded-full hover:bg-gray-300 transition"
						>
							<MdKeyboardArrowLeft className="text-[16px] md:text-[25px]" />
						</Link>
					</button>
				</div>
				<span className="text-[16px] md:text-[20px] font-bold">
					Page {page} of {pages}
				</span>
				<div className="flex items-center">
					<button
						disabled={page === "42"}
						className={`flex ${
							page === "42"
								? "text-gray-400 pointer-events-none"
								: "text-black cursor-default"
						}`}
					>
						<Link
							href={`/all-characters/?page=${nextPage}`}
							className="p-2 bg-transparent rounded-full hover:bg-gray-300 transition"
						>
							<MdKeyboardArrowRight className="text-[16px] md:text-[25px]" />
						</Link>
					</button>

					<button
						disabled={page === "42"}
						className={`flex ${
							page === "42"
								? "text-gray-400 pointer-events-none"
								: "text-black cursor-default"
						}`}
					>
						<Link
							href={`/all-characters/?page=${pages}`}
							className="py-2 px-3 bg-transparent rounded-full hover:bg-gray-300 transition"
						>
							<p className="text-[14px] md:text-[20px]"> {pages} </p>
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
}
