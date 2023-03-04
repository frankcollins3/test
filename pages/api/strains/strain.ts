import Random from 'utility/Randomizer'
import { PrismaClient } from '@prisma/client';
import APIcall from 'utility/APIcall'

async function getAllStrain(req:any, res:any) {     
        console.log("hitting allstrains!")   
        let prisma = new PrismaClient()
        // let { body } = req.body || {fakeKey: 'fakeValue'}
        let allstrains = await prisma.strains.findMany()       
        let backupdata = await APIcall('all', null, null)
        let randomStrainToTest = await Random(allstrains)                
        // let datasafestrain = allstrains || backupdata
        // console.log('datasafestrain')
        // console.log(datasafestrain)
         res.json( { getdata: allstrains })        
        //  res.json( { getdata: datasafestrain })        
}

export default getAllStrain