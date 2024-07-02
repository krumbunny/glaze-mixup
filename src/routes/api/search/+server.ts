import { json } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';
import { search } from '$lib/search';

const prisma = new PrismaClient();

export async function GET({ url }) {
	let searchText = url.searchParams.get('searchText') as string;
	let searchResult = await search(searchText);
	return json({ searchResult });
}
