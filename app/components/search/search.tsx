"use client";

import { HiOutlineSearch } from "react-icons/hi";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { CardProps } from "@/app/all-characters/page";

export default function Search(props: { page: string }) {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const handleSearch = useDebouncedCallback((searchTerm: string) => {
		const params = new URLSearchParams(searchParams);

		if (searchTerm) {
			params.set("name", searchTerm);
			params.delete("page");
		} else {
			params.delete("name");
			params.delete("page");
		}

		if (params.toString()) {
			replace(`${pathname}?${params.toString()}`);
		} else {
			replace(pathname);
		}
	}, 400);

	return (
		<div className="mt-4 md:mt-10 md:mb-[25px] flex flex-col justify-center items-center w-full">
			<div className="flex flex-col items-center md:flex-none w-full max-w-[250px] md:max-w-[450px] ">
				<div className="flex items-center bg-white rounded-full w-full">
					<input
						onChange={(e) => handleSearch(e.target.value)}
						defaultValue={searchParams.get("name")?.toString()}
						type="search"
						placeholder="search a character"
						className="w-full p-3 text-[14px] md:text-[16px] md:w-full md:py-2 rounded-full focus:outline-none  text-black "
					/>
					<HiOutlineSearch className="text-black text-[20px] mx-3 md:text-[25px] cursor-pointer" />
				</div>
			</div>
		</div>
	);
}
