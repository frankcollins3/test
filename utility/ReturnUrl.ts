async function ReturnUrl (context) {    

    if (process.env.NODE_ENV === "production") {
      // * this has to be set to the production site url. if you want to download this app and use in build mode locally then you'd have to switch this to localhost:3000

      // return `https://${context.req.rawHeaders[1]}`;
        return context
        // console.log('window')
        // console.log(window)
        // console.log(window.location)

        

        return "http://localhost:3000";
        // return `http://${context.req.rawHeaders[1]}`;
        // 
        // return process.cwd()

        // if (process.env.NODE_ENV === "production") {
          // return `https://${context.req.rawHeaders[1]}`;
        // } else if (process.env.NODE_ENV !== "production") {
        // }
      } 
      else  { 
            // this gets rid of the error
      // } else if (process.env.NODE_ENV !== "production") {        
        return "http://localhost:3000";      
      }
}

export default ReturnUrl
