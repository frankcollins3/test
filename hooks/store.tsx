import {useState, useEffect, useContext, createContext } from 'react'

let initialstate = {
    // pokemon:string: '',  cant
    // pokemon: '',
    niceass: '',
    currentStrain: '',
    savedStrains: '',
    users: [],
    dbStrains: [],
    clickedStrain: undefined || null,
    bgToggle: 'new',
    textState: '',
    displayText: '',
    styleFile: '',
    nothing: '',
    apiLen: 0
}
const StateStore = ({children}) => {
    const [state, setState] = useState(initialstate)    
    const Context = createContext(null as any);
    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider> || {my: 'life'}
    )
}
export default StateStore