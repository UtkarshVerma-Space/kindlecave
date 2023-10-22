import React from 'react'
import style from "./home.module.css"
import Content from './Content'

function Nav() {
    return(<>
    
    <div className={style.info}>
        <span>
        15k + CBSE NCERT SOLVES
        </span>
        </div>

        <div className={style.nav}>
            <li>NCERT</li>
            <li>PCM</li>
            <li>PCB</li>
            <li>COMMERCE</li>
        </div>


    </>)
}




export default function Homepage() {
  return (
    <div className={style.main}>




{/* Nav bar  */}
<Nav/>




        
{/* Container */}

<Content/>
   



    </div>
  )
}
