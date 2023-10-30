import style from "./about.module.css"
export default function page() {
  return (
<>
<div className={style.wrapper}>
<div className={style.container}>

<h1>About Us</h1>
<p>Welcome to KindleCave.store, your one-stop destination for educational resources, books, and custom products tailored to the needs of school students, with a primary focus on Class 11 and 12. We are dedicated to empowering students with affordable educational materials and personalized merchandise. Here&apos;s a little insight into who we are and what we do:</p>

<h2>Our Mission</h2>
<p>At KindleCave.store, our mission is simple: to support students on their educational journey. We believe that education is a fundamental right, and we are committed to making it more accessible. Our goal is to provide high-quality educational resources at discounted prices to help students excel in their studies.</p>



<h2>What We Offer</h2>
<li>Discounted Books: We understand the financial challenges that students and their families face. That&apos;s why we offer a wide selection of textbooks and reference materials at prices that won&apos;t break the bank. Our collection is handpicked to cater to the needs of Class 11 and 12 students.</li>

<li>Handwritten Notes: In addition to textbooks, we provide meticulously crafted handwritten notes, prepared by experienced educators. These notes are designed to simplify complex topics and enhance your learning experience.</li>

<li>Printing Facility: Need to print out your assignments, projects, or study materials? We&apos; ve got you covered. Our convenient printing facility ensures that you can quickly get your documents ready for submission.</li>

<li>Customized Products: Express your unique style with our range of customized products. Whether it&apos;s a personalized T-shirt, notebook, or any other item, we can help you create something that reflects your individuality.</li>



<h2>Connect With Us</h2>
<p>Have questions, feedback, or special requests? We&apos;re here for you. Feel free to reach out to our dedicated support team, who will assist you with any queries you may have.</p>
<p>Thank you for choosing KindleCave.store as your trusted educational partner. We look forward to supporting you on your academic journey.</p>

<h1> Our Team</h1>
<table class={style.teamtable}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Post</th>
                <th>Time of Joining</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Utkarsh Verma</td>
                <td>Director </td>
                <td>2023-10-25</td>
            </tr>
            <tr>
                <td>Hiring</td>
                <td>PDF EDITOR </td>
                <td>E-Mail Us</td>
            </tr>
            <tr>
                <td>Hiring</td>
                <td>MARKETING AND SALES PERSON </td>
                <td>E-Mail Us</td>
            </tr>
            <tr>
                <td>Hiring</td>
                <td> CTO </td>
                <td>E-Mail Us</td>
            </tr>
            <tr>
                <td>Hiring</td>
                <td> BACKEND OFFLINE </td>
                <td>E-Mail Us</td>
            </tr>
        </tbody>
    </table>
</div>
</div>

</>
  )
}
