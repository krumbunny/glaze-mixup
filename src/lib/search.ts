import { json } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function search(searchText: string) {
	let searchResult = await prisma.users.findMany({
		where: {
			OR: [
				{
					name: {
						contains: searchText,
						mode: 'insensitive'
					}
				},
				{
					email: {
						contains: searchText,
						mode: 'insensitive'
					}
				}
			]
		}
	});

	return searchResult;
}
