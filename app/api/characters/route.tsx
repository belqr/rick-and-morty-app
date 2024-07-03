import { formatQueryString } from "@/app/utils/format-query-to-string";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	const body = await request.json();
	const page = body.page || 1;
	const query = formatQueryString(body.query);

	try {
		const characters = await axios.get(
			`https://rickandmortyapi.com/api/character/?page=${page}${query}`
		);

		return NextResponse.json(characters.data, { status: 200 });
	} catch (error) {
		return NextResponse.json(error, { status: 500 });
	}
}
