import Container from 'react-bootstrap/Container'
import styles from 'styles/game/sass/FamilyTree.module.scss'

export default function Family () {
    return (
        <Container             
    style={{ 
            backgroundImage: `url('img/ring.png')`,
            backgroundSize: 'cover',
            height: '20px',
            border: 'none',
            boxShadow: 'none',

            // border: '5px solid hotpink',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',                    
     }}
        >
        
            <p 
            style={{ color: 'transparent'}}
            > yeah sure </p>
        </Container>
    )
}

// * dont forget the bow tie and possible pearl necklace.