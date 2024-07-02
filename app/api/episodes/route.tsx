import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	const body = await request.json();
	try {
		const episode = await axios.get(
			`https://rickandmortyapi.com/api/episode/${body.id}`
		);
		return NextResponse.json(episode.data.results, { status: 200 });
	} catch (error) {
		return NextResponse.json(error, { status: 500 });
	}
}
