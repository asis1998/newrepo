import React from 'react'
import ProfilePic from '../assets/a.png'

const Hero = () => {
  return (
    <section id="home" className="container hero-section">
      <div className="grid hero">
        <div className="left flex">
          <p>
            Hi i'm <strong>Aashish Shrestha</strong>
          </p>
          <h3>Software Engineer</h3>
          <p>I love coding and teach others what I know</p>
          <button className="download-btn">
            <a href="../assets/a.png" download>
              Download CV <i class="fa-solid fa-download"></i>
            </a>
          </button>
        </div>
        <div className="right flex">
          <img src={ProfilePic} alt="profile-pic" />
        </div>
      </div>
    </section>
  )
}

export default Hero