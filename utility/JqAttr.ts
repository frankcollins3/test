import $ from 'jquery'
export default async function AttrTool (target:object, attribute:string, value:string) { 
    $(target).attr(attribute, value)
}