
import "./contact.css";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png"; 
import resume from "../assets/resume.png";

export default function About() {
  return (
    <div
      className="overflow-y-hidden"
      id="contact"
      style={{
        backgroundColor: "#e7e7e7",
        marginTop: "0",
        height: "50vh",
        fontFamily: "public-sans",
      }}
    >
      <div
        className="d-block mx-auto width-response"
        style={{
          height: "200px",
          backgroundColor: "rgba(194, 191, 197, 0.25)",
          borderRadius: "24px",
        }}
      >
        <p className="text-center py-2 py-md-4 fw-semibold" style={{ fontSize: "30px", color: "#340545",}}>Contact Me</p>
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
          <a className="ps-md-5 px-0" style={{fontSize: "20px"}} href="mailto:lauren.langbort@tufts.edu">
            lauren.langbort@tufts.edu
          </a> 
          {/* <div className="d-flex flex-column justify-content-center align-items-center">
            <p className="text-center">Social Media</p> */}
            <div className="d-flex flex-row justify-content-center align-items-center pe-md-5 pe-0 py-2 py-md-0"> 
            {/* <p className="border-text text px-2 py-1 fw-medium align-items-center mx-3">RESUME</p>  */}
            <a target="_blank" rel="noopener noreferrer" className="align-items-center" href="https://github.com/laurenlangbort">
                <img src={resume} alt="" width="45" className="mx-3" />
              </a>
              <a target="_blank" rel="noopener noreferrer" className="align-items-center" href="https://github.com/laurenlangbort">
                <img src={github} alt="" width="45" className="mx-3" />
              </a> 
              <a target="_blank" rel="noopener noreferrer" className="align-items-center" href="https://www.linkedin.com/in/lauren-langbort/">
                <img src={linkedin} alt="" width="45" className="mx-3" />
              </a>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
