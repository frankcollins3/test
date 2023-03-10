// @ts-nocheck

import Strain from 'pages/strain'
import $ from 'jquery' // import * as $ from 'jquery'
import Axios from 'axios'
import styles from 'styles/AllStrainContainer.module.scss'
import getAllStrain from 'pages/api/strains/strain'
import React, { useEffect, useState} from 'react';  
import getSpecifiedStrain  from 'pages/api/strains/getSpecifiedStrain'
// import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container'
// import Card from 'react-bootstrap/Card'
import {Alert, Card} from 'react-bootstrap'

import ReturnEndpoints from 'utility/KeysOrValues'
import DataCall from 'utility/DataCallJS'
import AttrTool from 'utility/JqAttr'
import Siblings from 'utility/JqSiblings'
import Children from 'utility/jqChildren'
import CSS from 'utility/CSStool'
import SeeAndSave from 'utility/SeeAndSave'
import APIcall from 'utility/APIcall'
import MasterListStyle from 'utility/MasterListStyle'
import MasterRegex from 'utility/MasterRegex'
import {useGame} from 'Contexts/game'

export default  function AllStrainContainer(props:any) {   

    const {currentUser, currentUserName, currentuseridset, currentUserId, currentusernameset, noUser, nouserset } = useGame()
    let globalprops:any = props.global
    let text:string = props.textState
    useEffect( () => {
      if (text === 'thc') props.setStrainSave(true)      
    }, [text])

    useEffect( () => {
        const checkuser = async () => {
          let currentusername =   window.localStorage.getItem('currentUserName')
          let currentuserid =  window.localStorage.getItem('currentUserId')  
          currentusernameset(currentusername)
          currentuseridset(currentuserid)
          let user = await window.localStorage.getItem('currentUserName') || ''
          let username = user.username          
        }
        checkuser()
    }, [currentUser])

    const checkstyles = async () => {        
        let allsass = await MasterListStyle('straincontainer')                
}
    const toggleBg = async () => {                 
        if (props.bgToggle === 'old') props.setBgToggle('new') 
        if (props.bgToggle === 'new') props.setBgToggle('old')         
    }
    const nowYouSee = (event:any) => {
        CSS($(event.target), 'color', 'papayawhip')
    }
    const nowYouDont = (event:any) => {
        let tgt: object = $(event.target)
        CSS($(event.target), 'color', 'transparent')
    }

    
    const strainClick = async (event:any) => {    

        if (currentUserName) {

        if (props.bgToggle === 'new' || props.bgToggle === 'old') {
            let text:string = event.target.innerText      
    
            if (text === 'thc') {            
          } else { props.setStrainSave(false)} 
    
            let target = event.target
            let childrenOfTarget = await Children(target)
    
            let strainId:string = event.target.attributes[0].nodeValue       
            let otherstrainId:(string|number) = event.target.id
    
            // await props.global.setClickedStrain(text)
            await props.global.setCurrentStrain(text)
            await props.setClickedStrain(text)
    
            if (props.clickedStrain === text) {            
                let callbucket:(string|object)[] = []
                    let call2 = await $.ajax({
                        method: 'get',
                        url: `api/strains/getSpecifiedStrain`,                
                        data: {  strain: text  }})                    
                    let keys = await ReturnEndpoints(call2, 'keys')
                    let vals = await ReturnEndpoints(call2, 'values')
                
                    let keylength:number = keys.length
    
                    
                let predata = await Axios.create({                        
                    transformResponse: [function (data) {                        
                        return(data)
                    }],
                })
                let axiosfactory = await predata.get(`api/strains/strain/nokey${strainId}`) // oops didn't use async had promise returned.
                
                let returnedId = JSON.parse(axiosfactory.data)        
                const {strain, dominant, funfact, parents} = returnedId
                                
                await SeeAndSave(keys, keylength, props.textState, props.setTextState)
                await SeeAndSave(vals, keylength, props.displayText, props.setDisplayText)

            } else { 
                props.setTextState('')
                props.setDisplayText('')
            }

        }
        } else {
            $('*').css('cursor', 'pointer' )            
            nouserset(true)
        }
    }
    

    const joinedClassStr = [styles.ul, styles.FlexBottom].join(" ")    
    let db:any = props.serverdata
    // let db:any = props.serverdata.getdata
    
    let strainmap = db.map( (item:any, index:number) => {  
        
        let strain = item.strain
        // let id:(number|string) = item.strainId  //oh wow was using sequelize table id getting wrong id.
        let id = item.strainId        

        return (        
            <div key={'column' + index} className="Column">                
            <img key={`id ${strain} `} src=""/>

            {props.bgToggle === 'new' ?
            <Card 
            className={styles.BstrapContCard}
            style={{ width: '18rem' }}>            
            <Card.Body>

            <li  
             id={typeof id === 'string' ? id.toString() : id}
             // id={id.toString() ? id.toString() : item.strainId}
             onClick={strainClick}
             style={{ textAlign: 'center' }}
             key={id}> {strain} </li>                          
            </Card.Body>
            </Card>
            :
            <ul>

                <li
                id={typeof id === 'string' ? id.toString() : id}
                //  id={id.toString()}
                // id={id.toString() ? id.toString() : item.strainId}
                 onClick={strainClick}

                 style={{ 
                    // border: '2px solid papayawhip',
                    letterSpacing: '0.25em',                    
                    color: 'transparent',
                    margin: '3.33em',
                    minHeight: '10em',
                    minWidth: '10em',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    listStyleType: 'none'
                }}
                  onMouseEnter={nowYouSee} onMouseLeave={nowYouDont}
                  className={styles.li} key={id}> {strain} </li>                                           
            </ul>
            }
            </div>            
        )
    })

    let allstrains: any[] = [   APIcall('any', null, null)]    
    return (            
        <>
        <Container 
            style={{ overflowY: 'scroll' }}
            className={styles.ColumnCenter}>            
           {props.BgToggle === 'new' 
           ?
           strainmap
           :    
           strainmap        
           }       
        </Container>
        <button id={styles.BgButton}
        onClick={toggleBg}></button>
        </>

    )
}