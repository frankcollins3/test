// @ts-nocheck

import styles from 'styles/Strain.module.scss'
import Container from 'react-bootstrap/Container';
import getAllStrain from 'pages/api/strains/strain'
import React, { useEffect, useState, useContext, createContext } from 'react'
import $ from 'jquery'
import Axios from 'axios';
let relativepath = `/api/getAllStrain.ts`
import styled from 'styled-components'
import Display from 'styles/StrainDisplay'
import {useGame} from 'Contexts/game'

import AllStrainContainer from 'components/AllStrainContainer'
import StrainDisplay from 'components/StrainDisplay'
import StrainDisplayValue from 'components/strainDisplayvalue'
import PickMines from 'components/PickMines'

import Random from 'utility/Randomizer'
import Children from 'utility/jqChildren'
import ReturnUrl from 'utility/ReturnUrl'
import AjaxCall from 'utility/AjaxCall'
import CSS from 'utility/CSStool'
import DataCall from 'utility/DataCallJS'
import regularStrainsES6 from 'utility/regularStrainsES6'
import allstrainsES6func from 'utility/allstrainsES6'
import APIcall from 'utility/APIcall'




                    
export default  function Strain ( props:any, context ) {       

        let appCurrentUser = props.appCurrentUser
        let appCurrentUserName = props.appCurrentUserName


    let explicitprops = props

    let localhost = props.localhost
    let ALLstrainPOSTurl = props.ALLstrainPOSTurl
    let ALLstrainGETurl = props.ALLstrainGETurl
    console.log('ALLstrainGETurl')
    console.log(ALLstrainGETurl)

    const TextContext = createContext('')
    
    // * State 
    const [clickedStrain, setClickedStrain] = useState()
    const [bgToggle, setBgToggle] = useState('new')
    const [textState, setTextState] = useState('')
    const [displayText, setDisplayText] = useState('')

    const [serverdata2, setServerdata2] = useState([{strain: 'white widow', strainId: 1}, {strain: 'Gorilla Glue #4', strainId: 2}, {strain: 'mimosa', strainId: 3}  ])

    const {currentUser, currentUserName, currentuseridset, currentUserId, currentusernameset, noUser, nouserset, userStrains, userstrainset } = useGame()

    useEffect( () => {
      console.log('useEffect.. currentUser from from strain')
      const checkuser = async () => {
        let currentusername =   window.localStorage.getItem('currentUserName')
        let currentuserid =  window.localStorage.getItem('currentUserId')
        let prestrains = window.localStorage.getItem('myStrains')          
        let splitId = prestrains?.split(',')        
        
        let filteredId = await splitId?.filter( strainsId => strainsId !== ',' && strainsId.length === 1)      
                                         
        currentusernameset(currentusername)
        currentuseridset(currentuserid)    
        userstrainset(filteredId)            
      }
      checkuser()
  }, [currentUser])

   useEffect( () => {
    
    (async() => {
      await allstrainsES6func(ALLstrainGETurl, 'postALL');
      let prestrains = await allstrainsES6func(ALLstrainGETurl, 'getALL');    
      let allstrainsGET = prestrains.data.getdata
      let apistrains = await APIcall('all', null, null)



      console.log('allstrainsGET')
      console.log(allstrainsGET)
      setServerdata2(apistrains)
      // setServerdata2(['yeah', 'thats', 'fine'])
    })()
    //   (async() => {
    // $.ajax({
    //   method: 'post',
    //   url: '/api/strains/allStrain',
    //   data: {
    //    key: 'all'
    //   }
    // }).then( (msg) => {
    //   console.log('msg we are in the .then() statement')
    //   console.log(msg)      
    // })
    // })()
  }, [])
  // }


    const globalstrain = props.globalstate;
    let userId = currentUser ? currentUser.id : '';

    const classList:string = [styles.Page, 'Column'].join(" ")
    const textClasses:string = [styles.FontSizeTest, styles.BorderTest].join(" ");
    
    const access = async (context:any) => {             
    let ajaxstraindata = await DataCall('axios', `${url}/api/strains/allStrain`, null) // /pages/api/getAllStrains      
    let url:string = await ReturnUrl(context);        
  }
    
    const returnUrl = async (context:any) => { 
      let url:string = await ReturnUrl(context)      
      return url
    } // no 1liner?
    returnUrl()

    const usercheck = async () => {
      console.log('appCurrentUser')
      console.log(appCurrentUser)
      console.log('appCurrentUserName')
      console.log(appCurrentUserName)
      
      console.log('userStrain')
      console.log(userStrains)
    }

    const LOGOUT = () => {
      // window.localStorage.setItem('currentUserId', '')
      // window.localStorage.setItem('currentUserName', '')
      window.localStorage.setItem('currentUserName', '')            
      window.localStorage.setItem('currentUserId', '')            
      currentusernameset('')
      currentuseridset('')
    }

    const noUserClickMine = (event) => {
      

      $(event.target)
      .animate({
        opacity: '0.8'  
      }, 500)
      .animate({
        opacity: '0.3'
      }, 500)
      .animate({
        opacity: '0.3'
      }, 500, () => {
        setTimeout( () => {
          location.href = '/LoginLogout'          
          nouserset(false);
          $('*').css('cursor', 'pointer' )
        }, 1000)

      })

      setTimeout( () => {
        $('*')        
        .animate({
          opacity: '0.8'  
        }, 500)
        .animate({
          opacity: '0.3'
        }, 500)
        .animate({
          opacity: '0.3'
        })
      }, 2000)
    }

    const testfunc = async () => {
        console.log('hey were testing');
        // let allstrains = await allstrainsES6func(ALLstrainGETurl, 'getALL')
        let allstrains = await allstrainsES6func(ALLstrainGETurl, 'postALL')
        console.log('allstrains')
        console.log(allstrains)

    }


    return (

      <>
        
        

          <Container 
          style={ { minWidth: '100%'}}
          className={classList}>

            
            { noUser === true ? 
            <div className="Row">
              <p id="noUserText" > You Must Be Mine To Dig For Gold. </p>
            </div>
            :
            <pre></pre>
          }
            <AllStrainContainer   
                let global={explicitprops}
                strainSave={props.strainSave} setStrainSave={props.setStrainSave}
                // globalState={globalstrain}
                bgToggle={bgToggle} setBgToggle={setBgToggle}
                textState={textState} setTextState={setTextState}
                displayText={displayText} setDisplayText={setDisplayText}
                clickedStrain={clickedStrain} setClickedStrain={setClickedStrain}       
                // serverdata={props.serverdata}      
                serverdata={serverdata2}      
                url={props.url} setUrl={props.setUrl}
                allStrains={props.allStrains} setAllStrains={props.setAllStrains}
                currentStrain={props.currentStrain} setCurrentStrain={props.setCurrentStrain}                            
                />
            {
              noUser === true ?
              <div style={{
                height: '10em',
                width: '10em',
                display: 'flex', justifyContent: 'center', alignItems: 'center', 
                flexDirection: 'row'
              }} 
              >
                <img 
                onClick={noUserClickMine}
                style={{ transform: 'scale(0.10)', boxShadow: '18px 50px 10px papayawhip', borderRadius: '50%', padding: '0', margin: '0' }}  src="/img/mine.png"/>              
            </div>            
              : 
              <div></div>
            }

              <div className={styles.Rows}>
              {props.strainSave === false 
                 ?
                 <>
              <StrainDisplay  
                strainSave={props.strainSave} setStrainSave={props.setStrainSave}
                // globalState={globalstrain}
                textState={textState} setTextState={setTextState}
                bgToggle={bgToggle} setBgToggle={setBgToggle}
                clickedStrain={clickedStrain} setClickedStrain={setClickedStrain}       
                />

              <StrainDisplayValue
              // globalState={globalstrain}
              strainSave={props.strainSave} setStrainSave={props.setStrainSave}
              displayText={displayText} setDisplayText={setDisplayText}
              bgToggle={bgToggle} setBgToggle={setBgToggle}
              clickedStrain={clickedStrain} setClickedStrain={setClickedStrain}       
              >
              </StrainDisplayValue>
                </>
              :
              ''
            }
                </div>                
             {props.strainSave === false 
                ? 
                ''
              :
              <PickMines
              localhost={localhost}
              url={returnUrl}
              global={explicitprops}
              contextprops={context}
              />
              }
              <button onClick={testfunc} style={{ height: '85px', width: '85px', backgroundColor: 'powderblue  ', borderRadius: '50%', }}></button>
          </Container>
          </>
            
              
    )
}

export async function getServerSideProps(context:any) {              
  let url:any = await ReturnUrl(context);    
  let localhost = url
  // let pokeurl = `https://pokeapi.co/api/v2/pokemon/`    
  // let predata = await fetch(new URL(`${url}/api/strains/strain`))            
  // let serverdata = await predata.json()     

  let ALLstrainGETurl = `${url}/api/strains/strain`
  let ALLstrainPOSTurl = `${url}/api/strains/allStrain`
  
return {
props: {
  // localhost, ALLstrainPOSTurl, allStrainGETurl
  localhost, ALLstrainPOSTurl, ALLstrainGETurl
}
};
}
