import styles from 'styles/findmine/sass/FindMine.module.scss'

export default function AllMine () {

    const testclick = () => {
        console.log('test the click!')
    }

    return (
        <div className="Column">

        <div className={styles.row}>
    
        <div
        onMouseEnter={() => console.log('hey')}
        id="selectBtn1" className={styles.allOrMine}        
        > All
        </div>
    

<div 
style={{ marginTop: '2em'}} className={styles.MiniGoldBar}></div>

<button
        onClick={testclick}
        id="selectBtn2" className={styles.allOrMine}        
        > Mine
        </button>

    </div>     
        </div>

        


    )
}