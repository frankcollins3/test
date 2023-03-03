*** To-Do: ***
postusersstrains:
create login

export default async function (req, res) {
    // export default async function (req:(string|object|number), res:(string|object|number)) {
        let data = req.body.dataname
#         let id = req.body.id                  // this id will be the global.userId
        // let id:number = parseInt(req.body.id)        
        let realdata = await Regex(data, 'alphareturn')        

<line 39 postusersstrains.ts/>
  const relationalStrainToUser = async (userid:number|string, strainsId:number) => {

<line 44 PickMines.ts/>
 const clickPick = async () => {             
            let localurl = await props.url();
            let realurl = `${localurl}/api/strains/postuserstrains`;
             let straindata = globalstate.currentStrain;                        
             
#            let userid = '4'; // this would/will be pulling global.userIdtoString                         
            let submissionData = straindata += userid            
            let xmldata = await POST(realurl, submissionData); 
*** To-Do: ***



Stripe API with next.js for the gold to be mine mine to be gold