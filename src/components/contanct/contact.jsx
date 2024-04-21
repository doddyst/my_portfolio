import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <section className="contact" id="contact">
    <h2 className="heading">Contact<span>Me</span></h2>
    <form action="">
        <div className="input_box">
            <input type="text" name="name" placeholder="Name" required></input>
            <input type="email" name="name" placeholder="Email" required></input>
            <input type="number" name="name" placeholder="Phone Number" required></input>
            <input type="text" name="name" placeholder="Subject"></input>
        </div>
        <textarea name="" id="" cols="30" rows="10" placeholder="Your Massage"></textarea>
        <input type="submit" value="send Message" class="btn"></input>
    </form>
</section>
  )
}

export default Contact
