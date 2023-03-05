import Axios from 'axios';

export default async function myStrainsES6 (endpoint, data) {    
    class myStrains {
        constructor(endpoint) {
            this.endpoint = endpoint
        }
        get mystrains () {
            return this.myStrainsGET()
        }
        async myStrainsGET() {
            return Axios.post(endpoint, {
                data: {
                    usersId: data                    
                }
            }).then( (response) => {                
                return response
            })
        }
    }
    if (endpoint) {
        let allMyUsers = await new myStrains(endpoint).mystrains        
        return allMyUsers || []
    }
}