import React from 'react'
import style from "./handwritten.module.css"
import Search from '../components/Search/Search'
import Notes from './Data/NotesCard/NotesCard'
export default function page() {


  return (



<>


<Search/>


<div className={style.container}>

        <Notes/>




</div>




</>





  )
}
