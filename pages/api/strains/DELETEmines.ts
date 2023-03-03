import { Prisma, PrismaClient } from '@prisma/client';
let prisma = new PrismaClient()

export default async function DELETEmines (req, res) {
    console.log('req.body')
    console.log(req.body)

    let body = req.body;
    let data = req.body.data

    let deleteit:string = data.delete

    if (deleteit === 'all') {
        console.log('deleteit === all')
        const deleteMines = await prisma.mines.deleteMany({})
    }
    if (deleteit === 'one') {
        let allMines:any = await prisma.mines.findMany()
        allMines.forEach(async(mine) => {
            if (data.review === mine.review) {

                const deleteMine = await prisma.mines.delete({
                    where: {
                        id: mine.id
                    }
                }).then(async(deletestrain) => {
                    console.log('deletestrain')
                    console.log(deletestrain)
                    let allmines = await prisma.mines.findMany()
                    res.json( { updatedMines: allmines, delete: 'success'})
                })

            }
        })        
        // res.json( {hey: 'hi'})
    }
}