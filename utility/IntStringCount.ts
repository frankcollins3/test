// export default async function IntStringCount (n:number) {
export default async function IntStringCount (n:number|string|any) {
let i:number = 0;
parseInt(n)
// let stringbucket:string[] = []
let stringbucket = new Array()
    const loop = () => {
        while (i < n) {
            let numberstring:string = i.toString()            
            stringbucket.push('s')            
            i++
        }
    }
    const returnbucket = () => {
        return stringbucket
    }
    const loopAndReturn = async () => {
        await loop()
        return returnbucket()
    }
    return loopAndReturn()
}