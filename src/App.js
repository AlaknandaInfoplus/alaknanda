import "./App.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imgg from "../src/photo/logo512.png";
import imgg1 from "../src/photo/kasrat.png";
import imgg3 from "../src/photo/2.jpg";

function App() {
  return (
    <>
      <body class="page-top">
        <header class="masthead">
          <div class="container d-flex h-100 jay align-items-center">
            <div class="mx-auto text-center">
              <h1 class="mx-auto my-0 text-uppercase">Alaknanda Infoplus</h1>
              <h2 class="text-light mx-auto mt-2 mb-5">
                We don't just write code. we compose digital symphonies.
              </h2>
              <a href="#about" class="btn btn-primary js-scroll-trigger">
                Learn More
              </a>
            </div>
          </div>
        </header>

        <section id="about" class="about-section text-center">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <h2 class="text-white mb-4">
                  Alakanada Infotech is empowering business to grow on higher
                  steps of sucess through technologies.
                </h2>
                <hr class="accessory" />
                <p class="text-white-50">
                  Alaknanda InfoPlus is a dynamic and innovative company
                  specializing in providing comprehensive IT solutions and
                  services. Established with a vision to deliver cutting-edge
                  technology solutions to businesses of all sizes.{" "}
                </p>
                <img src={imgg} class="col-lg-6 img-fluid unionicon" alt="" />{" "}
                <img src={imgg1} class="col-lg-6 img-fluid cresticon" alt="" />
                <p class="text-white-50">
                  At Alaknanda InfoPlus, we are passionate about leveraging
                  technology to drive business success. With a focus on
                  innovation, quality, and client satisfaction, we strive to
                  deliver tailored IT solutions that empower our clients to
                  achieve their goals efficiently and effectively.{" "}
                </p>
                {/* <h3 class="text-white mb-4">Meet Our Team</h3> */}
                {/* <hr class="accessory" width="50%" /> */}
                {/* <br> */}
              </div>
            </div>
{/* 
            <div class="container-fluid">
        
              <div class="row">
                <div class="col-sm-3">
                  <figure class="one">
                    <img
                      src="https://i.postimg.cc/CxCTbWz8/maleheadshot.jpg"
                      alt=""
                    />
                    <p class="text-white headshottext">Rutik Vasani</p>
                    <p class="text-white headshotgrade">
                      {" "}
                      <b>Position</b>: Founder
                    </p>
                  </figure>
                </div>

                <div class="col-sm-3">
                  <figure class="one">
                    <img
                      src="https://i.postimg.cc/CxCTbWz8/maleheadshot.jpg"
                      alt=""
                    />
                    <p class="text-white headshottext">Rutvik Nathani</p>
                    <p class="text-white headshotgrade">
                      {" "}
                      <b>Position</b>: Senior Developer
                    </p>
                  </figure>
                </div>

                <div class="col-sm-3">
                  <figure class="one">
                    <img
                      src="https://i.postimg.cc/CxCTbWz8/maleheadshot.jpg"
                      alt=""
                    />
                    <p class="text-white headshottext">Jay Parmar</p>
                    <p class="text-white headshotgrade">
                      {" "}
                      <b>Position</b>: Node.js Developer
                    </p>
                  </figure>
                </div>

                <div class="col-sm-3">
                  <figure class="one">
                    <img
                      src="https://i.postimg.cc/CxCTbWz8/maleheadshot.jpg"
                      alt=""
                    />
                    <p class="text-white headshottext">Vishu Bhingradiya</p>
                    <p class="text-white headshotgrade">
                      {" "}
                      <b>Position</b>: UI/UX Developer
                    </p>
                  </figure>
                </div>
              </div>
            </div> */}
          
          </div>
        </section>

        <section id="projects" class="projects-section">
          <div class="container">
            {/* <!-- Featured Project Row --> */}
            <div class="row align-items-center no-gutters mb-4 mb-lg-5">
              <div class="col-xl-8 col-lg-7">
                <img class="img-fluid mb-3 mb-lg-0" src={imgg3} alt="" />
              </div>
              <div class="col-xl-4 col-lg-5">
                <div class="featured-text text-center text-lg-left">
                  <h4>KASRAT FOR GYM</h4>
                  <p class="text-black-50 mb-0">
                    Kasrat for gym is product to manage gym memberships, diets, gym
                    masters, attendance. Get your personalized report from your
                    diet , track your health with kasrat.
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- Project One Row --> */}
            {/* <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
        <div class="col-lg-6">
          <img class="img-fluid" src="https://i.postimg.cc/Nj5PbSJF/birdseye.png" alt=""/>

        </div>
        <div class="col-lg-6">
          <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-left">
                <h4 class="text-white">Fundraising</h4>
                <p class="mb-0 text-white-50">A great example of how TGS helped bridge the gap between students and alumni is participating in the college's 24-hour fundraising challenge. In 2018 they helped table all day long in the campus center, and engaged directly with their
                  student peers about why they should support the college.</p>
                <hr class="d-none d-lg-block mb-0 ml-0"/>
              </div>
            </div>
          </div>
        </div>
      </div> */}

            {/* <!-- Project Two Row --> */}
            {/* <div class="row justify-content-center no-gutters">
        <div class="col-lg-6">
          <img class="img-fluid" src="https://i.postimg.cc/W33DJmpB/nottsmall.png" alt=""/>
        </div>
        <div class="col-lg-6 order-lg-first">
          <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-right">
                <h4 class="text-white">Fostering relationships</h4>
                <p class="mb-0 text-white-50">The Garnet Society provides great feedback about ideas that College Relations has about engaging new graduates. For our Seniors, I often use them as a sounding board about how to engage them and what they'd like to see when they graduate.
                  I've found they are very candid about what they like, and will certainly let you know if something won't work. </p>
                <hr class="d-none d-lg-block mb-0 mr-0"/>
              </div>
            </div>
          </div>
        </div>
      </div> */}
          </div>
        </section>

        <section id="signup" class="signup-section">
          <div class="container">
            <div class="row">
              <div class="col-md-10 col-lg-8 mx-auto text-center">
                <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
                <h2 class="text-white mb-5">
                  Submit your email for news & event updates!
                </h2>

                <form class="form-inline d-flex">
                  <input
                    type="email"
                    class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                    id="inputEmail"
                    placeholder="Enter email address..."
                    required
                  />
                  <button type="submit" class="btn btn-primary mx-auto">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section class="contact-section bg-black">
          <div class="container">
            <div class="row">
              <div class="col-md-4 mb-3 mb-md-0">
                <div class="card py-4 h-100">
                  <div class="card-body text-center">
                    <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                    <h4 class="text-uppercase m-0">Address</h4>
                    <hr class="my-4" />
                    <div class="small text-black-50">
                      216 BBC Complex, Near Savaliya Circle. Yogi-Chowk Surat
                      395010
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4 mb-3 mb-md-0">
                <div class="card py-4 h-100">
                  <div class="card-body text-center">
                    <i class="fas fa-envelope text-primary mb-2"></i>
                    <h4 class="text-uppercase m-0">Email</h4>
                    <hr class="my-4" />
                    <div class="small text-black-50">
                      <a href="mailto:contact@alaknandainfoplus.com">contact@alaknandainfoplus.com</a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4 mb-3 mb-md-0">
                <div class="card py-4 h-100">
                  <div class="card-body text-center">
                    <i class="fas fa-mobile-alt text-primary mb-2"></i>
                    <h4 class="text-uppercase m-0">Phone</h4>
                    <hr class="my-4" />
                    <a href="tel:+919327197604"className="small text-black-50">+91 93271-97604</a>
                    {/* <div class="">+91 93271-97604</div> */}
                    
                  </div>
                </div>
              </div>
            </div>

            {/* <div class="social d-flex justify-content-center">
              <a
                href="https://www.instagram.com/uniongarnetsociety/"
                class="mx-2"
              >
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
              </a>
              <a href="https://www.facebook.com/unioncollege/" class="mx-2">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/unioncollege" class="mx-2">
                <i class="fab fa-twitter"></i>
              </a>
            </div> */}
          </div>
        </section>

        <footer class="bg-black small text-center text-white-50 j">
          <div class="container">Copyright &copy; Alaknanda InfoPlus</div>
        </footer>
      </body>
    </>
  );
}

export default App;
