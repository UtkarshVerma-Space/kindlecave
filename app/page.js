" use client"

import Image from 'next/image'
import BooklistOne from './HomepageBooks/booklist'
// Product Card
import Product from '@/components/productcard/Product'


function MapmyCard(BooklistOne) {
  return (
    <Product
    title={BooklistOne.title}
    id={BooklistOne.id}
    price={BooklistOne.price}
    edition={BooklistOne.edition}
    author={BooklistOne.author}
    description = {BooklistOne.description}
    publication= {BooklistOne.publication}
    />
  )
}







export default function Home() {
  return (
    
       <>



{/* Mapping the books card */}
{BooklistOne.map(MapmyCard)}

<center>

<p style={{maxWidth:"300px", fontSize:"12px", marginTop: "20px"}}>

We are working on making more products available to you at reasonable price. Currently we have in total #1 Product to explore.
<br />
<b>We are building a platform where you can buy anything and everything you might want to buy online</b>

</p>
</center>



       </>
  )
}
