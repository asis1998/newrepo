import React from 'react'

const Info = () => {
  return (
    <section className="flex container banner">

    <div className="info-content flex">
      <div className="icon-container flex">
      <i class="fa-solid fa-ribbon"></i>
      </div>
      <div>
        <span>IT</span>
        <p>Graduate</p>
      </div>
    </div>
    <div className="info-divider"></div>
    <div className="info-content flex">
      <div className="icon-container flex">
      <i class="fa-solid fa-ribbon"></i>
      </div>
      <div>
        <span>5+ projects</span>
        <p>Completed</p>
      </div>
    </div>
    <div className="info-divider"></div>
    <div className="info-content flex">
      <div className="icon-container flex">
      <i class="fa-solid fa-ribbon"></i>
      </div>
      <div>
        <span>1 year</span>
        <p>Experience</p>
      </div>
    </div>
   </section>
  )
}

export default Info