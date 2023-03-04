 import { useSWRHandler } from 'swr/dist/use-swr'
import APIcall from 'utility/APIcall'
import Random from 'utility/Randomizer'

export default async function ReturnWrong (parents:string, dontuse:string|string[]) {        
        let stringbucket:any[] = []   // redundant to enforce string? quite enforced elsewhere, func-params, forEach...        
        let strains:(object|string|any) = await APIcall('all', null, null)  
        const loopandpush = async () => {

            await strains.forEach(async(strain:string|object|any) => {                                        
                let parentsLoop:string|object|any = strain.parents 
                            
                if (parentsLoop === parents || parentsLoop === dontuse) {      // parents in this case the func-params
                    // console.log(`IF BLOCK! this is the right parents ${strain.parents} for ${strain.strain}`)
                    return 
                } else {                    
                    if (dontuse.includes(strain.strain)) {
                        let newstrain = await Random(strains)
                        let name:string = newstrain.strain
                        stringbucket.push(name)                        
                    } else { 
                        stringbucket.push(strain.strain)
                    }                                                 
                }
            }) 
        }
        
        const randomAsync = async () => {             
            let randomWrongString = await Random(stringbucket)            
            return randomWrongString
        }
        const doubleAsync = async () => {
            await loopandpush() 
            return  randomAsync()
        }
        return doubleAsync()
}