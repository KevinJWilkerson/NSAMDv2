import React, { useEffect, useState } from "react";
import hero from "../assets/images/hero.webp";
import Carousel, { CarouselItem } from "./Carousel/Carousel";

import reichman from "../assets/images/headshots/1.jpg";
import rich from "../assets/images/headshots/2.jpg";
import maughan from "../assets/images/headshots/3.jpg";
import house from "../assets/images/headshots/4.jpg";
import yoon from "../assets/images/headshots/5.jpg";
import wilkerson from "../assets/images/headshots/6.jpg";

function Home() {
  return (
    <div>
      <div className="hero flex-row">
        <img
          src={hero}
          className="hero-img"
          alt="a panaromic view of Salt Lake City"
        />
        <p>Exceptional Patient Care by Board Certified Neurosurgeons</p>
      </div>
      <Carousel>
        <CarouselItem>
          <img src={reichman} className="headshot" alt="" />
          <div className="bio">
            <h3 className="name">Mark V. Reichman, MD</h3>
            <p className="specialty">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              deleniti minima molestias.
            </p>
          </div>
        </CarouselItem>
        <CarouselItem>
          <img src={rich} className="headshot" alt="" />
          <div className="bio">
            <h3 className="name">Charles C. Rich, MD</h3>
            <p className="specialty">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              deleniti minima molestias.
            </p>
          </div>
        </CarouselItem>
        <CarouselItem>
          <img src={maughan} className="headshot" alt="" />
          <div className="bio">
            <h3 className="name">Peter H. Maughan, MD</h3>
            <p className="specialty">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              deleniti minima molestias.
            </p>
          </div>
        </CarouselItem>
        <CarouselItem>
          <img src={house} className="headshot" alt="" />
          <div className="bio">
            <h3 className="name">Paul A. House, MD</h3>
            <p className="specialty">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              deleniti minima molestias.
            </p>
          </div>
        </CarouselItem>
        <CarouselItem>
          <img src={yoon} className="headshot" alt="" />
          <div className="bio">
            <h3 className="name">Nam K. Yoon, MD</h3>
            <p className="specialty">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              deleniti minima molestias.
            </p>
          </div>
        </CarouselItem>
        <CarouselItem>
          <img src={wilkerson} className="headshot" alt="" />
          <div className="bio">
            <h3 className="name">Christopher G. Wilkerson, MD</h3>
            <p className="specialty">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              deleniti minima molestias.
            </p>
          </div>
        </CarouselItem>
      </Carousel>
      <div className="info flex-row">
        <p>
          We would be honored to assist in your neurosurgical treatment. The
          treatment provided to you will be the latest and best presently
          available within the scope of the accepted standards of care. Our team
          of highly trained surgeons treat the following conditions:
        </p>
        <div className="conditions">
          <ul>
            <li>Aneurysms</li>
            <li>Brain & Spinal Tumors</li>
            <li>Brain Hemorrhages</li>
            <li>Carpal Tunnel</li>
            <li>Chiari Malformation</li>
            <li>Epilepsy</li>
            <li>Head Trauma</li>
            <li>Hydrocephalus</li>
          </ul>
        </div>
        <div className="conditions">
          <ul>
            <li>Movement Disorders</li>
            <li>Nerve Sheath Tumors</li>
            <li>Spinal Disc Herniation, Stenosis & Degeneration</li>
            <li>Spinal Cord Trauma</li>
            <li>Spinal Fractures & Instability</li>
            <li>Trigeminal Neuralgia</li>
            <li>Vascular Malformation</li>
          </ul>
        </div>
      </div>
      <section id="reach-out" className="contact">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Reach Out</h2>
        </div>
        <div className="flex-row contact-info">
          <div>
            <h4>Neurosurgical Associates, LLC</h4>
            <p>
              Any questions or concerns?
              <br />
              Let us know and we'll be happy to talk to you!
            </p>
            <address>
              5171 Cottonwood St. <br />
              South Office <br />
              Building #1, Suite 950 <br />
              Murray, Utah 84107 <br />
              P: (801) 507-9555 <br />
              E: <a href="mailto:info@nsamd.io">info@nsamd.io</a>
            </address>
          </div>
          <div className="contact-form">
            <h4>Contact Us</h4>
            <form>
              <label htmlFor="contact-name">Your Name</label>
              <input type="text" id="contact-name" placeholder="Your Name" />

              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                placeholder="Your Message"
              ></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6053.354810481966!2d-111.891761!3d40.659041!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528a27cc66bc57%3A0x39c0399a089fc75d!2s5171%20Cottonwood%20St%20suite%20950%2C%20Murray%2C%20UT%2084107!5e0!3m2!1sen!2sus!4v1663014720232!5m2!1sen!2sus"
            width="400"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Neurosurgical Associates, LLC"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Home;
