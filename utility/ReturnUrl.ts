async function ReturnUrl (context:any) {    

    if (process.env.NODE_ENV === "production") {
      // * this has to be set to the production site url. if you want to download this app and use in build mode locally then you'd have to switch this to localhost:3000

        return 'http://localhost:3000'
        // return 'http://test-coral-two.vercel.app'
        // return `https://${context.req.rawHeaders[1]}`;
      } 
      else  { 
            // this gets rid of the error
      // } else if (process.env.NODE_ENV !== "production") {        
        return "http://localhost:3000";      
      }
}

export default ReturnUrl