"use client";
import React from "react";
import Image from "next/image";
import picture from "../assets/Pe.png";
import cut from "../assets/back.png";
import bag from "../assets/bag.png";
import style from "./product.module.css";
import pe from "../assets/Pe.png";
import { useState } from "react";
import Link from "next/link"


export default function Product(props) {
  const [Showmodal, setShowmodal] = useState(false);

  function OpenModal() {
    return setShowmodal(true);
  }
  function CloseModal() {
    return setShowmodal(false);
  }

  // Modal | Popup Box Card
  function PopupBox() {
    return (
      <div className={style.wraper}>
        <div className={style.popupbpx}>
          <div className={style.goback}>
            <Image
              onClick={CloseModal}
              width="20"
              height="20"
              src={cut}
              alt="profileimg"
            />
          </div>
          <div className={style.productinfo}>
            <h1 className={style.BookTitle}>{props.title}</h1>
            <span className={style.AuthorName}>
              <div>{props.author}</div>
              <div style={{ color: "rgba(28, 123, 201, 0.692)" }}>
                {props.edition}
              </div>
              <div style={{ color: "green" }}>{props.publication}</div>
            </span>
            <p className={style.Description}>{props.description}</p>
          </div>
          <Link prefetch={false} className={style.link} href={props.buylink}>
          <button className={style.BuyButton}>Buy Now</button>
          </Link>
        </div>
      </div>
    );
  }

  //  Products Card
  return (
    // console.log(props.id)

    <div className={style.box}>
      <div onClick={OpenModal} className={style.containerProduct}>
        <div className={style.prodDetails}>
          <div className={style.Img}>
            <Image width="200" height="200" src={picture} alt="profileimg" />
          </div>
          <div className={style.Title}>{props.title}</div>
        </div>
        <div className={style.buylink}>
          <button onClick={OpenModal}>
            <div className={style.Bagimg}>
              <Image width="22" height="22" src={bag} alt="Buy Button" />
            </div>
            <div className={style.pricetag}>{props.price}</div>
          </button>
        </div>
      </div>

      {Showmodal && <PopupBox />}
    </div>
  );
}
