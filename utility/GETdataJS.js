import Axios from 'axios'
import $ from 'jquery'
import Regex from 'utility/MasterRegex'
import APIcall from 'utility/APIcall'

export default async function GET (url, data) {
    
    class GETclass {
        constructor(url) {               
            this.url = url,
            this.data = data
        }      
        // method getters
        get getgetter() {                       
            return this.axiosGet()
        }
        
        
        // methods 
        async axiosGet() {  
            if (url.length === 40) {                
                let strainfetch = await Axios.get(url)                
                return strainfetch
            }         
            if (url.length === 52) {
                $.ajax({
                    method: 'get',
                    url: url,
                    data: {
                        strain: data
                    }
                }).then( (ajaxdata) => {                    
                    return ajaxdata
                })
            }        

        }  
}  

        if (url) {    
            if (url.length === 40) {                
                const es6get = await new GETclass(url).getgetter                
                return es6get                                             
            }
            if (url.length === 52)  {                
                const get = await new GETclass(url).getgetter                            
            }

    }
}

