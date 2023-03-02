import React from "react";

import './App.css';
const img ="imgg/abo.jpg"

function App() {
  return (
    <>
      <section id="homee">
      <div class="hero">
        <nav>
          <h2 class="logo">Portfo<span>lio</span></h2>
          <ul>
            <li><a href="#homee">Home</a></li>
            <li><a href="#about_us">About Us</a></li>
            <li><a href="#service_me">Services</a></li>
            {/* <li><a href="#">Skills</a></li> */}
            <li><a href="#contect_me">Contect Us</a></li>
          </ul>
          <a href="#super" class="btn">Contect</a>
        </nav>
        <div className="content">
          <h4>Hello, my name is</h4>
          <h1>Subhankar <span>Nayak</span></h1>
          <h3>I'am a Web Developer</h3>
        
          <div className="newslatter">
            <form>
              <input type="email" name="email" id="mail" placeholder="Enter Your Email" />
              <input type="submit" name="submit" value="Lates Start" />
            </form>
          </div>
        </div>
      </div>
      </section>
      {/* ---------------About Start--------- */}

      <section id="about_us">
        
        <div className="about">
          <div className="main">
            <img src={img} />
            <div className="about-text">
              <h2>About Me</h2>
              <h5>Developer <span>& Designer</span></h5>
              <p>I am a front-end web devloper. I can provide clean code and pixal
                perfect design. As a web developer, I have many years of experience 
                with CSS, JavaScript, and HTML. On top of that, my software development 
                skills allowed me to build up my object-oriented programming abilities.</p>
              <button type="button">Let's Talk</button>
            </div>
          </div>
        </div>
        
      </section>
      {/* ----------Service section start---------- */}
      <section id="service_me">
      <div className="service">
        <div className="title">
          <h2>Our Services</h2>
        </div>
        <div className="box">
          <div className="card">
            <i class="fa fa-bars" aria-hidden="true"></i>
            <h5>Web Development</h5>
            <div className="pra">
              <p>Every website should be built with two primary goals: Firstly, it needs to work
                across all devices. Secondly, it needs to be fast as possible.
              </p>

              <p className="raj">
                <a className="button" href="#">Read More</a>
              </p>
            
            </div>
          </div>
          <div className="card">
          <i class="fa fa-user-o" aria-hidden="true"></i>
            <h5>Web Development</h5>
            <div className="pra">
              <p>Every website should be built with two primary goals: Firstly, it needs to work
                across all devices. Secondly, it needs to be fast as possible.
              </p>

              <p className="raj">
                <a className="button" href="#">Read More</a>
              </p>
            
            </div>
          </div>
          <div className="card">
          <i class="fa fa-bell-o" aria-hidden="true"></i>
            <h5>Web Development</h5>
            <div className="pra">
              <p>Every website should be built with two primary goals: Firstly, it needs to work
                across all devices. Secondly, it needs to be fast as possible.
              </p>

              <p className="raj">
                <a className="button" href="#">Read More</a>
              </p>
            
            </div>
          </div>
        </div>
      </div>
      </section>
      {/* ----------contect Me---------- */}
      <section id="contect_me">
      <div className="contect-me">
        <h2>Contect Me</h2>
        <p>Let Me Get You A Beautiful Website.</p>
        <a className="button-two" href="#">Hire Me</a>
      </div>
      </section>
      {/* ----------footer start---------- */}
      <section id="super">
      <footer>
      
        <p>Subhankar Nayak</p>
        <p>My Social Account Is: </p>
        <div className="social">
          <a href="#"><i class="fa fa-envelope" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
        </div>
      </footer>
      </section>
    </>
  );
  
}

export default App;
