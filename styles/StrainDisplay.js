import styled from 'styled-components';
import $ from 'jquery'
console.log('hello from the strainDisplay file')

// console.log('props')
// console.log(props)

const Display = styled.div`        
        opacity: ${props => props.clickedStrain === undefined ? "0.1" : "1.0"};               
        color: ${props => props.bgToggle === 'new' ? 'black' : 'white'};        
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        margin-top: 2em;
        min-height: 8vh;
        min-width: 30vw;        
        // padding: 2em;
        `        

const CardStyle = styled(Display)`        
        box-shadow: 10px 10px 10px rgb(247, 208, 32);    
        border: 3px solid rgb(247, 208, 36);    
`
export default CardStyle
// export default [Display, CardStyle]
        