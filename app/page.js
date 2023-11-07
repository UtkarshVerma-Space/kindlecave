" use client"
import Homepage from '@/components/Homepage/Homepage'
import Image from 'next/image'
import Nav from '@/components/bottomnav/nav'
import Productview from '@/components/Homepage/ProductView/Productview'
import Link from 'next/link'
import Head from 'next/head'




export default function Home() {
  return (
    
       <>

<Head>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Foldit&family=Satisfy&display=swap" rel="stylesheet"/>
</link>
</link>
</Head>

<center>






<Homepage/>


<p style={{maxWidth:"300px", fontSize:"12px", marginTop: "20px"}}>

We are working on making more products available to you at reasonable price. Currently we have in total #1 Product to explore.
<br />
<b>We are building a platform where you can buy anything and everything you might want to buy online</b>

</p>
</center>




<p 
style={{textAlign:"center", color:"green", marginBottom:"200px"}}
>
  <Link href="/Contacts/Contactus">
  Contact 
  </Link>
  | 
  <Link href="/Contacts/Privacy">
  Privacy Policy 
  </Link>
  | 
  <Link href="/Contacts/about">
  About
  </Link>
   | T&C | 
  <Link href="/Contacts/Refund">
  Refund and cancellation 
  </Link>
  </p>












       </>
  )
}
