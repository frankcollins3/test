import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
export default async function update (req:any, res:any) {              // res:string doesn't work
    let dbstrains = await prisma.strains.findMany()
    dbstrains.forEach( (data:string|object) => {
        // console.log('data in the dbstrains foreach')
        // console.log(data)
    })
    // console.log(strains)
    res.json(  {watsup: 'hi'}  )
}