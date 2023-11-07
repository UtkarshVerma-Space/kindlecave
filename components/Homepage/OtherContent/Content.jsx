import React from 'react'
import style from "./content.module.css"
import Product from '../../productcard/Product'
import BooklistOne from '@/app/HomepageBooks/booklist'
import Link from 'next/link'

  
  


export default function Content() {
  return (
    <div className={style.content}>
      
    <div className={style.multiple}>
        <div style={{backgroundColor: "#d7fdd6"}}> 
        
        <h1>Sample Paper</h1>
        <p>Previous IO yr Question paper</p>
        <button>Explore</button>

        </div>
        <div style={{backgroundColor: "#dde7ff"}}>
        <h1>Hand Written Notes</h1>
        <p>NCERT Word by Word Toppers notes</p>
        <button>
          <Link href="/Explore/HandWrittenNotes">
          Explore
          </Link>
          </button>
        </div>
    </div>





</div>
  )
}
