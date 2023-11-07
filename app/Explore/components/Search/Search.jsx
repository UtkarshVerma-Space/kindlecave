import React from 'react'
import style from "./search.module.css"
export default function Search() {
  return (
<>
    <form action="/">

<div className={style.search}>
<input placeholder=' Search by author or subject' type="search" />

<h1>Most Searched</h1>
</div>

    </form>
</>
  )
}
