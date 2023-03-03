import Random from 'utility/Randomizer'
import { PrismaClient } from '@prisma/client';
import APIcall from 'utility/APIcall'

async function getAllStrain(req:any, res:any) {        
        let prisma = new PrismaClient()
        let { body } = req.body || {fakeKey: 'fakeValue'}
        let allstrains = await prisma.strains.findMany()       
        let backupdata = await APIcall('all', null, null)
        let randomStrainToTest = await Random(allstrains)                
        let datasafestrain = allstrains || backupdata
         res.json( { getdata: datasafestrain })        
}

export default getAllStrain