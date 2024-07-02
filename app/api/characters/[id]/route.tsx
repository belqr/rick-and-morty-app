import { ExtractIDFromURL } from "@/app/utils/extract-url";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
	request: NextRequest,
	{ params }: { params: { id: string } }
) {
	try {
		const characters = await axios.get(
			`https://rickandmortyapi.com/api/character/${params.id}`
		);

		return NextResponse.json(characters.data, { status: 200 });
	} catch (error) {
		return NextResponse.json(error, { status: 500 });
	}
}
