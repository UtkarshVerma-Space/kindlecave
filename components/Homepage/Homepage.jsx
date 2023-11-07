import React from 'react'
import style from "./home.module.css"
import Content from './OtherContent/Content'
import Productview from './ProductView/Productview'


export default function Homepage() {
  return (
    <div className={style.main}>

{/* Container */}

<Content/>
   


<div className={style.container}>
<Productview/>
</div>

        




    </div>
  )
}
