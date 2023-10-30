import React from 'react'
import style from "./contact.module.css"
export default function Contact() {
  return (
    <div>


        

<div className={style.Wrapper}>
    <div className={style.container}>
        <div className={style.head}>
        <h1>Contact Us</h1>
        <p>Connecting is not just a click, it's the first step towards a meaningful conversation.</p>
        </div>

        <div className={style.contact}>
            <div>
                <h2>Write Us @</h2>
                <p>CONTACTUTKARSHVERMA@PROTON.ME</p>
                <p>CONTACTUTKARSHVERMA@GMAIL.COM</p>

            </div>
            <div>
                <h2>Call Us @</h2>
                <p>7985748915</p>
                <p>You can SMS or Whatsapp us too.</p>
            </div>
            <div>
            <h2>Business Hours</h2>
            <p>Monday to Sunday</p>
            <p>02:00 pm to 12 am</p>
            </div>
            <div>
            <h2>Business Location</h2>
            <p>Awas Vikas Colony</p>
            <p>Gonda, Uttarpradesh, India 271001</p>
            <p></p>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}
