
import "./project.css";
import diagram from "../assets/picsForSite/erdiagram.png";
import digs from "../assets/picsForSite/digsfact.png";
import ft from "../assets/picsForSite/fruitytreasures.png";
import um from "../assets/picsForSite/UM.png";
import turt from "../assets/turtles.png";

export default function Project() {
  return (
    <div
      id="project"
      className="pb-5"
      style={{
        backgroundColor: "#e7e7e7",
        marginTop: "0",
        fontFamily: "public-sans",
      }}
    >
      <div>
        <p
          className="d-flex justify-content-center justify-content-md-start mx-md-0 ps-0 ps-md-3 fw-semibold"
          style={{ fontSize: "30px", color: "#340545", paddingTop: "10vh" }}
        >
          Some of My Projects
        </p>
      </div>
      <div className="pt-5">
        <img src={turt} alt="" className="turtle-back" />
        <div className="container text-center">
          <div className="row row-cols-1 row-cols-md-2">
            <div className="col mx-auto d-block">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="align-items-center"
                href="https://digsfact.com/"
              >
                <img
                  src={digs}
                  alt=""
                  className="shadow-lg circle-img img-fluid"
                  width="400"
                  height="250"
                />
              </a>
              <p className="pt-3 fw-semibold font-size-20">DigsFact Website</p>
              <p className="position-relative z-2 fw-medium pb-3">
                I developed the user interface for DigsFact's website redesign
                using Angular, HTML, CSS, and JavaScript. Collaborating closely
                with a UX designer, I translated Figma designs into a fully
                responsive site, ensuring an optimal user experience on both
                desktop and mobile devices.
              </p>
            </div>
            <div className="col mx-auto d-block"> 
            <a
                target="_blank"
                rel="noopener noreferrer"
                className="align-items-center"
                href="https://github.com/laurenlangbort/MadridMetroSystem"
              >
              <img
                src={diagram}
                alt=""
                className="shadow-lg circle-img img-fluid"
                width="400"
                height="250"
              /> 
              </a>
              <p className="pt-3 fw-semibold font-size-20">
                Madrid Metro System
              </p>
              <p className="position-relative z-2 fw-medium pb-3">
                I created and managed a SQL database for a metro card service,
                handling client registration, card recharging, and usage
                tracking. Implemented triggers to automatically update card
                prices based on factors like age and location, ensuring seamless
                management of discounts and client data.
              </p>
            </div>
            <div className="col mx-auto d-block mt-0 mt-md-3"> 
            <a
                target="_blank"
                rel="noopener noreferrer"
                className="align-items-center"
                href="https://github.com/laurenlangbort/fruitytreasures"
              >
              <img
                src={ft}
                alt=""
                className="shadow-lg circle-img img-fluid"
                width="400"
                height="250"
              /> 
              </a>
              <p className="pt-3 fw-semibold font-size-20">Fruity Treasures</p> 
              <p className="position-relative z-2 fw-medium pb-3"> 
              I worked with a team of four to develop an e-commerce site for selling unique fruits from underrepresented cultures. Built with HTML, CSS, and JavaScript, and designed to improve accessibility and usability. The project includes PHP and SQL for cart management and order processing.
              </p>
            </div>
            <div className="col mx-auto d-block mt-0 mt-md-3 ">
              {" "} 
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="align-items-center"
                href="https://github.com/laurenlangbort/UM"
              >
              <img
                src={um}
                alt=""
                className="shadow-lg circle-img img-fluid"
                width="400"
                height="250"
              /> 
              </a>
              <p className="pt-3 fw-semibold font-size-20">Universal Machine</p> 
              <p className="position-relative z-2 fw-medium pb-3"> I worked with a partner to develop a Universal Machine (UM) that simulates a simplified instruction set architecture. Managed memory segmentation using C arrays, implemented core instructions like addition and multiplication, and built an execution cycle to process binary files. Thoroughly tested memory management and instruction execution to ensure correctness and efficiency.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
