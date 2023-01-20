"use strict";
// prisma/seed.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
// initialize Prisma Client
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // create two dummy articles
        const post1 = yield prisma.article.upsert({
            where: { title: 'Prisma Adds Support for MongoDB' },
            update: {},
            create: {
                title: 'Prisma Adds Support for MongoDB',
                body: 'Support for MongoDB has been one of the most requested features since the initial release of...',
                description: "We are excited to share that today's Prisma ORM release adds stable support for MongoDB!",
                published: false,
            },
        });
        const post2 = yield prisma.article.upsert({
            where: { title: "What's new in Prisma? (Q1/22)" },
            update: {},
            create: {
                title: "What's new in Prisma? (Q1/22)",
                body: 'Our engineers have been working hard, issuing new releases with many improvements...',
                description: 'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
                published: true,
            },
        });
        console.log({ post1, post2 });
    });
}
// execute the main function
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    // close Prisma Client at the end
    yield prisma.$disconnect();
}));
