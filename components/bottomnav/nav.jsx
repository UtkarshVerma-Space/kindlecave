import React from 'react'

import Link from "next/link"



import style from "./nav.module.css"
export default function Nav(props) {
  return (
<div className={style.navboxbottom}>

<div className="join">
<Link prefetch={false} className={style.link} href="/About">
                    
  <button className="join-item btn">SCHOOL</button>
                </Link>
  <button className="join-item btn">EXPLORE</button>

</div>
</div>

  )
}

// join-item btn btn-active
// join-item btn