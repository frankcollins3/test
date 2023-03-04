import $ from 'jquery'
async function CSS (target:object, selector:string, value:string) {    
    await $(target).css(selector, value)
}
export default CSS