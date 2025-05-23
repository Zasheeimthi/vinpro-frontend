import React, { use, useEffect, useState } from "react";
import axios from "axios";

function Home3Team() {
  const [members, setMembers] = useState(null);
    
    useEffect(() => {
      getTeamlist();
    }, []);
  
    const API_URL = process.env.NEXT_PUBLIC_API_URL; //"http://localhost:8055/";
    const getTeamlist = async() => {
      try {
        let respData = await axios.get(`${API_URL}items/team_members?sort=-date_created`);
        console.log(respData);
        
        if (respData.status === 200 && respData.data.data.length > 0) {
          setMembers(respData.data.data);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
  }
  
  return (
    <div className="home3-team-area sec-mar">
    <div className="container">
      <div className="row mb-55 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
        <div className="col-lg-12 d-flex justify-content-center">
          <div className="section-title-3 text-center">
            <h2>Team Members</h2>
            <p>Services are professional offerings provided by businesses to meet specific needs or solve
            problems for their customers. Services can range from your budject.</p>
          </div>
        </div>
      </div> 
      <div className="row" style={{alignItems: "center", justifyContent: "center"}}>
      {members && members.map((item,i) =>{
        var delay = (100 * i) + 100;
        return <div className="col-lg-3 col-sm-6 experts wow animate fadeInUp" style={{marginBottom: 30}} data-wow-delay={delay+"ms"} data-wow-duration="1500ms">
          <div className="experts-card magnetic-item">
            <div className="experts-img">
              <img className="img-fluid" src={API_URL+'assets/'+item?.image} alt="" />
              {/* <div className="expert-social">
                <ul>
                  <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                  <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                  <li><a href="https://www.instagram.com/"><i className="bx bxl-pinterest-alt" /></a></li>
                  <li><a href="https://www.pinterest.com/"><i className="bx bxl-instagram" /></a></li>
                </ul>
              </div> */}
            </div>
            <div className="experts-content">
              <h4>{item?.first_name + ' ' + item?.last_name}</h4>
              <span>{item?.designation}</span>
            </div>
          </div>
        </div> }
      )}
        {/*}
        <div className="col-lg-3 col-sm-6 experts wow animate fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
          <div className="experts-card magnetic-item">
            <div className="experts-img">
              <img className="img-fluid" src="assets/img/home-4/12.png" alt="" />
              <div className="expert-social">
                <ul>
                  <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                  <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                  <li><a href="https://www.instagram.com/"><i className="bx bxl-pinterest-alt" /></a></li>
                  <li><a href="https://www.pinterest.com/"><i className="bx bxl-instagram" /></a></li>
                </ul>
              </div>
            </div>
            <div className="experts-content">
              <h4>Vignesh SG</h4>
              <span>Director</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 experts wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
          <div className="experts-card magnetic-item">
            <div className="experts-img">
              <img className="img-fluid" src="assets/img/home-4/13.png" alt="" />
              <div className="expert-social">
                <ul>
                  <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                  <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                  <li><a href="https://www.instagram.com/"><i className="bx bxl-pinterest-alt" /></a></li>
                  <li><a href="https://www.pinterest.com/"><i className="bx bxl-instagram" /></a></li>
                </ul>
              </div>
            </div>
            <div className="experts-content">
              <h4>Naresh B</h4>
              <span>Managing  &amp; Director</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 experts wow animate fadeInUp" data-wow-delay="500ms" data-wow-duration="1500ms">
          <div className="experts-card magnetic-item">
            <div className="experts-img">
              <img className="img-fluid" src="assets/img/home-4/14.png" alt="" />
              <div className="expert-social">
                <ul>
                  <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                  <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                  <li><a href="https://www.instagram.com/"><i className="bx bxl-pinterest-alt" /></a></li>
                  <li><a href="https://www.pinterest.com/"><i className="bx bxl-instagram" /></a></li>
                </ul>
              </div>
            </div>
            <div className="experts-content">
              <h4>Visesh PV</h4>
              <span>Executive &amp; Director</span>
            </div>
          </div>
        </div>
        */}
      </div> 
    </div>
  </div>
  
  )
}

export default Home3Team
