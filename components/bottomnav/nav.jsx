import React from "react";

import Link from "next/link";

import style from "./nav.module.css";
export default function Nav(props) {
  return (

    <>

  <div className={style.blur}>
  </div>

    <div className={style.navboxbottom}>
      <div className={style.navbutton}>
        <h1>
          {props.text}
          </h1>
        <Link href={props.linkhref}>
      <div className={style.buttonnav}>{props.buttontext} </div>
        </Link>
      </div>
    </div>
    </>
  );
}

// join-item btn btn-active
// join-item btn
