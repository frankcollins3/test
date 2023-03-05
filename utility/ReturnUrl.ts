async function ReturnUrl (context) {    

    if (process.env.NODE_ENV === "production") {
      // * this has to be set to the production site url. if you want to download this app and use in build mode locally then you'd have to switch this to localhost:3000

      // return `https://${context.req.rawHeaders[1]}`;

      // let httpsvar = context.slice(0, context.length - 9)
      // let httpvar = httpsvar.slice(4)

      // console.log('httpsvar')
      // console.log(httpsvar)

      // console.log('httpvar')
      // console.log(httpvar)
      console.log('context')
      console.log(context)

        // return context;
        return "http://localhost:3000";

        // return httpvar
        // return httpvar
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
