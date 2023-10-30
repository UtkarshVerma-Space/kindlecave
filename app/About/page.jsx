import React from 'react'
import Image from 'next/image'
import qucode from "./assets/pay.jpg"
import style from "./payment.module.css"
import Link from "next/link"

export default function page() {
  return (

    <div className={style.pay} >
      <h1> PAY ₹450 ONLY </h1>
    <Image width="100%" height="100%" src={qucode} alt="QrCode" />
    <Link prefetch={false} className={style.link} href="/">
    <h1>Go Back to Home</h1>
    </Link>
    </div>







    

  )
}

