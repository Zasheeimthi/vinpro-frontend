import Link from 'next/link';
import React from 'react'
import Marquee from "react-fast-marquee";
function Home3Contact() {
  return (
    <div className="home3-contact-area">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12">
        <div className="contact-wrapper text-center">
          <Marquee className="marquee_text">WORK WITH US.</Marquee>
          <h1 style={{fontSize:200, color:'#edebeb', position:'absolute', top:180, textAlign:'center', width:'100%'}}>LET'S TALK</h1>
          <div className="contact-btn magnetic-item  wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <Link legacyBehavior href="/contact">
              <a>
                Contact With Us.
                <svg width={32} height={32} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Home3Contact
