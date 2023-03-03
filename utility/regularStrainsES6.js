import { Axios } from "axios";

export default async function regularStrainsES6(endpoint, method) {
    class strainsES6 {
        constructor(endpoint) {
            this.endpoint = endpoint;
        }
        // *         * * *          * * *           * * * 
        get allstrains() { return this.ALLstrainsPOST() }
        
        // ALLstrainsPOST allows you to have 
        async ALLstrainsPOST () {
            return Axios.post(endpoint, {
                data: {
                    method: method
                }
            }).then( (response) => {
                return response
            })
        }
        // *         * * *          * * *           * * * 
    }
        if (endpoint && method === 'ALL') {
            let allstrains = new strainsES6(endpoint).allstrains
            console.log('allstrains')
            console.log(allstrains)
            return allstrains
        }
            
}