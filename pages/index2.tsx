import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import styles from '../styles/Home.module.scss'
import Axios from 'axios'
import APIcall from '../utility/APIcall'
import Random from '../utility/Randomizer'
import Client from '../utility/Prisma'
import CSS from '../utility/CSStool'
// import allStrain from './api/allStrain'
import $ from 'jquery' // import * as $ from 'jquery'
import React,  { useEffect, useState} from 'react'
import { PrismaClient } from '@prisma/client'
let prisma; 

import NavBar from 'components/NavBar'


// id | strainId | strain | dominant | funfact | parents | createdAt | updatedAt

// const user = await prisma.user.create({
//   data: {
//     email: 'elsa@prisma.io',
//     name: 'Elsa Prisma',
//   },
// })




export default function Home( props: any, {poke}:any) {
  
  const [ pokemon, setPokemon ] = useState('')
  const [currentStrain, setCurrentStrain] = useState('')
  const [savedStrains, setSavedStrains] = useState('')
  
  const [users, setUsers] = useState([])
  const [dbStrains, setDbStrains] = useState([])
  
  const classList = [styles.Container, styles.Column].join(" ")
  
  const checkAPI = async () => {  
    let predata: any[] = await [APIcall('all', null, setCurrentStrain)]        
    let randomstrain = await APIcall('random', null, setCurrentStrain)          
  }

  // * this loads up all the other data! I don't want this page to be 
  // const strainfunc = async () => {
  //   $.ajax({
  //     method: 'post',
  //     url: '/api/strains/allStrain',
  //     data: {
  //      key: 'all'
  //     }
  //   }).then( (msg) => {
  //     console.log('msg we are in the .then() statement')
  //     console.log(msg)      
  //   })
  // }

  const getRouteTest = async () => {    
    $.ajax({
      method: 'get',
      url: '/api/getAllStrain',
        data: {
          key: 'GETall'
        }
      }).then( (resFromAPI) => {
        let res = resFromAPI        
      })
  }
  
  return (    
    <div className={classList}>          
    <main className={styles.main}>
        <h1>         
          {currentStrain || 'hey'}
        </h1>            

        <button onClick={checkAPI} type="button"> </button>

          <button     
           className="button"    
            // * button to trigger load all state
          //  onClick={strainfunc}
           type="submit"
           style={{ minHeight: '5em', minWidth: '5em', backgroundColor: 'papayawhip', borderRadius: '50%'}}
           id='straininput'          
          >
          </button>

          <button     
           className="button"     
           onClick={getRouteTest}
           type="submit"
           style={{ minHeight: '5em', minWidth: '5em', backgroundColor: 'orange', borderRadius: '50%'}}
           id='straininput'          
          >
          </button>

    </main>

    </div>
  )
}


export async function getStaticProps() {

  let allstrains:any = await APIcall('all', null, null)
  prisma = new PrismaClient()
  
  let allusers = await prisma.users.findMany()
  let dbstrains = await prisma.strains.findMany()
  let strainlength = allstrains.length
   
  let randomStrain = await Random(allstrains)
 
  let strainname:string = randomStrain.strain

  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
  let pokemon:any = await response.json()

    return {
      props: { poke: pokemon } // will be passed to the page component as props
    }
  }