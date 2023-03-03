import styled from 'styled-components'

const Container = styled.div`
    min-height: 50vh;
    min-width: 50vw;
    flex-flow: column wrap
    display: flex;
    justify-content: center;
    align-items: center;
    `
    const ShadowBorder = styled(Container)`   

    // box-shadow: 10px 10px 10px rgb(247, 208, 32);    
    // border: 3px solid rgb(247, 208, 36);    
    
    //  border: 40px dotted papayawhip;    
//  this will be changed to have a 40px papayawhip border for theme toggle new bg
`

export default ShadowBorder