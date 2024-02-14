import React from "react";

export default function Contact() {
    return (
        <section id="contact-container">
            <section className="about-left">
                <h2>Location</h2>
                <p>Church St, Haridevpur, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001</p>
                <h2>Opening Hours: </h2>
                <h3>Tuesday to Sunday</h3>
                <p>11.00 am to 12.30am</p>
                <h2>Phone Number: </h2>
                <p>+91 9135275684</p>
                <h2>Reservation Inquiries:</h2>
                <p>
                    For table reservations or any dining-related inquiries, please contact us at +91 9135275684
                </p>
                <h2>Event Bookings: </h2>
                <p>
                    Planning a special event? We would be delighted to host your celebration. For event inquiries, please contact our events team at +91 9135275684.
                </p>
            </section>
            <section className="about-right">
                <a href="https://maps.app.goo.gl/AQt9zMZhjhsZAgGP8" target="_blank" rel="noopener noreferrer">
                    <img src="https://i.pinimg.com/736x/7c/6a/a3/7c6aa38ccdc5d2d4d1fb57fe742601be.jpg" alt="google-maps" width="400"/>                
                </a>
            </section>
        </section>
    )
}