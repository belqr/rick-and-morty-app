import { HiOutlineSearch } from "react-icons/hi";

export default function Search() {
	return (
		<div className="mt-4 md:mt-10 md:mb-[25px] flex flex-col justify-center items-center w-full">
			<div className="flex flex-col items-center md:flex-none w-full max-w-[250px] md:max-w-[450px] ">
				<div className="flex items-center bg-white rounded-full w-full">
					<input
						type="search"
						placeholder="search a character"
						className="w-full p-3 text-[14px] md:text-[16px] md:w-full md:py-2 rounded-full focus:outline-none  text-black "
					/>
					<HiOutlineSearch className="text-black text-[20px] mx-3 md:text-[25px] cursor-pointer" />
				</div>
				<div className="flex my-4 gap-6 w-full md:max-w-[300px]">
					<select
						id="status"
						name="Status"
						className="p-2 text-black text-[12px] w-full md:text-[16px] rounded-full focus:outline-none cursor-pointer"
					>
						<option value="status">Status</option>
						<option value="alive">Alive</option>
						<option value="dead">Dead</option>
						<option value="unknown">Unknown</option>
					</select>
					<select
						id="gender"
						name="Gender"
						className="p-2 text-black text-[12px] w-full md:text-[16px] rounded-full focus:outline-none cursor-pointer"
					>
						<option value="gender">Gender</option>
						<option value="female">Female</option>
						<option value="male">Male</option>
						<option value="genderless">Genderless</option>
						<option value="unknown">Unknown</option>
					</select>
				</div>
			</div>
		</div>
	);
}
