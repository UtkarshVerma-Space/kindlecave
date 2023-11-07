import React from 'react'
import style from "./productview.module.css"
import Product from '@/components/productcard/Product'
import HomepageProductList from '../homeproductlist'
import Nav from '@/components/bottomnav/nav'
import {Foldit} from "next/font/google"

const foldit = Foldit({
  weight: '400',
  subsets: ['latin'],
})

function MapmyCard(HomepageProductList) {
  return (
    <Product
    title={HomepageProductList.title}
    id={HomepageProductList.id}
    price={HomepageProductList.price}
    edition={HomepageProductList.edition}
    author={HomepageProductList.author}
    description = {HomepageProductList.description}
    publication= {HomepageProductList.publication}
    buylink = {HomepageProductList.buylink}
    />
  )
}

export default function Productview() {
  return (

    <>

{/* <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script><lottie-player src="https://lottie.host/3170f031-1690-4417-86c7-21295387ed78/eGxh8OnYdP.json" background="##FFFFFF" speed="1" style={{width: "100px" ,height: "100px"}}   autoplay direction="1" mode="normal"></lottie-player> */}




    {/* <div className={style.heading}>
    Shop @Kindlecave
    </div> */}



    <div className={style.wrapper}>
        

{HomepageProductList.map(MapmyCard)}
<Nav
text="Explore Our Store 
"
buttontext="Open Store"
linkhref="/Store/Homepage"
/>

        
        </div>
    </>
  )
}




  




