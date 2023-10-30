import React from 'react'
import style from "./topnav.module.css"
import Link from "next/link"

export default function Topnav() {
  return (
    <>
    
    <marquee  className={style.abovetext}>  The site is still under construction for any issue contact 7985748915 / For Bulk order or B2B join our partner program and get admin control           </marquee >
    <div className={style.Topnav}>
    <Link prefetch={false} className={style.link} href="/">
    <h1> <span>k</span>indlecave</h1>
    </Link>

   </div>
    </>
  )
}
