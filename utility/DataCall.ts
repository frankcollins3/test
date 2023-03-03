// import $ from 'jquery'
// import Axios from 'axios'

// // export default async function DataCall ( method:string, url:string, data:(string|null)) { 
// //     const ajaxCall = async () => {
// //         if (method === 'ajax') {
// //             let ajax = $.ajax({
// //                 method: 'get',
// //                 url: url,
// //                 data: 'json',
// //                 success: (ajaxdata) => {
// //                     console.log('ajaxdata')
// //                     console.log(ajaxdata)
// //                     return ajaxdata
// //                 }
// //             })
// //             return ajax
// //         }
// //     }
// //         return ajaxCall()

// //         if (method === 'axios') {

// //         }    

// //         }

// export default async function DataCall (method:string, url:string, data:(string|null)) {
//     console.log('url')
//     console.log(url)

//     class Call {

//         constructor(url:any) {
            
//             this.url = url
//         }      
//     // method getters
//     get ajax() {
//         console.log("we are over here")
//         return this.ajaxcall()
//     }

//     // methods 
//     ajaxcall() {
//             const ajaxCall = () => {
//                 $.ajax({
//                 // let ajax = $.ajax({
//                     method: 'get',
//                     url: url,
//                     data: 'json',
//                     // success: (ajaxdata) => {
//                     //     console.log('ajaxdata')
//                     //     console.log(ajaxdata)
//                     //     return ajaxdata
//                 }).then( (data) => {
//                     console.log('data')
//                     console.log(data)
//                     return data            
//                 })            
//             }
//             return ajaxCall()
//     }
// }   // ajax call ending 
 
//         if (method === 'ajax') {
//             console.log("we are over here doing it this way")
//             const returnajaxcall = new Call().ajax
//             return returnajaxcall
//             // console.log(returnajaxcall.responseJSON)
//             // let actualdata = returnajaxcall.responseJSON.getdata
//             // console.log('actualdata')
//             // console.log(actualdata)
//         }
export default {};



// }       // function end
