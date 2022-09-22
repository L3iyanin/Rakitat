// prisma/seed.ts

import { PrismaClient } from "@prisma/client";

import { faker } from '@faker-js/faker';


// initialize Prisma Client
const prisma = new PrismaClient();

async function addAchivements() {
	const achivement0 = await prisma.achievement.create({
		data: {
			name: "Win first played Match",
			description: "Mera Mera No Mi",
			imgUrl: "http://localhost:8080/achivements/achivement1.png",
		},
	});
	const achivement1 = await prisma.achievement.create({
		data: {
			name: "Win 2 Match in row",
			description: "Ope Ope No Mi",
			imgUrl: "http://localhost:8080/achivements/achivement2.png",
		},
	});
	const achivement2 = await prisma.achievement.create({
		data: {
			name: "you Lose versus khalid ",
			description: "Poneglyph",
			imgUrl: "http://localhost:8080/achivements/achivement3.png",
		},
	});
	const achivement3 = await prisma.achievement.create({
		data: {
			name: "Win with clean sheet",
			description: "Ito Ito No Mi",
			imgUrl: "http://localhost:8080/achivements/achivement4.png",
		},
	});
	const achivement4 = await prisma.achievement.create({
		data: {
			name: "Win 5 Match in row",
			description: "King Of Pirates",
			imgUrl: "http://localhost:8080/achivements/achivement5.png",
		},
	});
	console.table({ achivement0, achivement1 , achivement2, achivement3, achivement4});
}

async function addUsers(howManyUsers : number = 10) {

	for (let i = 0; i < howManyUsers; i++) {
		const username = faker.internet.userName();
		const user = await prisma.user.create({
			data: {
				username: username,
				fullName: faker.name.fullName(),
				imgUrl: faker.image.avatar(),
				login: username,
			},
		});
		console.log("user created: ", user);
	}
}

async function addAchivementsToUser(userId : number){
	try {
		const  userUpdated = await prisma.user.update(
			{
				where : {id : userId},
				data : {
					achievements : {
						connect : [{id : 1}, {id : 2}]
					}
				}
			}
		)
		console.table(userUpdated)
	}
	catch(exception){
		console.log(exception)
	}
}

async function addAFriendsToUser(userId : number){
	try {
		const  userUpdated = await prisma.user.update(
			{
				where : {id : userId},
				data : {
					friends : {
						connect : [{id : 5}, {id : 4},  {id : 3}]
					}
				}
			}
		)
		console.table(userUpdated)
	}
	catch(exception){
		console.log(exception)
	}
}

async function main() {
	// await addAchivements();
	await addUsers();
	// await addAchivementsToUser(2)
	// await addAFriendsToUser(2)
}
main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		// close Prisma Client at the end
		await prisma.$disconnect();
	});
