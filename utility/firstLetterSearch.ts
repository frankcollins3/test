import APIcall from 'utility/APIcall'

// * strainuous || prisma wtf lmaoo

export default function FirstLetter (char:string) {


    let lowerchar:string = char.toLowerCase()
    // console.log(`char: ${char} lowerchar ${lowerchar}`)
    let namebucket:string[] = []
    
    if (char) {
        // console.log("yes there is a character")
        const firstLetterLoop = async () => {
            let straindata = await APIcall('all', null, null)

            straindata.forEach( (strain:any) => {                
                    let strainName:string = strain.strain
                    let firstLetter = strainName.slice(0, 1)                    
                    let lowerLetter:string = firstLetter.toLowerCase()
                if (lowerLetter === lowerchar) {
                    namebucket.push(strain)
                }
            })
        }
        const returnBucket = () => {            
            return namebucket
        }
        const doubleUP = async () => {
            await firstLetterLoop()
             return  returnBucket()
        }
        return doubleUP()
    } else return
}