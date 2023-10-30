" use client"
import Homepage from '@/components/Homepage/Homepage'
import Image from 'next/image'
import BooklistOne from './HomepageBooks/booklist'
// Product Card
import Product from '@/components/productcard/Product'
import Nav from '@/components/bottomnav/nav'

import Link from 'next/link'





export default function Home() {
  return (
    
       <>


{/* Mapping the books card */}
{/* {BooklistOne.map(MapmyCard)} */}

<center>

<p style={{maxWidth:"300px", fontSize:"12px", marginTop: "20px"}}>

We are working on making more products available to you at reasonable price. Currently we have in total #1 Product to explore.
<br />
<b>We are building a platform where you can buy anything and everything you might want to buy online</b>

</p>
</center>




<p 
style={{textAlign:"center", color:"green"}}
>
  <Link href="/Contacts/Contactus">
  Contact 
  </Link>
  | 
  <Link href="/Contacts/Privacy">
  Privacy Policy 
  </Link>
  | About | T&C | 
  <Link href="/Contacts/Refund">
  Refund and cancellation 
  </Link>
  </p>






<Homepage/>


{/* Bottom Nav */}
<Nav
text="Explore Our Store 
"
buttontext="Open Store"
linkhref="/Store/Homepage"
/>


       </>
  )
}
