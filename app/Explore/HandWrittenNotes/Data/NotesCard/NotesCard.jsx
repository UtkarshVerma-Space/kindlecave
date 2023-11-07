import React from 'react'
import Image from 'next/image'
import style from "./Notes.module.css"
import downicon from "./assets/downicon.png"
import purchaseicon from "./assets/purchase.png"


export default function Notes() {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>

        <div className={style.notesinfo}>
          <div className={style.title}>
            Government Budget
          </div>
          <div className={style.tag}>
            <span>Economics</span>
            <span>CBSE</span>
            <span>2023-34</span>

          </div>
          <div className={style.description}>
            Government Budget full chapter with bullet points and higlighted points. NCERT Based notes. 
          </div>
        </div>

        <div className={style.notesnav}>


<div className={style.nav}>

<div className={style.navbutton}>
<Image width="15" height="15" src={downicon} alt="profileimg" />
<h1>View</h1>
</div>  

<div className={style.navbutton}>
<Image width="20" height="20" src={purchaseicon} alt="profileimg" />
<h1>Hard-Copy</h1>
</div> 
</div>
        </div>


      </div>
    </div>
  )
}
