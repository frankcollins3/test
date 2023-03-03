import { Prisma, PrismaClient } from '@prisma/client';
let prisma = new PrismaClient()

export default async function GETallmines (req, res) {
        let allmines = await prisma.mines.findMany() || 'no mines yet';
        res.json( { allmines: allmines })
}